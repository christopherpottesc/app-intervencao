import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import LoginScreen from "../screens/LoginScreen";
import LinksScreen from "../screens/LinksScreen";
import ProfileScreen from "../screens/ProfileScreen";
import HelpScreen from "../screens/HelpScreen";
import DashboardScreen from "../screens/DashboardScreen";
import DemandsScreen from "../screens/DemandsScreen";
import DemandScreen from "../screens/DemandScreen";
import RecoverScreen from "../screens/RecoverScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

// HomeScreen
const LoginStack = createStackNavigator( { Login: LoginScreen }, config );
LoginStack.navigationOptions = {
  tabBarVisible: false,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};
LoginStack.path = "";

// Nova Tab
const RecoverStack = createStackNavigator({
  Recover: RecoverScreen
},
config
);

RecoverStack.navigationOptions = {
  tabBarLabel: "Recup.",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-home" : "md-home"}
    />
  )
};
RecoverStack.path = "";

const DashboardStack = createStackNavigator( { Dashboard: DashboardScreen }, config );
DashboardStack.navigationOptions = {
  tabBarLabel: "Dashboard",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-home" : "md-home"}
    />
  )
};
DashboardStack.path = "";

// Nova Tab
const DemandsStack = createStackNavigator({
    Demands: DemandsScreen,
  },
  config
);

DemandsStack.navigationOptions = {
  tabBarLabel: "Demandas",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

DemandsStack.path = "";

// Nova Tab
const DemandStack = createStackNavigator({
    Demand: DemandScreen
  },
  config
);

DemandStack.navigationOptions = {
  tabBarLabel: "Demanda",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

DemandStack.path = "";

// Nova Tab
const ProfileStack = createStackNavigator({
    Profile: ProfileScreen
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: "Perfil",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-people" : "md-people"}
    />
  )
};

ProfileStack.path = "";

const HelpStack = createStackNavigator({
    Help: HelpScreen
  },
  config
);

HelpStack.navigationOptions = {
  tabBarLabel: "Ajuda",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

HelpStack.path = "";

const tabNavigator = createBottomTabNavigator({
  // LoginStack,
  // RecoverStack,
  DashboardStack,
  DemandsStack,
  // DemandStack,
  ProfileStack,
  HelpStack,
});

tabNavigator.path = "";



export default tabNavigator;
