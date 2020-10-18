/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';

const DimensoesFlex = () => {
  return (
    // Tente remover o `flex: 1` na visualização pai View.
    // O pai não terá dimensões, então os filhos não podem expandir.
    // E se você adicionar `height: 300` em vez de` flex: 1`?
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'powderblue'}} />
      <View style={{flex: 2, backgroundColor: 'skyblue'}} />
      <View style={{flex: 3, backgroundColor: 'steelblue'}} />
    </View>
  );
};

export default DimensoesFlex;
