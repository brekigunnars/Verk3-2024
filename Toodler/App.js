import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/views/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <Main />
      <StatusBar style='auto' />
    </View>
  );
}
