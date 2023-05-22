import React from "react";
import { StyleSheet, SafeAreaView, Button, Alert } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Eggs"
        onPress={() => 
          Alert.alert("Alert title", "Alert message", [
            { text: "Scrambled"},
            { text: "Sunny-Side-Up"},
          ])
        }
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
