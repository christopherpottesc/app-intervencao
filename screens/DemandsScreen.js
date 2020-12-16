import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import {
  Image,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  View
} from "react-native";

export default class DemandsScreen extends Component{

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

  render(){

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.subtitle}>
          Total de demandas contratadas: 4
        </Text>

        <View style={styles.contentContainer}>
          <View style={styles.content}>
            <View style={styles.contentDemand}>
                <Text>{this.project1.title} </Text>
                <Text>Status atual: {this.project1.status}</Text>
                <Text>Data de início: {this.project1.date_start}</Text>
                <Text>Previsão de conclusão: {this.project1.date_end}</Text>
                <Text>Data da última atualização: {this.project1.date_refresh}</Text>
            </View>

            <View style={styles.contentDemand}>
                <Text>{this.project2.title} </Text>
                <Text>Status atual: {this.project2.status}</Text>
                <Text>Data de início: {this.project2.date_start}</Text>
                <Text>Previsão de conclusão: {this.project2.date_end}</Text>
                <Text>Data da última atualização: {this.project1.date_refresh}</Text>
            </View>

            <View style={styles.contentDemand}>
                <Text>{this.project2.title} </Text>
                <Text>Status atual: {this.project2.status}</Text>
                <Text>Data de início: {this.project2.date_start}</Text>
                <Text>Previsão de conclusão: {this.project2.date_end}</Text>
                <Text>Data da última atualização: {this.project1.date_refresh}</Text>
            </View>

            <View style={styles.contentDemand}>
                <Text>{this.project2.title} </Text>
                <Text>Status atual: {this.project2.status}</Text>
                <Text>Data de início: {this.project2.date_start}</Text>
                <Text>Previsão de conclusão: {this.project2.date_end}</Text>
                <Text>Data da última atualização: {this.project1.date_refresh}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
  }
}
DemandsScreen.navigationOptions = {
  title: "Minhas demandas"
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
