import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Button, Alert} from 'react-native';
import Topo from '../../topo';
import api from '../../servicos/api';
import {Grid, LineChart, XAxis, YAxis} from 'react-native-svg-charts';

export default class PessoaTemperatura extends Component {
  state = {
    dados: [],
  };

  componentDidMount() {
    this.preencherFluxo();
  }

  preencherFluxo = async () => {
    const temperatura = await api.get('/historicoTemperatura');
    this.setState({dados: temperatura.data});
  };

  atualizar = () => {
    this.preencherFluxo();
    Alert.alert('TEMPERATURA E QTD PESSOAS ATUALIZADOS');
  };

  render() {
    const {dados} = this.state;
    var y1 = [];
    var y2 = [];

    for (var i = 0; i < dados.length; i++) {
      y1.push(dados[i].temperatura);
    }

    for (var i = 0; i < dados.length; i++) {
      y2.push(dados[i].qtd_pessoas);
    }

    const axesSvg = {fontSize: 10, fill: 'grey'};
    const verticalContentInset = {top: 10, bottom: 10};
    const xAxisHeight = 30;

    return (
      <View style={styles.containerGeral}>
        <View style={styles.topo}>
          <Topo navigation={this.props.navigation} name="Pessoas e Temp" />
        </View>
        <ScrollView style={styles.scroll}>
          <View style={styles.conteudo}>
            <View style={styles.grafico}>
              <Text style={styles.titulo}>Temperatura °C</Text>
              <View style={{height: 200, paddingTop: 10, flexDirection: 'row'}}>
                <YAxis
                  data={y1}
                  style={{marginBottom: xAxisHeight}}
                  contentInset={verticalContentInset}
                  svg={axesSvg}
                />
                <View style={{flex: 1, marginLeft: 10}}>
                  <LineChart
                    style={{flex: 1}}
                    data={y1}
                    contentInset={verticalContentInset}
                    svg={{stroke: 'rgb(134, 65, 244)'}}>
                    <Grid />
                  </LineChart>
                  <XAxis
                    style={{marginHorizontal: -10, height: xAxisHeight}}
                    data={y1}
                    formatLabel={(value, index) => index}
                    contentInset={{left: 10, right: 10}}
                    svg={axesSvg}
                  />
                </View>
              </View>
            </View>
            <View style={styles.grafico}>
              <Text style={styles.titulo}>Quantidade de Pessoas</Text>
              <View style={{height: 200, paddingTop: 10, flexDirection: 'row'}}>
                <YAxis
                  data={y2}
                  style={{marginBottom: xAxisHeight}}
                  contentInset={verticalContentInset}
                  svg={axesSvg}
                />
                <View style={{flex: 1, marginLeft: 10}}>
                  <LineChart
                    style={{flex: 1}}
                    data={y2}
                    contentInset={verticalContentInset}
                    svg={{stroke: 'rgb(134, 65, 244)'}}>
                    <Grid />
                  </LineChart>
                  <XAxis
                    style={{marginHorizontal: -10, height: xAxisHeight}}
                    data={y2}
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
