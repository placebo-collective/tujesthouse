import { useState } from 'react';

declare const grecaptcha: {
  ready(callback: () => void): void;
  execute(siteKey: string, options: { action: string }): Promise<string>;
};

export type SubmitStatus = 'idle' | 'success' | 'error';

interface UseFormSubmitOptions<T> {
  formspreeId: string;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

interface UseFormSubmitReturn<T> {
  submitStatus: SubmitStatus;
  isSubmitting: boolean;
  submitForm: (data: T) => Promise<void>;
  resetStatus: () => void;
}

export function useFormSubmit<T = Record<string, unknown>>(
  options: UseFormSubmitOptions<T>
): UseFormSubmitReturn<T> {
  const { formspreeId, onSuccess, onError } = options;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  const submitForm = async (data: T) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? '';
      const recaptchaToken = await new Promise<string>((resolve, reject) => {
        if (typeof grecaptcha === 'undefined') {
          reject(new Error('reCAPTCHA not loaded'));
          return;
        }
        grecaptcha.ready(() => {
          grecaptcha.execute(siteKey, { action: 'submit' }).then(resolve).catch(reject);
        });
      });

      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, 'g-recaptcha-response': recaptchaToken }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        onSuccess?.();
      } else {
        if (process.env.NODE_ENV === 'development') {
          const body = await response.json().catch(() => null);
          console.error('Formspree error:', response.status, body);
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
