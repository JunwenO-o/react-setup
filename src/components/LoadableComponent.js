import React from 'react';
import loadable from '@loadable/component';
import Loading from './Loading';

const LoadableComponent = (path, fallback) => { return loadable(() => import(`../pages${path}`), {
  fallback: fallback || <Loading />,
})};

export default LoadableComponent;
