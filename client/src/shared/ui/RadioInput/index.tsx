// RadioInput.tsx
import React from 'react';
import styles from './index.module.scss';

interface RadioOption {
  value: string;
  label: string;
}

const RadioInput: React.FC<{
  options: RadioOption[];
  selectedValue?: string;
  onChange?: (value: string) => void;
  name: string;
}> = ({ options, selectedValue, onChange, name }) => {
  return (
    <div className={styles.radioGroup}>
      {options.map((option) => (
        <label key={option.value} className={styles.radioItem}>
          <input
            type='radio'
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={(e) => onChange && onChange(e.target.value)}
            className={styles.radioInput}
          />
          <span className={styles.customRadio} />
          <span className={styles.labelText}>{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioInput;
