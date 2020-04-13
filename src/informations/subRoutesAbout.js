import { GuysGrindTiles } from '../components/about/sub/indexImport'
import LayerText from '../components/about/sub/LayerText'
import { RedirectErrorTo } from '../utils/routesUtils'

const subRoutesAbout = [
  {
    path: '/about/guys',
    exact: true,
    name: 'Guys',
    component: GuysGrindTiles
  },
  {
    path: '/about/companie',
    exact: true,
    name: 'La compagnie',
    component: LayerText
  },
  {
    path: '/about/*',
    component: RedirectErrorTo,
  }
]

export default subRoutesAbout