import { Switch, Route } from 'react-router-dom';
import { IRoute } from 'src/interfaces';

export default function RoutesFactory(routes: IRoute[]) {
  return (
    <Switch>
      {
        routes.map((route: IRoute) => <Route to={route.path} component={route.component} exact />)
      }
    </Switch>
  );
}