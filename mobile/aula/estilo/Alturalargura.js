/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';

const AlturaLargura = () => {
  return (
    <View style={styles.topo}>
      <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
      <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  topo: {
    top: 50,
    flex: 1,
    alignItems: 'center',
  },
});

export default AlturaLargura;
