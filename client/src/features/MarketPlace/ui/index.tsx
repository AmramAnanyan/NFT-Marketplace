import { useEffect, useState } from 'react';
import {
  MARKETPLACE_PAGE_PRODUCTS,
  SELECTED_TAB
} from 'shared/constants/productBar';
import ProductFilterBar, { IProductFilter } from 'shared/ui/ProductFilterBar';
import Tabs from './Tabs';
import { useAppSelector } from 'shared/hooks/useAppSelector';
import { setAllNfts } from 'entities/MarketPlace/model';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { getAllNftsAsync } from '../thunks';
import styles from './index.module.scss';
import SearchInput from 'shared/ui/SearchInput';

const MarketPlaceFeatures = () => {
  const [selectedTab, setSelectedTab] = useState(SELECTED_TAB.ONE);
  const nfts = useAppSelector(setAllNfts);
  const dispatch = useAppDispatch();
  const handleSelect = (item: IProductFilter) => {
    setSelectedTab(item.id);
  };
  useEffect(() => {
    if (selectedTab === SELECTED_TAB.ONE) {
      dispatch(getAllNftsAsync());
    }
  }, [selectedTab]);
  console.log(nfts, 'nfts');
  return (
    <section className={styles.section}>
      <SearchInput />
      <ProductFilterBar
        filters={MARKETPLACE_PAGE_PRODUCTS}
        onClick={handleSelect}
      />
      <div className={styles.tabs}>
        {selectedTab === SELECTED_TAB.ONE && <Tabs.NFTS nfts={nfts.data} />}
        {selectedTab === SELECTED_TAB.TWO && <Tabs.Collections />}
      </div>
    </section>
  );
};

export default MarketPlaceFeatures;
