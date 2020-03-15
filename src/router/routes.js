/**
 * This files used to generate router from router.config
 */

import React from 'react';
import {
  HashRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import Pages from '../pages';
import config from './router.config';

const renderComponentRouter = (rs, fpath) => {
  const routers = rs.map((r) => {
    const {
      children, key, path, component,
    } = r;
    const WrapComponent = Pages[key] || Pages[component];
    if (!WrapComponent) {
      console.error('Component not found or not register!');
    }

    if (children && children.length > 0) {
      return (
        <Route path={path} key={key}>
          <WrapComponent>{renderComponentRouter(children, path)}</WrapComponent>
        </Route>
      );
    }
    return <Route path={r.path} component={WrapComponent} key={key} />;
  });
  const redirectRoute = (
    <Route exact path={fpath} render={() => <Redirect to={rs[0].path} push />} key="default" />
  );
  const notFoundRoute = <Route component={Pages.NotFound} />;
  return <Switch>{[redirectRoute].concat(routers, [notFoundRoute])}</Switch>;
};

const renderRouter = () => {
  if (!config || config.length < 1) return null;
  const fpath = '/';
  return renderComponentRouter(config, fpath);
};

export { renderComponentRouter };
export default () => <Router>{renderRouter()}</Router>;
