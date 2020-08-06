import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import Landing from "../screens/Landing";
import GiveClasses from "../screens/GiveClasses";

import StudyTabs from "./StudyTabs";

const Stack = createStackNavigator();
const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.RevealFromBottomAndroid,
      }}
    >
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="GiveClasses" component={GiveClasses} />
      <Stack.Screen name="Study" component={StudyTabs} />
    </Stack.Navigator>
  );
};

export default Routes;
