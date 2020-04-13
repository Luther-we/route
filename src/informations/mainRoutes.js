import Home from '../components/Home'
import About from '../components/about/About'
import subRoutesAbout from './subRoutesAbout'
import { Error404 } from '../components/errors'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    name: 'Home'
  },
  {
    path:'/about',
    component: About,
    name: 'About',
    routes: [
      ...subRoutesAbout
    ]
  },
  {
    path: '*',
    component: Error404
  }
]

export default routes