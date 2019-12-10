import React, { Component } from "react";
import { StyleSheet, FlatList, View, Text, ScrollView } from "react-native";

export default class SettingsScreen extends Component {
  state = {
    data: "",
    id: "",
    nome: ""
  };

  state = {
    data: "",
    id: "",
    nome: ""
  };

  componentDidMount() {
    fetch("https://young-forest-65938.herokuapp.com/api/v1/customers/1")
      // fetch("http://10.0.2.2/api/v1/customers")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          data: responseJson.data
        });
      })
      .catch(error => console.log(error)); //to catch the errors if any
    console.log(this.data);
    console.log("Teste");
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={styles.container}>
        {/**
         * Go ahead and delete ExpoLinksView and replace it with your content;
         * we just wanted to provide you with some helpful links.
         */}
        <View style={{ flex: 1, paddingTop: 20 }}>
          <Text>Minhas informações pessoais:</Text>

          <View style={{ backgroundColor: "white" }}>
            <Text>
              Id: {this.state.data.id}, Nome: {this.state.data.name}, Telefone:{" "}
              {this.state.data.phone}, Email: {this.state.data.email}, CPF /
              CNPJ: {this.state.data.cpf_cnpj},
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

SettingsScreen.navigationOptions = {
  title: "Perfil"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 10,
    backgroundColor: "#fff"
  }
});
