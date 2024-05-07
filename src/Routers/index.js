import { lazy } from 'react'

const Homepage = lazy(() => import('../Pages/Homepage'))
const About = lazy(() => import('../Pages/About'))
const Haji = lazy(() => import('../Pages/Haji'))
const Tour = lazy(() => import('../Pages/Tour'))
const Gold = lazy(() => import('../Pages/Gold'))
const Cash = lazy(() => import('../Pages/Cash'))

const Routers = [
    {
        path: '/',
        component: Homepage,
        exact: true
    },
    {
        path: '/tentang-mitranet',
        component: About,
        exact: false
    },
    {
        path: '/haji',
        component: Haji,
        exact: false
    },
    {
        path: '/wisata',
        component: Tour,
        exact: false
    },
    {
        path: '/emas',
        component: Gold,
        exact: false
    },
    {
        path: '/dana-tunai',
        component: Cash,
        exact: false
    },
]

export default Routers