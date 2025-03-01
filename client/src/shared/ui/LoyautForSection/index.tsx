import React from 'react';
import styles from './index.module.scss';
interface ILoyautForSection {
  title?: string;
  description?: string;
  children: React.ReactNode;
  isHeader?: boolean;
}

const HeaderForLayout = ({
  title,
  description
}: {
  title?: string;
  description?: string;
}) => {
  return (
    <div className={styles.headingWrraper}>
      <h2>{title ? title : 'Trending Collection'}</h2>
      <h4>
        {description
          ? description
          : 'Checkout Our Weekly Updated Trending Collection.'}
      </h4>
    </div>
  );
};
const LayoutForSection = ({ children, isHeader = true }: ILoyautForSection) => {
  return (
    <section className={styles.conteiner}>
      {isHeader && <HeaderForLayout />}
      <div className={styles.colectionSection}>{children}</div>
    </section>
  );
};

export default LayoutForSection;
