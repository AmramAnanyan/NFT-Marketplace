import { Suspense } from 'react';
import './index.scss';
import Routes from 'app/Routing';
import PageLoader from 'shared/ui/PageLoader';

const App = () => {
  return (
    <div className='suspense-wrapper '>
      <Suspense fallback={<PageLoader />}>
        <Routes />
      </Suspense>
    </div>
  );
};

export default App;
