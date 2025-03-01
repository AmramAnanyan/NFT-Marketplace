// RangeInput.tsx
import React, { useState } from 'react';
import styles from './index.module.scss';

const RangeInput = () => {
  const [value, setValue] = useState(50);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className={styles.container}>
      <div
        className={styles.valueDisplay}
        style={{
          left: `${(value / 100) * 100}%`,
          opacity: showTooltip ? 1 : 0
        }}
      >
        {value}
      </div>
      <input
        type='range'
        min='0'
        max='100'
        value={value}
        style={{ '--progress': `${value}%` } as React.CSSProperties}
        className={styles.inputRange}
        onChange={(e) => setValue(Number(e.target.value))}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      />
      <div className={styles.labels}>
        <span>0</span>
        <span>100</span>
      </div>
    </div>
  );
};

export default RangeInput;
