import React, { Component } from "react";
import {
  Button,
  Linking,
  ScrollView,
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableHighlight
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class SettingsScreen extends Component {
  state = {
    data: ""
  };

  componentDidMount() {
    fetch("http:/192.168.0.173:3000/api/v1/customers/1")
      // fetch("http://10.0.2.2/api/v1/customers")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          data: responseJson
        });
      })
      .catch(error => console.log(error)); //to catch the errors if any
    console.log(this.data);
    console.log("Teste");
  }

  render() {
    return (
      <View>
        <View style={{ paddingHorizontal: 5 }}>
          <FlatList
            data={this.state.data}
            renderItem={({ item, index, separators }) => (
              <View style={{ backgroundColor: "white" }}>
                <Text>Id: {item.id}</Text>
              </View>
            )}
          />
        </View>

        <Text
          style={{ marginTop: 30 }}
          onPress={() =>
            Linking.canOpenURL("whatsapp://send?text=oi").then(supported => {
              if (supported) {
                return Linking.openURL(
                  `whatsapp://send?phone=5553${contact_phone}&text=${this.state.msg}`
                );
              } else {
                return Linking.openURL(
                  `https://api.whatsapp.com/send?phone=5553${contact_phone}&text=${this.state.msg}`
                );
              }
            })
          }
        >
          Agendar
        </Text>
      </View>
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
