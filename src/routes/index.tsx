import { createBrowserRouter } from 'react-router-dom';
import { About } from '~/modules/About';
import { Contact } from '~/modules/Contact';
import Home from '~/modules/Home';
import { Services } from '~/modules/Services';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]);

// Tipar os links que são para direcionamento interno com os tipes do paths
console.log(router.routes);
