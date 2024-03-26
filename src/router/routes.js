export default [
    {
        path: '/',
        name: 'welcome',
        component: () => import('../pages/Welcome.vue'),
    },
    {
        path: '/main',
        name: 'main',
        component: () => import('../pages/Main.vue'),
    },
    {
        path: '/signup',
        name: 'signup',
        component: () => import('../pages/Signup.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../pages/Login.vue'),
    },
    {
        path: '/recent',
        name: 'recent',
        component: () => import('../pages/Recent.vue'),
    },
];
