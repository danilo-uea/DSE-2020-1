import * as React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './src/home/Home';
import Detalhes from './src/detalhes/Detalhes';

function DetailsScreen({navigation}) {
  return (
    <View>
      <View style={styles.screen}>
        {/* <Screen navigation={navigation} name="Detalhes" /> */}
      </View>
      <View style={styles.conteudo}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Detalhes" component={Detalhes} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  containerGeral: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  screen: {
    height: 60,
  },
});

export default App;
