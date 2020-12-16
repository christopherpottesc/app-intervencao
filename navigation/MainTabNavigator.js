import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HelpScreen from "../screens/HelpScreen";
import DashboardScreen from "../screens/DashboardScreen";
import ProvidersScreen from "../screens/ProvidersScreen";
import BlogScreen from "../screens/BlogScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});


// TAB DASHBOARD
const DashboardStack = createStackNavigator({
    Dashboard: DashboardScreen
  },
  config
);
DashboardStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: '#000',
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-home" : "md-home"}
    />
  )
};
DashboardStack.path = "";

// TAB DICAS/BLOG
const BlogStack = createStackNavigator({
  Blog: BlogScreen
},
config
);
BlogStack.navigationOptions = {
tabBarLabel: "Dicas",
tabBarOptions: {
  activeTintColor: 'red',
  inactiveTintColor: '#000',
},
tabBarIcon: ({ focused }) => (
  <TabBarIcon
    focused={focused}
    name={Platform.OS === "ios" ? "ios-home" : "md-albums"}
  />
)
};
BlogStack.path = "";

// TAB PROVIDERS
const ProviderStack = createStackNavigator({
  Provider: ProvidersScreen
},
config
);

ProviderStack.navigationOptions = {
tabBarLabel: "Parceiros",
tabBarOptions: {
  activeTintColor: 'red',
  inactiveTintColor: '#000',
},
tabBarIcon: ({ focused }) => (
  <TabBarIcon
    focused={focused}
    name={Platform.OS === "ios" ? "ios-options" : "md-briefcase"}
  />
)
};

ProviderStack.path = "";


// TAB SOBRE
const HelpStack = createStackNavigator({
  Help: HelpScreen
},
config
);

HelpStack.navigationOptions = {
tabBarLabel: "Sobre",
tabBarOptions: {
  activeTintColor: 'red',
  inactiveTintColor: '#000',
},
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
  DashboardStack,
  ProviderStack,
  BlogStack,
  HelpStack,
});

tabNavigator.path = "";



// export default tabNavigator
export default tabNavigator
