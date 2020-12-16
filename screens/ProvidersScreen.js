import * as WebBrowser from "expo-web-browser";
import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Linking,
  View
} from "react-native";
import axios from 'axios';

export default class ProvidersScreen extends Component{



  state = {
    data: "",
  };

  componentDidMount() {
    axios.get('http://localhost:3000/providers')
      .then((response) => {
        console.log(response)

        this.setState({
          data: response.data.providers
        });
        console.log(this.state.data);
      })
      .catch(error => console.log(error)); //to catch the errors if any
  }

  onShare(phone){
    Linking.openURL(`http://api.whatsapp.com/send?1=pt_BR&phone=55${phone}` )
  }

  render(){

    const Separator = () => (
      <View style={styles.separator} />
    );

  return (

    <View style={styles.container}>
      <Text style={styles.subtitle}>
          Lista de parceiros da empresa
      </Text>

      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.content}>

            <FlatList
              data={ this.state.data }
              renderItem={({item}) =>
              <View>
                {/* <View style={styles.listProvider}> */}
                  <Text>Nome: {item.name}</Text>
                  <Text>Especialidade: {item.function}</Text>
                  <Text>Contato: {item.phone}</Text>
                  <Text>
                    CEP: {item.postal_code}
                  </Text>
                  <Text>Cidade: {item.city}</Text>
                  <Text>Bairro: {item.neighborhood}</Text>

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
        </View>
      </ScrollView>
    </View>
  );
  }
}
ProvidersScreen.navigationOptions = {
  title: "Parceiros da empresa"
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
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop: 20
  },
  contentContainer: {
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  listProvider: {
    marginVertical: 20,
    borderBottomWidth: 2,
    padding: 8,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  content: {
    marginVertical: 20,
  },

});
