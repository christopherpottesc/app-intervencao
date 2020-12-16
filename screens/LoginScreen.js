import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import {
  Image,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export default class LoginScreen extends Component{
  render(){

    // const { navigation } = this.props;

  return (
    <View style={styles.container}>

        <View style={styles.logoContainer}>
          <Image
            source={
             require("../assets/images/intervencao.png")
            }
            style={styles.logo}
          />

          <Text style={styles.title}>
            Intervenção Espaço de Arquitetura.
          </Text>

          <Text style={styles.subtitle}>
            Com o nosso APP você fica ligado nos projetos que você contratou e
            não perde nenhuma novidade!.
          </Text>
        </View>

        <View style={styles.contentContainer}>


          <TextInput
            placeholder="Insira seu e-mail"
            style={styles.inputText}
          />

          <TextInput
            placeholder="Insira sua senha"
            style={styles.inputText}
          />


          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.loginScreenButton}
              onPress={() => this.props.navigation.navigate('Dashboard')}
              >
              <Text style={styles.loginText}>entrar</Text>
            </TouchableOpacity>


            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Recover')}>
              <Text style={styles.recoverPassword}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          </View>

        </View>

    </View>
  );
  }
}

LoginScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 100,
    marginBottom: 20,
    flex: 1
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    borderRadius: 100
  },
  title: {
    fontSize: 20,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
    marginTop: 50,
    fontWeight: "500"
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 20,
    marginTop: 20
  },
  contentContainer: {
    flex: 1.25,
    marginHorizontal: 50
  },
  inputText: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    paddingLeft: 8
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto'
  },
  loginScreenButton: {
    backgroundColor: 'red',
    borderColor: '#fff',
    marginTop: 20,
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 5,
    width: 150,
  },
  loginText: {
    color: '#fff',
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  recoverPassword: {
    marginTop: 20,
    textTransform: "lowercase",
    textDecorationLine: 'underline',
  },
});
