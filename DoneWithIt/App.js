import React from "react";
import { StyleSheet, SafeAreaView, Button, Alert } from 'react-native';

require('dotenv').config()

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Eggs"
        onPress={() => 
          Alert.alert("Alert title", "Alert message", [
            { text: "Yes", onPress: () => console.log("YESSS")},
            { text: "No", onPress: () => console.log("NOOOO")},
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
