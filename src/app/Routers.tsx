import { Route, Router } from 'wouter';
import Home from '@/pages/Home';

const Routers = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
    </Router>
  );
};

export default Routers;
