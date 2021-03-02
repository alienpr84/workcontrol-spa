import Home from 'src/pages/home';
import DealersList from 'src/pages/dealers/list';
import { IRoute } from 'src/interfaces';

const routes: IRoute[] = [
  {
    path: '/home',
    component: Home,
    exact: true
  },
  {
    path: '/dealers',
    component: DealersList
  }
];

export default routes;