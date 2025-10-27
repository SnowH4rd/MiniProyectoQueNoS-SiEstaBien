import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "../store/index";

import HomePage from "../screens/HomePage";
import FormPage from "../screens/FormPage";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomePage">
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="FormPage" component={FormPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
