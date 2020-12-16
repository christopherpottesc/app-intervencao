import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import {
  TextInput,
  Linking,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  View
} from "react-native";
import axios from 'axios';


export default class DashboardScreen extends Component{


  state = {
    data: "",
    cpf: ""
  };

  handleCpf = (text) => {
    this.setState({ cpf: text })
 }

  consultDemand() {
    axios.get('http://localhost:3000/results', {

        params: { cpf_cnpj: this.state.cpf }
      })
      .then((response) => {
        this.setState({
          data: response.data.demand
        });
      })
  }

  onShare(){
    Linking.openURL(`http://api.whatsapp.com/send?1=pt_BR&phone=5553981353121` )
  }

  render(){

  const Separator = () => (
    <View style={styles.separator} />
  );

  return (
    <View style={styles.container}>


      <Image
        source={
         require("../assets/images/escritorio.png")
        }
        style={styles.logo}
      />

        <Text style={styles.title}>
          Intervenção Espaço de Arquitetura
        </Text>

        <Text style={styles.subtitle}>
          Aqui você pode consultar seus serviços contratados
        </Text>


        <View>
          <TextInput style = {styles.input}
                 placeholder = "CPF"
                 placeholderTextColor = "#9a73ef"
                 autoCapitalize = "none"
                 onChangeText = {this.handleCpf}
          />

          <TouchableOpacity style={styles.button}
            onPress = { () => this.consultDemand(this.state.cpf) }
          >
            <Text>Consultar</Text>
          </TouchableOpacity>
        </View>


        <ScrollView>
        <View style={styles.contentContainer}>
            <FlatList
              data={ this.state.data }
              renderItem={({item}) =>
              <View>
                  <Text>Nome: {item.description}</Text>
                  <Text>Data de ínicio: {item.date_start}</Text>
                  <Text>Previsão de término: {item.date_end}</Text>
                  <Text>Observação: {item.observation}</Text>
                  <Text>Última atualização: {item.updated_at}</Text>

                  <TouchableOpacity
                    style={styles.button}
                    onPress={() =>
                      {this.onShare(item.phone)}
                    }>
                    <Text>Entrar contato</Text>
                  </TouchableOpacity>
                  <Separator />
                </View>
            }>
            </FlatList>
        </View>
      </ScrollView>
    </View>
  );
  }
}
DashboardScreen.navigationOptions = {
  title: "Dashboard"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 70,
    textAlign: "center"
  },
  subtitle:{
    fontSize: 18,
    lineHeight: 20,
    padding: 20,
    textAlign: "center"
  },
  contentContainer: {
    alignItems: "center",
    marginTop: 50,
    paddingHorizontal: 20,
  },
  contentDemand: {
    marginVertical: 20,
    borderWidth: 1,
    padding: 8,
    borderRadius: 10
  },
  content: {
    marginVertical: 20,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    color: 'red',
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 50,
    marginBottom: 20
  },
  button: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginHorizontal: 100
  },
});
