/**
 * This file defines the router configuration
 * pages folder file structure should be same as the router config
 */

const router = [
  {
    key: 'Home', // string should be enums
    path: '/',
    meta: {
      // extra info optional
      icon: '',
      name: '',
    },
    auth: [],
    loginRequired: true,
    children: [
      {
        key: 'ContactUs',
        path: '/contactus',
        auth: [],
      },
      {
        key: 'Dashboard',
        path: '/dashboard',
        auth: [], // user type should be enums
        children: [
          { key: 'Summary', path: '/dashboard/summary' },
          { key: 'ReportEdit', path: '/dashboard/reports/:id/edit' },
          { key: 'Report', path: '/dashboard/reports/:id', component: 'Report' },
          { key: 'Reports', path: '/dashboard/reports' },
        ],
      },
    ],
  },
  {
    key: 'Login',
    path: '/login',
    title: 'Login',
  },
  {
    key: 'NotFound',
    path: '/404',
    title: 'Page not found',
    component: '404',
  },
];

export default router;
