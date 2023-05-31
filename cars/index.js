// imports
import React from "react";
import { Text, AppRegistry } from "react-native";

// components
const App = () => {
    return <Text> This is a component </Text>;
};

// render components
AppRegistry.registerComponent('rntest/cars', () => App);