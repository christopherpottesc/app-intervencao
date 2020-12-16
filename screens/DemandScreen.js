import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View
} from "react-native";
import axios from 'axios';

export default class DemandScreen extends Component{

  project1 = {
    data: "",
    id: "",
    title: "Projeto arquitetônico",
    description: "Projeto arquitetônico do apt do cliente Roberto",
    date_start: "10/09/2020",
    date_end: "28/11/2020",
    date_refresh: "20/09/2020",
    status: "Aguardando protocolação na prefeitura",
  };

  project2 = {
    data: "",
    id: "",
    title: "Projeto arquitetônico",
    description: "Projeto arquitetônico do apt do cliente Roberto",
    date_start: "10/09/2020",
    date_refresh: "20/09/2020",
    date_end: "28/11/2020",
    status: "Aguardando protocolação na prefeitura",
  };

  state = {
    data: "",
  };

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/projects')
      .then((response) => {
        this.setState({
          data: response.data.projects[0]
        });
        console.log(this.state.data);
      })
      .catch(error => console.log(error)); //to catch the errors if any
  }

  render(){

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.subtitle}>
          {this.project1.title}
        </Text>
        <View style={styles.contentContainer}>
          <View style={styles.content}>
              <View style={styles.contentDemand}>
                  <Text>{this.state.data.title} </Text>
                  <Text>Status atual: {this.state.data.text}</Text>
                  <Text>Data de início: {this.state.data.created_at}</Text>
                  <Text>Previsão de conclusão: {this.state.data.created_at}</Text>
                  <Text>Data da última atualização: {this.state.data.updated_at}</Text>
              </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
  }
}
DemandScreen.navigationOptions = {
  title: "Visualizar demanda"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 70,
    textAlign: "center"
  },
  subtitle:{
    fontSize: 22,
    lineHeight: 22,
    padding: 20,
    textAlign: "center"
  },
  contentContainer: {
    alignItems: "center",
    marginTop: 20,
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
  quest: {
    fontSize: 18,
    fontWeight: "bold"
  },


});
