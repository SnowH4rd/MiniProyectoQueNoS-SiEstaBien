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
        <Stack.Navigator initialRouteName="Pagina de Inicio">
          <Stack.Screen name="Pagina de Inicio" component={HomePage} />
          <Stack.Screen name="Formulario" component={FormPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
