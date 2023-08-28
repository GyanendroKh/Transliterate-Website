import {
  RootRoute,
  Route,
  Router,
  createBrowserHistory
} from '@tanstack/react-router';
import { Root } from './routes/_root';
import { HomePage } from './routes/home';

const rootRoute = new RootRoute({
  component: Root
});

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage
});

const routeTree = rootRoute.addChildren([homeRoute]);
const history = createBrowserHistory();

export const router = new Router({
  history,
  routeTree
});
