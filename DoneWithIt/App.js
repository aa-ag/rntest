import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1}>Hello, World! Hello, World! Hello, World! Hello, World! Hello, World! Hello, World! testing testing testing. Hello, World! Hello, World! Hello, World! Hello, World! Hello, World! Hello, World! Hello, World! helloooooooo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
