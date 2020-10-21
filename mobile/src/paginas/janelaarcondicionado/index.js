import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Button, Alert} from 'react-native';
import Topo from '../../topo';
import api from '../../servicos/api';
import {format} from 'date-fns';
import {BarChart, Grid} from 'react-native-svg-charts';

export default class JanelaAr extends Component {
  state = {
    dados: [],
  };

  componentDidMount() {
    this.preencherFluxo();
  }

  preencherFluxo = async () => {
    const janelaar = await api.get('/statusJanelaArcondicionado');
    this.setState({dados: janelaar.data});
  };

  atualizar = () => {
    this.preencherFluxo();
    Alert.alert('JANELA E AR-CONDICIONADO ATUALIZADOS');
  };

  render() {
    const {dados} = this.state;
    var formatoData;
    var janela = [];
    var arcondicionado = [];
    var jan_aberta = 0,
      jan_fechada = 0,
      ar_lig = 0,
      ar_deslig = 0;
    const fill = 'rgb(134, 65, 244)';

    for (var i = 0; i < dados.length; i++) {
      if (dados[i].janela === 'Aberta') {
        janela.push(1);
        jan_aberta += 1;
      } else if (dados[i].janela === 'Fechada') {
        janela.push(-1);
        jan_fechada += 1;
      } else {
        janela.push(0);
      }

      if (dados[i].arcondicionado === 'ligado') {
        arcondicionado.push(1);
        ar_lig += 1;
      } else if (dados[i].arcondicionado === 'desligado') {
        arcondicionado.push(-1);
        ar_deslig += 1;
      } else {
        arcondicionado.push(0);
      }
    }

    return (
      <View style={styles.containerGeral}>
        <View style={styles.topo}>
          <Topo
            navigation={this.props.navigation}
            name="Janela e Ar-condicionado"
          />
        </View>
        <ScrollView style={styles.scroll}>
          <View style={styles.conteudo}>
            <View style={styles.grafico}>
              <Text style={styles.titulo}>Janela</Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: 30, height: 100}}>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text>Abe.</Text>
                  </View>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text>Fec.</Text>
                  </View>
                </View>
                <View style={{flex: 1, height: 100}}>
                  <BarChart
                    style={{height: 100}}
                    data={janela}
                    svg={{fill}}
                    contentInset={{top: 10, bottom: 10}}>
                    <Grid />
                  </BarChart>
                </View>
              </View>
              <View style={styles.linha} />
              <Text style={styles.lig_des}>Qtd Aberta: {jan_aberta}</Text>
              <Text style={styles.lig_des}>Qtd Fechada: {jan_fechada}</Text>
            </View>

            <View style={styles.grafico}>
              <Text style={styles.titulo}>Ar-condicionado</Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: 30, height: 100}}>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text>Lig.</Text>
                  </View>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text>Des.</Text>
                  </View>
                </View>
                <View style={{flex: 1, height: 100}}>
                  <BarChart
                    style={{height: 100}}
                    data={arcondicionado}
                    svg={{fill}}
                    contentInset={{top: 10, bottom: 10}}>
                    <Grid />
                  </BarChart>
                </View>
              </View>
              <View style={styles.linha} />
              <Text style={styles.lig_des}>Qtd Ligado: {jan_aberta}</Text>
              <Text style={styles.lig_des}>Qtd Desligado: {jan_fechada}</Text>
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
                    <Text>Janela: {item.janela}</Text>
                    <Text>Ar-condicionado: {item.arcondicionado}</Text>
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
  lig_des: {
    color: '#5F5D5D',
    fontSize: 12,
  },
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
    padding: 10,
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
