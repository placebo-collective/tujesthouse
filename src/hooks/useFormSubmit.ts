import { useState, useEffect, useRef } from 'react';

declare const grecaptcha: {
  ready(callback: () => void): void;
  execute(siteKey: string, options: { action: string }): Promise<string>;
};

export type SubmitStatus = 'idle' | 'success' | 'error';

export type FormType = 'artist' | 'workshop';

interface UseFormSubmitOptions<T> {
  formType: FormType;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

interface UseFormSubmitReturn<T> {
  submitStatus: SubmitStatus;
  isSubmitting: boolean;
  submitForm: (data: T) => Promise<void>;
  resetStatus: () => void;
}

const RECAPTCHA_TOKEN_TTL_MS = 90_000; // tokens expire at 2min; refresh at 1.5min

export function useFormSubmit<T = Record<string, unknown>>(
  options: UseFormSubmitOptions<T>
): UseFormSubmitReturn<T> {
  const { formType, onSuccess, onError } = options;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  const cachedToken = useRef<string | null>(null);
  const tokenGeneratedAt = useRef<number>(0);

  const getRecaptchaToken = (): Promise<string> => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? '';
    const age = Date.now() - tokenGeneratedAt.current;

    if (cachedToken.current && age < RECAPTCHA_TOKEN_TTL_MS) {
      return Promise.resolve(cachedToken.current);
    }

    return new Promise<string>((resolve, reject) => {
      if (typeof grecaptcha === 'undefined') {
        reject(new Error('reCAPTCHA not loaded'));
        return;
      }
      grecaptcha.ready(() => {
        grecaptcha
          .execute(siteKey, { action: 'submit' })
          .then((token) => {
            cachedToken.current = token;
            tokenGeneratedAt.current = Date.now();
            resolve(token);
          })
          .catch(reject);
      });
    });
  };

  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? '';
    const scriptUrl = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL ?? '';

    // Pre-generate reCAPTCHA token so it's ready at submit time
    if (siteKey) {
      getRecaptchaToken().catch(() => {});
    }

    // Warm up Apps Script to reduce cold start latency
    if (scriptUrl) {
      fetch(scriptUrl, { method: 'GET' }).catch(() => {});
    }
  }, []);

  const submitForm = async (data: T) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const scriptUrl = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL ?? '';
      const recaptchaToken = await getRecaptchaToken();

      const response = await fetch(scriptUrl, {
        method: 'POST',
        body: JSON.stringify({ ...data, 'g-recaptcha-response': recaptchaToken, formType }),
      });

      // Invalidate cached token after use
      cachedToken.current = null;

      const result = await response.json().catch(() => null);

      if (response.ok && result?.success) {
        setSubmitStatus('success');
        onSuccess?.();
      } else {
        if (process.env.NODE_ENV === 'development') {
          console.error('Submission error:', response.status, result);
        }
        setSubmitStatus('error');
        onError?.(new Error('Form submission failed'));
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Form submission error:', error);
      }
      setSubmitStatus('error');
      onError?.(error as Error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetStatus = () => {
    setSubmitStatus('idle');
  };

  return {
    submitStatus,
    isSubmitting,
    submitForm,
    resetStatus,
  };
}
