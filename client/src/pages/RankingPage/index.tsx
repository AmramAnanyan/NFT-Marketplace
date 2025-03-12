import RankingFeatures from 'features/Ranking/ui';
import PageTitle from 'shared/ui/PageTitle';
import PageWrapper from 'shared/ui/PageWrapper';
import StarWaveBackground from 'shared/ui/StarWaveBackground';

const RankingPage = () => {
  return (
    <PageWrapper>
      <StarWaveBackground height='240px'>
        <PageTitle
          title='Top Creators Dashboard'
          subTitle='Discover and Explore Leading Creators'
        />
      </StarWaveBackground>
      <RankingFeatures />
    </PageWrapper>
  );
};

export default RankingPage;
