import LayoutForSection from 'shared/ui/LoyautForSection';
import NftCart from 'shared/ui/NftCart';

const DiscoverMoreNftSection = ({ data }: any) => {
  return (
    <LayoutForSection
      title='Trending NFTs by Top Creators'
      description='Discover the hottest NFTs from our top creators and explore exclusive digital assets.'
    >
      {data.map((item: any) => {
        return <NftCart {...item} key={item._id} />;
      })}
    </LayoutForSection>
  );
};

export default DiscoverMoreNftSection;
