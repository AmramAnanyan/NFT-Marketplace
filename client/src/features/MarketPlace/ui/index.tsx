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
import { getAllNftsAsync, getSearchedNftsAsync } from '../thunks';
import styles from './index.module.scss';
import SearchInput from 'shared/ui/SearchInput';
import RangeInput from 'shared/ui/RadioAnimatInput';
import RadioInput from 'shared/ui/RadioInput';
import { toast } from 'shared/ui/Toast/utils';
import useDebounce from 'shared/hooks/useDebounce';

const MarketPlaceFeatures = () => {
  const [selectedTab, setSelectedTab] = useState(SELECTED_TAB.ONE);
  const nfts = useAppSelector(setAllNfts);
  const dispatch = useAppDispatch();
  const [selectedRadioValue, setSelectedRadioValue] = useState('');
  const { debounce } = useDebounce();
  const handleSelect = (item: IProductFilter) => {
    setSelectedTab(item.id);
  };
  useEffect(() => {
    if (selectedTab === SELECTED_TAB.ONE) {
      dispatch(getAllNftsAsync());
    }
  }, [selectedTab]);
  const handleSearch = (searchQuery: string) => {
    if (searchQuery.trim().length < 2) {
      // toast().warning('Write search term please');
      return;
    } else {
      debounce({
        delay: 1000,
        callBack: () => {
          dispatch(getSearchedNftsAsync(searchQuery));
        }
      });
    }
  };
  return (
    <section className={styles.section}>
      <div className={styles.settings}>
        <SearchInput
          className={styles.settings_search}
          onSearch={handleSearch}
        />
        <RangeInput />
        <RadioInput
          name='theme'
          selectedValue={selectedRadioValue}
          onChange={(value) => {
            setSelectedRadioValue(value);
          }}
          options={[
            { value: 'dark', label: 'Dark Mode' },
            { value: 'light', label: 'Light Mode' },
            { value: 'system', label: 'System Default' }
          ]}
        />
      </div>

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
