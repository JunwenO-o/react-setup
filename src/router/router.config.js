/**
 * This file defines the router configuration
 * pages folder file structure should be same as the router config
 */

const router = [
  {
    key: 'Home', // string should be enums
    path: '/home',
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
        path: '/home/contactus',
        auth: [],
      },
      {
        key: 'Dashboard',
        path: '/home/dashboard',
        auth: [], // user type should be enums
        children: [
          { key: 'Summary', path: '/home/dashboard/summary' },
          { key: 'ReportEdit', path: '/home/dashboard/reports/:id/edit' },
          { key: 'Report', path: '/home/dashboard/reports/:id', component: 'Report' },
          { key: 'Reports', path: '/home/dashboard/reports' },
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
