export type FormFieldType = 'text' | 'email' | 'tel' | 'url' | 'textarea' | 'select' | 'checkbox';

export interface BaseFormField {
  label: string;
  required?: boolean;
  placeholder?: string;
  hint?: string;
}

export interface TextFormField extends BaseFormField {
  rows?: number;
}

export interface SelectFormField extends BaseFormField {
  options?: Array<{ label: string; value: string }>;
}

export interface CommonFormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  agreement: boolean;
}

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';
