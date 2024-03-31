import { Suspense } from 'react';
import { useAuthentication } from './hooks/useAuthentication';
import { useRoutes } from 'react-router';
import routes from '~react-pages';

function App() {
  useAuthentication();
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {useRoutes(routes)}
    </Suspense>
  );
}

export default App;
