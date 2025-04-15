import React, { FC } from 'react';
import UserCart from 'shared/ui/UserCart';
import styles from './index.module.scss';
import LayoutForSection from 'shared/ui/LoyautForSection';
import { IUser } from 'shared/types';

const TopCreatorsSection: FC<{ creators: IUser[] }> = ({ creators }) => {
  return (
    <LayoutForSection
      title='Trending Creators'
      description='Checkout Our Trending Creators'
    >
      {creators?.map((creator) => {
        return <UserCart user={creator} />;
      })}
    </LayoutForSection>
  );
};

export default TopCreatorsSection;
