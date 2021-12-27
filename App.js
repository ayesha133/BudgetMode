import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Budget Mode</Text>

      <TouchableOpacity style={styles.loginButton}>
          <Text>Login</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.signUpButton}>
          <Text>Register!</Text>
          </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginButton: {
    alignItems: 'center',
    margin: 40,
    backgroundColor: 'white',
  },

  signUpButton: {
    alignItems: 'center',
    margin: 40,
  },
});
