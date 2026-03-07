import React from 'react';
import styles from './SharedForm.module.scss';

interface FormRowProps {
  children: React.ReactNode;
}

export default function FormRow({ children }: FormRowProps) {
  return <div className={styles.formRow}>{children}</div>;
}
