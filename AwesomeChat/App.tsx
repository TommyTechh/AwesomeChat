
import React, {useEffect, type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import SplashScreen from 'react-native-splash-screen';
import Firebase from '@react-native-firebase/app'
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginscreen from './components/screens/loginscreen'
import Chatroom from './components/screens/chatroom';


const App = () => {

  //Uses react-navigation to navigate between screens
  const Stack = createNativeStackNavigator();


  useEffect( () =>{
    SplashScreen.hide()
  }, []);


return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name ="Login" component={Loginscreen} />
      <Stack.Screen name ="Chatroom" component={Chatroom} />
    </Stack.Navigator>
  </NavigationContainer>
)


};




export default App;
