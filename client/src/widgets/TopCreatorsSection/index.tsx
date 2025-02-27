import React from 'react';
import UserCart from 'shared/ui/UserCart';
import styles from './index.module.scss';
import LoyautForSection from 'shared/ui/LoyautForSection';

const TopCreatorsSection = () => {
  return (
    <section>
      <LoyautForSection
        title='Trending Creators'
        description='Checkout Our Trending Creators'
      >
        <UserCart />
        <UserCart />
        <UserCart />
        <UserCart />
        <UserCart />
        <UserCart />
      </LoyautForSection>
    </section>
  );
};

export default TopCreatorsSection;
