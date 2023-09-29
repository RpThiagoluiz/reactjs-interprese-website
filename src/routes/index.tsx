import { createBrowserRouter } from 'react-router-dom';
import { WrapperRoute } from '~/components/WrapperRoute';
import { About } from '~/modules/About';
import { Contact } from '~/modules/Contact';
import { Home } from '~/modules/Home';
import { Services } from '~/modules/Services';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <WrapperRoute component={<Home />} />,
  },

  {
    path: '/services',
    element: <WrapperRoute component={<Services />} />,
  },
  {
    path: '/contact',
    element: <WrapperRoute component={<Contact />} />,
  },
  {
    path: '/about',
    element: <WrapperRoute component={<About />} />,
  },
]);
