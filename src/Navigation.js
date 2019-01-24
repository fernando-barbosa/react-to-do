import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {createAppContainer, createStackNavigator, createBottomTabNavigator, createDrawerNavigator} from 'react-navigation';

import {Home, Detail} from './screens';

// const stackNavigationConfig = {
//     "Home": {
//         screen: (props) => (<Home {...props} />),
//         navigationOptions: {
//             tabBarVisible: false,
//             title: "Home"
//         }
//     },
//     "Detail": {
//         screen: () => (<Detail/>),
//         navigationOptions: {
//             tabBarVisible: false,
//             title: "Detalhes"
//         }
//     }
// };

// const StackNavigator = createStackNavigator(stackNavigationConfig);

// export default createAppContainer(StackNavigator);


const AppNavigator = createStackNavigator({
    Home: Home,
    Detail: Detail
  }, 
  {
    initialRouteName: "Home"
  });
  
  export default createAppContainer(AppNavigator);
