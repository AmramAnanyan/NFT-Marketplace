import MarketPlaceFeatures from 'features/MarketPlace/ui';
import PageTitle from 'shared/ui/PageTitle';
import PageWrapper from 'shared/ui/PageWrapper';
import ProductFilterBar from 'shared/ui/ProductFilterBar';

const MarketPlace = () => {
  return (
    <PageWrapper>
      <PageTitle
        title='Explore & Collect'
        subTitle='From Our Unique Collection'
      />
      <MarketPlaceFeatures />
    </PageWrapper>
  );
};

export default MarketPlace;
