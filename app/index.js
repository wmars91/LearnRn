// import React, {Component} from 'react';
// import {
//     View,
//     Text,
//     TouchableOpacity,
//     StyleSheet
// } from 'react-native';
// // import ListAnime from './ListAnime';
// import NativeBaseAnatomy from './components/NativeBaseAnatomy';

// export default class index extends Component {
//     render(){
//         return(
//             <NativeBaseAnatomy/>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     header: {
//         flex: 0.2,
//         backgroundColor: "#7FFFD4"
//     },
//     footer: {
//         flex: 3,
//         backgroundColor: "#F0FFFF",
//         justifyContent: "center"
//     },
//     footerText: {
//         alignSelf: "center",
//         fontWeight: 'bold',
//         fontSize: 20
//     }
// }); 

import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens/';
import { Provider } from 'react-redux';
import store from './store';

registerScreens(store, Provider);

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Home',
      screen: 'tab.Home',
      icon: require('../img/one.png'),
      title: 'Home',
      navigatorStyle: {
          navBarHidden: true
      }
    },
    {
      label: 'Heroes',
      screen: 'tab.Heroes',
      icon: require('../img/two.png'),
      title: 'Heroes',
      navigatorStyle: {
          navBarHidden: true
      }
    },
    {
      label: 'Setting',
      screen: 'tab.Settings',
      icon: require('../img/three.png'),
      title: 'Settings',
      navigatorStyle: {
          navBarHidden: true
      }
    }
  ]
}); 