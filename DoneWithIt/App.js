import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Testing Images</Text>
      <TouchableWithoutFeedback onPress={() => console.log("working!")}>
        <Image style={{ width: 100, height: 80 }} source={require("./assets/icon.png")} />
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
