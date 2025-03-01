import MarketPlaceFeatures from 'features/MarketPlace/ui';
import PageTitle from 'shared/ui/PageTitle';
import PageWrapper from 'shared/ui/PageWrapper';
import ProductFilterBar from 'shared/ui/ProductFilterBar';
import StarWaveBackground from 'shared/ui/StarWaveBackground';

const MarketPlace = () => {
  return (
    <PageWrapper>
      <StarWaveBackground height='240px'>
        <PageTitle
          title='Explore & Collect'
          subTitle='From Our Unique Collection'
        />
      </StarWaveBackground>
      <MarketPlaceFeatures />
    </PageWrapper>
  );
};

export default MarketPlace;
