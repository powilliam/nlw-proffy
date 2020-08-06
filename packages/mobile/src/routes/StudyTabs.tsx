import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Classes from "../screens/Classes";
import Favorites from "../screens/Favorites";

const Tabs = createBottomTabNavigator();
const StudyTabs: React.FC = () => (
  <Tabs.Navigator
    tabBarOptions={{
      style: {
        elevation: 0,
        shadowOpacity: 0,
      },
      tabStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      },
      iconStyle: {
        flex: 0,
        width: 20,
        height: 20,
      },
      labelStyle: {
        fontFamily: "Archivo_700Bold",
        fontSize: 13,
        marginLeft: 16,
      },
      inactiveBackgroundColor: "#FAFAFC",
      activeBackgroundColor: "#ebebf5",
      inactiveTintColor: "#c1bccc",
      activeTintColor: "#32264D",
    }}
  >
    <Tabs.Screen
      name="Classes"
      component={Classes}
      options={{
        tabBarLabel: "Proffys",
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons
            name="ios-easel"
            color={focused ? "#8257e5" : color}
            size={size}
          />
        ),
      }}
    />
    <Tabs.Screen
      name="Favorites"
      component={Favorites}
      options={{
        tabBarLabel: "Favoritos",
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons
            name="ios-heart"
            color={focused ? "#8257e5" : color}
            size={size}
          />
        ),
      }}
    />
  </Tabs.Navigator>
);

export default StudyTabs;
