import * as React from 'react';
// import {View, Text, Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './src/home/Home';
import Detalhes from './src/detalhes/Detalhes';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Fluxo de pessoas">
        <Drawer.Screen name="Fluxo de pessoas" component={Home} />
        <Drawer.Screen name="Detalhes" component={Detalhes} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
