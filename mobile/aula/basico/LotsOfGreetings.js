import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  acima: {
    top: 50,
  },
});

const Qualquer = (props) => {
  return (
    <View style={styles.center}>
      <Text>Hello {props.name}!</Text>
    </View>
  );
};

const LotsOfGreetings = () => {
  return (
    <View style={[styles.center, styles.acima]}>
      <Qualquer name="Rexxar" />
      <Qualquer name="Jaina" />
      <Qualquer name="Valeera" />
    </View>
  );
};

export default LotsOfGreetings;
