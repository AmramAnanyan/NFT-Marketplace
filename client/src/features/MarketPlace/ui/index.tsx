import { useEffect, useState } from 'react';
import {
  MARKETPLACE_PAGE_PRODUCTS,
  SELECTED_TAB
} from 'shared/constants/productBar';
import ProductFilterBar, { IProductFilter } from 'shared/ui/ProductFilterBar';
import Tabs from './Tabs';

const MarketPlaceFeatures = () => {
  const [selectedTab, setSelectedTab] = useState(SELECTED_TAB.ONE);
  const handleSelect = (item: IProductFilter) => {
    setSelectedTab(item.id);
  };
  useEffect(() => {}, []);
  return (
    <section>
      <ProductFilterBar
        filters={MARKETPLACE_PAGE_PRODUCTS}
        onClick={handleSelect}
      />
      {selectedTab === SELECTED_TAB.ONE && <Tabs.NFTS />}
      {selectedTab === SELECTED_TAB.TWO && <Tabs.Collections />}
    </section>
  );
};

export default MarketPlaceFeatures;
