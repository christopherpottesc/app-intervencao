import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from "react-native";


export default class HelpScreen extends Component{
  render(){

  return (
    <View style={styles.container}>
      <ScrollView>
          <Text style={styles.title}>
            Sobre nós
          </Text>
          <Text style={styles.subtitle}>
            Conheça um pouco mais da nossa história!
          </Text>


        <View style={styles.contentContainer}>

          <Image
            source={
             require("../assets/images/escritorio.png")
            }
            style={styles.logo}
          />
          <Text>Nosso escritório</Text>

            <Text>
              A Intervenção é uma empresa de Arquitetura e Urbanismo
              com mais de 06 anos de atuação no mercado.
              Transformamos seu espaço em um ambiente acolhedor,
              com o melhor aproveitamento para atender suas
              expectativas e necessidades.
            </Text>

            <Text>
              Oferecemos:

              <br/>
              <Text> Projetos Arquitetônico e Complementares </Text>
              <Text> Projetos de Interiores Personalizado </Text>
              <Text> Custo/benefício de acordo com as possibilidades do cliente </Text>
              <Text> Orientação técnica nas decisões antes e durante a execução </Text>

            </Text>

            <Text>
              Endereço: Rua Dom Pedro II, 1098A 96010300 Pelotas, RS
              Telefone: (53) 3027-1405
              E-mail: in_tervencao@hotmail.com
            </Text>

            <Text>
              Redes sociais:

              Facebook: https://www.facebook.com/intervencaoarquitetura

              Instagram: https://www.facebook.com/intervencaoarquitetura
            </Text>
          </View>


      </ScrollView>
    </View>
  );
  }
}

HelpScreen.navigationOptions = {
  title: "Ajuda"
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
  logo: {
    width: 300,
    height: 200,
    resizeMode: "contain",
  },
  subtitle:{
    padding: 20,
    textAlign: "center"
  },
  response: {
    padding: 20
  },
  contentContainer: {
    alignItems: "center",
    marginTop: 50,
    paddingHorizontal: 20,
  },
  content: {
    marginVertical: 20,
    padding: 20
  },

});
