import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
// import {Dimensions} from 'react-native';
// import {Feather} from './menu.png';
import {ProfileScreen, MessageScreen, ActivityScreen} from './screens';

const DrawerNavigator = createDrawerNavigator({
  ProfileScreen,
  MessageScreen,
  ActivityScreen,
});

export default createAppContainer(DrawerNavigator);
