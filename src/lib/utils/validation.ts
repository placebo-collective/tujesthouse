/**
 * Validation utility functions for forms
 */

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidPhone(phone: string): boolean {
  // Polish phone number format
  const phoneRegex = /^(\+48)?[\s-]?\d{3}[\s-]?\d{3}[\s-]?\d{3}$/;
  return phoneRegex.test(phone.trim());
}

export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function isNotEmpty(value: string): boolean {
  return value.trim().length > 0;
}

export type ValidationRule = {
  validator: (value: any) => boolean;
  message: string;
};

export function validateField(value: any, rules: ValidationRule[]): string | null {
  for (const rule of rules) {
    if (!rule.validator(value)) {
      return rule.message;
    }
  }
  return null;
}
