import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput, Pressable } from 'react-native';
import { SafeAreaView, ScrollView, TouchableOpacity, useColorScheme, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import { useFonts, Comfortaa_300Light, Comfortaa_400Regular, Comfortaa_500Medium, Comfortaa_600SemiBold, Comfortaa_700Bold, } from '@expo-google-fonts/comfortaa';
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


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

      <TouchableOpacity style={styles.loginButton2} onPress={() => navigation.navigate('Home Page')}>
      <Text style={styles.loginButtonText2}>LOG IN</Text>
      </TouchableOpacity>
    </View>
  );
}

/* signup page -> the user will enter their email and password to sign up */
function SignUpPage({navigation}) {
  return (
    <View style={styles.container2}>
      <Text style ={styles.loginTitle}>Sign Up</Text>

      <TextInput style ={styles.loginInput} underlineColorAndroid="transparent" placeholder='Email'/>
      <TextInput style ={styles.loginInput} underlineColorAndroid="transparent" placeholder='Password'/>

      <TouchableOpacity style={styles.loginButton2} onPress={() => navigation.navigate('Enter Your Name Page')}>
      <Text style={styles.loginButtonText2}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
}

/* enter your name page -> after signing up, the user enter's their name for personalization in the app */
function EnterYourNamePage({navigation}) {
  return (
    <View style={styles.container2}>
      <Text style ={styles.loginTitle}>Enter Your Name</Text>

      <TextInput style ={styles.loginInput} underlineColorAndroid="transparent" placeholder='Enter your name'/>

      <TouchableOpacity style={styles.loginButton2} onPress={() => navigation.navigate('Home Page')}>
      <Text style={styles.loginButtonText2}>LET'S GO!</Text>
      </TouchableOpacity>
    </View>
  );
}

function HomePage({navigation}) {
  return (
    <View style={styles.container3}>
      <View style={styles.navContainer}>
        <View style={styles.navBar}>
          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Bank Page')}>
          <MaterialCommunityIcons name="bank-outline" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Budget Page')}>
          <Feather name="bold" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Home Page')}>
          <AntDesign name="home" size={24} color="black"/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Tips Page')}>
          <AntDesign name="gift" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Profile Page')}>
          <AntDesign name="user" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function BankPage({navigation}) {
  return (
    <View style={styles.container3}>
      <View style={styles.navContainer}>
        <View style={styles.navBar}>
          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Bank Page')}>
          <MaterialCommunityIcons name="bank-outline" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Budget Page')}>
          <Feather name="bold" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Home Page')}>
          <AntDesign name="home" size={24} color="black"/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Tips Page')}>
          <AntDesign name="gift" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Profile Page')}>
          <AntDesign name="user" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function BudgetPage({navigation}) {
  return (
    <View style={styles.container3}>
      <View style={styles.navContainer}>
        <View style={styles.navBar}>
          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Bank Page')}>
          <MaterialCommunityIcons name="bank-outline" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Budget Page')}>
          <Feather name="bold" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Home Page')}>
          <AntDesign name="home" size={24} color="black"/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Tips Page')}>
          <AntDesign name="gift" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Profile Page')}>
          <AntDesign name="user" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function TipsPage({navigation}) {
  return (
    <View style={styles.container3}>
      <View style={styles.navContainer}>
        <View style={styles.navBar}>
          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Bank Page')}>
          <MaterialCommunityIcons name="bank-outline" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Budget Page')}>
          <Feather name="bold" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Home Page')}>
          <AntDesign name="home" size={24} color="black"/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Tips Page')}>
          <AntDesign name="gift" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Profile Page')}>
          <AntDesign name="user" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function ProfilePage({navigation}) {
  return (
    <View style={styles.container3}>
      <View style={styles.navContainer}>
        <View style={styles.navBar}>
          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Bank Page')}>
          <MaterialCommunityIcons name="bank-outline" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Budget Page')}>
          <Feather name="bold" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Home Page')}>
          <AntDesign name="home" size={24} color="black"/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Tips Page')}>
          <AntDesign name="gift" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBehave} onPress={() => navigation.navigate('Profile Page')}>
          <AntDesign name="user" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
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
        <Stack.Screen name="Enter Your Name Page" component={EnterYourNamePage} />
        <Stack.Screen name="Home Page" component={HomePage} />
        <Stack.Screen name="Bank Page" component={BankPage} />
        <Stack.Screen name="Budget Page" component={BudgetPage} />
        <Stack.Screen name="Tips Page" component={TipsPage} />
        <Stack.Screen name="Profile Page" component={ProfilePage} />
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
    borderRadius: 22.5,
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
    borderRadius: 22.5,
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

  /* HOME PAGE ---------------------------*/
  container3: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  navContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
  },

  navBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    justifyContent: 'space-evenly',
    borderTopWidth: 0.5,
    borderTopColor: '#EBEBEB',
    paddingTop: 7, 
    paddingBottom: 5, 
  },

  iconBehave: {
    backgroundColor: '#F3D485',
    borderRadius: 20,
    padding: 8,
  },


});
