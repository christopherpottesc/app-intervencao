import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Linking,
  ScrollView
} from "react-native";


export default class BlogScreen extends Component{

  state = {
    data: [
      {
        name: 'Archdaily', site: 'https://www.archdaily.com.br/br'
      },
      {
        name: 'Pinterest', site: 'https://br.pinterest.com/'
      },
      {
        name: 'Tok & Stok', site: 'https://www.tokstok.com.br/'
      },
      {
        name: "Guararapes MDF's", site: 'http://www.guararapes.com.br/'
      },
      {
        name: "Portobello shop", site: 'https://www.portobelloshop.com.br/?original=1'
      },
      {
        name: "Tintas Coral", site: 'https://www.coral.com.br/pt'
      }
    ]
  }

  render(){

    const Separator = () => (
      <View style={styles.separator} />
    );

  return (
    <View style={styles.container}>
      <ScrollView>
          <Text style={styles.title}>
            Sites para inspirações
          </Text>
          <Text style={styles.subtitle}>
            Fique por dentro de novidades no mundo da ARQUITETURA
          </Text>


        <View style={styles.contentContainer}>

        <FlatList
              data={ this.state.data }
              renderItem={({item}) =>
              <View>
                  <Text>Nome: {item.name}</Text>
                  <Text onPress={() => {
                    Linking.openURL(item.site)
                  }}>
                    Site: {item.site}
                  </Text>

                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      Linking.openURL(item.site)
                    }}>
                    <Text>Clique aqui para visualizar +</Text>
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

BlogScreen.navigationOptions = {
  title: "Sites para inspirações"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center"
  },
  subtitle:{
    padding: 20,
    textAlign: "center"
  },
  contentContainer: {
    alignItems: "center",
    marginTop: 25,
    paddingHorizontal: 20,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop: 20
  },
  content: {
    marginVertical: 20,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
