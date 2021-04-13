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
    },
    {
        path: '/companies',
        name: 'Companies',
        component: () => import('@/views/Companies')
    },
    {
        path: '/contacts/:id',
        name: 'ContactDetail',
        component: () => import('@/views/ContactDetail')
    },
    {
        path: '/companies/:id',
        name: 'CompanyDetail',
        component: () => import('@/views/CompanyDetail')
    }
]