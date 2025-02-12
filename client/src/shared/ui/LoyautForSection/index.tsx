import React from 'react';
import styles from './index.module.scss';
interface ILoyautForSection {
  title?: string;
  description?: string;
  children: React.ReactNode;
}
const LayoutForSection = ({
  title,
  description,
  children
}: ILoyautForSection) => {
  return (
    <section className={styles.conteiner}>
      <div className={styles.headingWrraper}>
        <h2>{title ? title : 'Trending Collection'}</h2>
        <h4>
          {description
            ? description
            : 'Checkout Our Weekly Updated Trending Collection.'}
        </h4>
      </div>
      <div className={styles.colectionSection}>{children}</div>
    </section>
  );
};

export default LayoutForSection;
