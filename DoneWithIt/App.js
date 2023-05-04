import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Testing Images</Text>
      <Image source={{ 
        width: 200,
        height: 200,
        uri: "https://picsum.photos/id/237/200/300" }
        } />
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
