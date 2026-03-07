import { useState } from 'react';

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

/**
 * Custom hook for handling form submissions to Formspree
 * @param options - Configuration options including formspreeId and callbacks
 * @returns Object containing submission state and submit function
 */
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
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        onSuccess?.();
      } else {
        setSubmitStatus('error');
        onError?.(new Error('Form submission failed'));
      }
    } catch (error) {
      console.error('Form submission error:', error);
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
