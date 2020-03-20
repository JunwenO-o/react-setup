/**
 * This files used to generate router from router.config
 */

import React from 'react';
import {
  HashRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import LoadableComponent from '../components/LoadableComponent';
import Pages from '../pages';
import config from './router.config';

const getRedirectPath = (furl, childPath, routes) => {
  let cPath = childPath;
  let rs = routes;
  while (cPath === furl) {
    cPath = rs[0].path;
    if (!rs[0].children) break;
    rs = rs[0].children;
  }
  return cPath;
};

const renderComponentRouter = (rs, furl, fPath) => {
  const routers = rs.map((r) => {
    const { children, key, path } = r;
    const pagePath = `${fPath}/${key}`;
    const WrapComponent = LoadableComponent(pagePath);
    if (!WrapComponent) {
      console.error('Component not found or not register!');
    }

    if (children && children.length > 0) {
      return (
        <Route path={path} key={key}>
          <WrapComponent>{renderComponentRouter(children, path, pagePath)}</WrapComponent>
        </Route>
      );
    }
    return <Route path={r.path} key={key} component={WrapComponent} />;
  });
  const childPath = getRedirectPath(furl, furl, rs);
  const redirectRoute = (
    <Route exact path={furl} render={() => <Redirect to={childPath} push />} key="default" />
  );
  const notFoundRoute = <Route component={Pages.NotFound} key="404" />;
  return <Switch>{[redirectRoute].concat(routers, [notFoundRoute])}</Switch>;
};

const renderRouter = () => {
  if (!config || config.length < 1) return null;
  const furl = '/';
  return renderComponentRouter(config, furl, '');
};

export { renderComponentRouter };
export default () => <Router>{renderRouter()}</Router>;
