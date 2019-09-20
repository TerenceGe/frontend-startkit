import { hot } from 'react-hot-loader/root'
import { asyncComponent } from 'components/DynamicComponent'

export const Home = hot(asyncComponent(() => import('containers/App/Home'/* webpackChunkName: 'Home' */)))

