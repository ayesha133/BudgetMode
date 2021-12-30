import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput, } from 'react-native';
import { SafeAreaView, ScrollView, TouchableOpacity, useColorScheme, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Comfortaa_300Light,
  Comfortaa_400Regular,
  Comfortaa_500Medium,
  Comfortaa_600SemiBold,
  Comfortaa_700Bold,
} from '@expo-google-fonts/comfortaa';

/* starting page -> this is what the user will first see when they download the app. they can sign up or log in */
function StartingPage({ navigation }){
  return (
    <View style={styles.container}>
      
      <Text style={styles.name}>budgetMode</Text>

      <Image style={styles.logo} source={require('./assets/budgetmodelogo.png')} />

          <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login Page')}>
          <Text style={styles.loginButtonText}>LOG IN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('Sign Up Page')}>
          <Text style={styles.signUpButtonText}>SIGN UP</Text>
          </TouchableOpacity>


      <StatusBar style="auto" />
    </View>
  );
}

/* login page -> the user will enter their email and password to login. this is only required once unless the user logs out of their account */
function LoginPage({ navigation }) {
  return (
    <View style={styles.container2}>
      <Text style ={styles.loginTitle}>Log In</Text>

      <TextInput style ={styles.loginInput} underlineColorAndroid="transparent" placeholder='Email'/>
      <TextInput style ={styles.loginInput} underlineColorAndroid="transparent" placeholder='Password'/>

      <TouchableOpacity style={styles.loginButton2} onPress={() => navigation.navigate()}>
      <Text style={styles.loginButtonText2}>LOG IN</Text>
      </TouchableOpacity>
    </View>
  );
}

function SignUpPage({navigation}) {
  return (
    <View style={styles.container2}>
      <Text style ={styles.loginTitle}>Sign Up</Text>

      <TextInput style ={styles.loginInput} underlineColorAndroid="transparent" placeholder='Email'/>
      <TextInput style ={styles.loginInput} underlineColorAndroid="transparent" placeholder='Password'/>

      <TouchableOpacity style={styles.loginButton2} onPress={() => navigation.navigate()}>
      <Text style={styles.loginButtonText2}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded, error] = useFonts ({
    Comfortaa_400Regular,
  });

  if (!fontsLoaded){
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Starting Page" component={StartingPage} />
        <Stack.Screen name="Login Page" component={LoginPage} />
        <Stack.Screen name="Sign Up Page" component={SignUpPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* STARTING PAGE ---------------------------------*/
  name: {
    fontSize: 40,
    fontFamily: 'Comfortaa_400Regular',
    marginBottom: 50,
  },

  logo: {
    width: 260,
    height: 270,
    marginBottom: 150,
  },

  loginButton: {
    width: "42%",
    borderRadius: 10,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#CEA4E2",
    position: 'absolute',
    left: 25,
    top: 570,
  },

  loginButtonText: {
    fontWeight: "bold",
    color: '#CEA4E2',
  },

  signUpButton: {
    width: "42%",
    borderRadius: 10,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9A6BAB",
    position: 'absolute',
    right: 25,
    top: 570,
  },

  signUpButtonText: {
    fontWeight: "bold",
    color: 'white',
  },

  /* LOGIN PAGE -----------------------------*/
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginTitle: {
    fontSize: 30,
    fontFamily: 'Comfortaa_400Regular',
    marginBottom: 20,
  },

  loginInput: {
    width: "80%",
    backgroundColor: "white",
    borderColor: "black",
    marginBottom: 10,
  },

  loginButton2: {
    width: "80%",
    marginTop: 20,
    borderRadius: 30,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9A6BAB",
    marginBottom: 10,
  },

  loginButtonText2: {
    fontWeight: "bold",
    color: 'white',
  },
});
