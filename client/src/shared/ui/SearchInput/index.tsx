// SearchInput.tsx
import React, { ChangeEvent, FC, useState } from 'react';
import styles from './index.module.scss';
export interface ISearchInput {
  className?: string;
  onSearch(value: string): void;
}
const SearchInput: FC<ISearchInput> = ({ className, onSearch }) => {
  const [value, setValue] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <input
        type='text'
        value={value}
        onChange={(e) => handleChange(e)}
        className={styles.input}
      />
      {!value && <div className={styles.placeholder}>Search...</div>}
    </div>
  );
};

export default SearchInput;
