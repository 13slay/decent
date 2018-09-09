export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register' },
      { path: '/user/register-result', component: './User/RegisterResult' },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      // dashboard
      { path: '/', redirect: '/dashboard' },
      {
        path: '/dashboard',
        name: 'home',
        icon: 'home',
        component: '/Dashboard/index.js',
      },
      {
        path: '/project',
        name: 'project',
        icon: 'pie-chart',
        component: '/Project/list.js',
      },
      {
        name: 'account',
        icon: 'user',
        path: '/account',
        component: './Account/Center/Center',
      },
      {
        hideInMenu: true,
        path: '/project/detail/:id',
        name: 'detail',
        component: '/Project/Detail.js',
      },
      {
        hideInMenu: true,
        name: 'result',
        path: '/result',
        routes: [
          // result
          { path: '/result/success', name: 'success', component: './Result/Success' },
          { path: '/result/fail', name: 'fail', component: './Result/Error' },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
