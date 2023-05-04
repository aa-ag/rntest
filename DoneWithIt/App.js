import React from "react";
import { StyleSheet, SafeAreaView, Button, Alert } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Eggs"
        onPress={() => 
          Alert.alert("Alert title", "Alert message", [
            { text: "Option 1"},
            { text: "Option 2"},
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
