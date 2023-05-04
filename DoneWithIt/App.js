import React from "react";
import { StyleSheet, SafeAreaView } from 'react-native';
import { Button } from "react-native-web";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        color="orange"
        title="Eggs"
        onPress={() => window.open("https://www.google.com/search?q=price+of+a+dozen+eggs+near+me")} 
      />
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
