import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Screen from '../../screens/Screen';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.containerGeral}>
        <View style={styles.screen}>
          <Screen navigation={this.props.navigation} name="Home" />
        </View>
        <View style={styles.conteudo}>
          <Text>Conteúdo</Text>
        </View>
      </View>
    );
  }
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
  conteudo: {
    flex: 1,
    backgroundColor: '#E4E1E1',
  },
});
