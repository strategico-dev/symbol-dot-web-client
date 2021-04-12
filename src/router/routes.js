export default [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home')
    },
    {
        path: '/registration',
        name: 'Registration',
        component: () => import('@/views/Registration')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login')
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: () => import('@/views/Contacts')
    }
]