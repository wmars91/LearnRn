import { Navigation } from 'react-native-navigation';

//import tab screen
import Home from './Home';
import Heroes from '../containers/heroes';
import Settings from './Settings';

//import screen
import HeroAdd from './HeroAdd';
import HeroView from './HeroView';

// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
  Navigation.registerComponent('tab.Home', () => Home);
  Navigation.registerComponent('tab.Heroes', () => Heroes, store, Provider);
  Navigation.registerComponent('tab.Settings', () => Settings);
  Navigation.registerComponent('tab.Settings', () => Settings);
  Navigation.registerComponent('push.HeroAdd', () => HeroAdd);
  Navigation.registerComponent('push.HeroView', () => HeroView);
}