import { Switch, Route } from 'wouter';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';

const Routers = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routers;
