import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Button, Alert} from 'react-native';
import Topo from '../../topo';
import api from '../../servicos/api';
import {format} from 'date-fns';
import {Grid, LineChart, XAxis, YAxis} from 'react-native-svg-charts';

export default class Home extends Component {
  state = {
    dados: [],
  };

  componentDidMount() {
    this.preencherFluxo();
  }

  preencherFluxo = async () => {
    const fluxoPessoas = await api.get('/fluxoPessoas');
    this.setState({dados: fluxoPessoas.data});
  };

  atualizar = () => {
    this.preencherFluxo();
    Alert.alert('FLUXO DE PESSOAS ATUALIZADO!');
  };

  render() {
    const {dados} = this.state;
    var formatoData;
    var y = [];
    for (var i = 0; i < dados.length; i++) {
      y.push(dados[i].qtd_pessoas);
    }

    const axesSvg = {fontSize: 10, fill: 'grey'};
    const verticalContentInset = {top: 10, bottom: 10};
    const xAxisHeight = 30;

    return (
      <View style={styles.containerGeral}>
        <View style={styles.topo}>
          <Topo navigation={this.props.navigation} name="Fluxo de pessoas" />
        </View>
        <ScrollView style={styles.scroll}>
          <View style={styles.conteudo}>
            <View style={styles.grafico}>
              <Text style={styles.titulo}>Gráfico</Text>
              <View style={{height: 200, padding: 20, flexDirection: 'row'}}>
                <YAxis
                  data={y}
                  style={{marginBottom: xAxisHeight}}
                  contentInset={verticalContentInset}
                  svg={axesSvg}
                />
                <View style={{flex: 1, marginLeft: 10}}>
                  <LineChart
                    style={{flex: 1}}
                    data={y}
                    contentInset={verticalContentInset}
                    svg={{stroke: 'rgb(134, 65, 244)'}}>
                    <Grid />
                  </LineChart>
                  <XAxis
                    style={{marginHorizontal: -10, height: xAxisHeight}}
                    data={y}
                    formatLabel={(value, index) => index}
                    contentInset={{left: 10, right: 10}}
                    svg={axesSvg}
                  />
                </View>
              </View>
            </View>
            <View style={styles.botao}>
              <Button
                onPress={this.atualizar}
                title="ATUALIZAR"
                color="#841584"
              />
            </View>
            <View style={styles.lista}>
              <Text style={styles.titulo}>Lista</Text>
              <View style={styles.linha} />
              {dados.map(function (item) {
                formatoData = format(
                  new Date(item.data_hora),
                  "dd'/'MM'/'yyyy HH:mm",
                );
                return (
                  <View key={item.id}>
                    <Text>Qtd de pessoas: {item.qtd_pessoas}</Text>
                    <Text>Data hora: {formatoData}</Text>
                    <Text />
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  botao: {
    marginBottom: 10,
  },
  linha: {
    borderBottomColor: '#D8D3D3',
    borderBottomWidth: 1,
    marginBottom: 5,
    marginTop: 5,
  },
  titulo: {
    fontWeight: 'bold',
  },
  LineChart: {
    height: 200,
  },
  grafico: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  lista: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  //----------------------------
  containerGeral: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  topo: {
    height: 60,
  },
  scroll: {
    flex: 1,
    backgroundColor: '#E4E1E1',
  },
  conteudo: {
    padding: 15,
  },
});
