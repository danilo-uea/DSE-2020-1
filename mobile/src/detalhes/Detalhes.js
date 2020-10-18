import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Screen from '../../screens/Screen';

export default class Detalhes extends React.Component {
  render() {
    return (
      <View style={styles.containerGeral}>
        <View style={styles.screen}>
          <Screen navigation={this.props.navigation} name="Detalhes" />
        </View>
        <View style={styles.conteudo}>
          <Text>Detalhes</Text>
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
