import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
  
export default function App() {
  return (
    <View
      style={{
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "green",
      }}
    >
      <Header />
      <Text
        style={{
          color: "white",
        }}>
        test
      </Text>
    </View>
  );
}
