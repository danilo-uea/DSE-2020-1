import * as React from 'react';
//import {View, Text, Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './src/paginas/home';
import Temperatura from './src/paginas/temperatura';
import PessoaTemperatura from './src/paginas/pessoastemp';
import JanelaAr from './src/paginas/janelaarcondicionado';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Fluxo de pessoas">
        <Drawer.Screen name="Fluxo de pessoas" component={Home} />
        <Drawer.Screen name="Temperatura" component={Temperatura} />
        <Drawer.Screen
          name="Pessoas x Temperaturas"
          component={PessoaTemperatura}
        />
        <Drawer.Screen name="Janela e Ar-condicionado" component={JanelaAr} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
