import Loadable from 'react-loadable';
import Loading from './Loading';

const LoadableComponent = (path, fallback) => Loadable({
  loader: () => import(`../pages${path}`),
  loading: fallback || Loading,
  delay: 300,
  timeout: 10000,
});

export default LoadableComponent;
