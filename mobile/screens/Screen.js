import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';

export default class Screen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titulo}>
          <Text style={styles.tituloTexto}>{this.props.name}</Text>
        </View>
        <TouchableOpacity
          style={styles.menuBotao}
          onPress={this.props.navigation.openDrawer}>
          <Image style={styles.img} source={require('./menu.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titulo: {
    alignSelf: 'flex-start',
    height: 60,
    justifyContent: 'center',
  },
  tituloTexto: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  menuBotao: {
    height: 60,
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
});
