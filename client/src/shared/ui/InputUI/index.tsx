import React from 'react';
import styles from './index.module.scss';
export interface IInput {
  id: string;
  type: string;
  name?: string;
  label?: string;
  placeholder?: string;
  onChange: (event: React.SyntheticEvent) => void;
  value: string;
  classN?: string;
}
const InputUi = ({
  id,
  type,
  placeholder,
  label,
  name,
  onChange,
  value = '',
  classN
}: IInput) => {
  return (
    <>
      {label && (
        <label htmlFor={id} className={`${styles.labelStyles} ${classN}`}>
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className={`${styles.inputStyles} ${classN}`}
        value={value}
      />
    </>
  );
};

export default InputUi;
