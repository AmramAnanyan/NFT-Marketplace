// SearchInput.tsx
import React, { useState } from 'react';
import styles from './index.module.scss';

const SearchInput = ({ className }: { className?: string }) => {
  const [value, setValue] = useState('');

  return (
    <div className={`${styles.container} ${className || ''}`}>
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={styles.input}
      />
      {!value && <div className={styles.placeholder}>Search...</div>}
    </div>
  );
};

export default SearchInput;
