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
    </PageWrapper>
  );
};

export default RankingPage;
