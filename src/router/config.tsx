
import { RouteObject } from 'react-router-dom';
import HomePage from '../pages/home/page';
import AboutPage from '../pages/about/page';
import VehiclesPage from '../pages/vehicles/page';
import ServicesPage from '../pages/services/page';
import ContactPage from '../pages/contact/page';
import NotFound from '../pages/NotFound';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/vehicles',
    element: <VehiclesPage />
  },
  {
    path: '/services',
    element: <ServicesPage />
  },
  {
    path: '/contact',
    element: <ContactPage />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default routes;
