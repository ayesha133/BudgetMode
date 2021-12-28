import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, } from 'react-native';
import { SafeAreaView, ScrollView, TouchableOpacity, useColorScheme, } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Comfortaa_300Light,
  Comfortaa_400Regular,
  Comfortaa_500Medium,
  Comfortaa_600SemiBold,
  Comfortaa_700Bold,
} from '@expo-google-fonts/comfortaa';

export default function App() {
  let [fontsLoaded, error] = useFonts ({
    Comfortaa_400Regular,
  });

  if (!fontsLoaded){
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      
      <Text style={styles.name}>budgetMode</Text>

      <Image style={styles.logo} source={require('./assets/budgetmodelogo.png')} />

          <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOG IN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>SIGN UP</Text>
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

  name: {
    marginTop: 80,
    fontSize: 40,
    fontFamily: 'Comfortaa_400Regular',
    marginBottom: 50,
  },

  logo: {
    width: 260,
    height: 270,
  },

  loginButton: {
    width: "80%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    marginBottom: 15,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#CEA4E2",
  },

  loginButtonText: {
    fontWeight: "bold",
    color: '#CEA4E2',
    fontFamily: 'Roboto',
  },

  signUpButton: {
    width: "80%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9A6BAB",
  },

  signUpButtonText: {
    fontWeight: "bold",
    color: 'white',
  },
});
