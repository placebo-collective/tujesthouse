import styles from './Checkbox.module.scss';

interface CheckboxProps {
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  children: React.ReactNode;
}

export default function Checkbox({
  name,
  checked,
  onChange,
  required = false,
  children,
}: CheckboxProps) {
  return (
    <label className={styles.checkboxWrapper}>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        required={required}
        className={styles.checkboxInput}
      />
      <div className={styles.checkboxLabel}>{children}</div>
    </label>
  );
}
