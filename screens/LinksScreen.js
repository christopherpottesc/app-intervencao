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

export default class LinksScreen extends Component {
  state = {
    data: "",
    id: "",
    description: "",
    start_date: "",
    end_date: "",
    status: "",
    category: ""
  };

  componentDidMount() {
    fetch("https://young-forest-65938.herokuapp.com/api/v1/demands")
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
          <Text>Minhas demandas: {this.state.data.length}</Text>
          <FlatList
            data={this.state.data}
            renderItem={({ item, index, separators }) => (
              <View style={{ backgroundColor: "white" }}>
                <Text>
                  Id: {item.id}, Descrição: {item.description}, Catergoria:{" "}
                  {item.category}, Data de início: {item.start_date}, Data de
                  entrega: {item.end_date}, Status: {item.status}
                </Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
    );
  }
}

LinksScreen.navigationOptions = {
  title: "Dashboard"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 10,
    backgroundColor: "#fff"
  }
});
