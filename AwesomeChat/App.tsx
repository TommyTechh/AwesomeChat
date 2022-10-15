
import React, {useEffect, useState, type PropsWithChildren} from 'react';

import SplashScreen from 'react-native-splash-screen';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginscreen from './components/screens/loginscreen'
import Chatroom from './components/screens/chatroom';
import Chatrooms from './components/screens/chatrooms';
import auth from '@react-native-firebase/auth'


const App = () => {

  //Uses react-navigation to navigate between screens
  const Stack = createNativeStackNavigator();
  const [user, setUser] = useState(null);


  useEffect( () =>{
    SplashScreen.hide()
    const unsubscribe = auth().onAuthStateChanged(user => {
      user ? setUser(user) : setUser(null);
    });
    return () => {
      unsubscribe();
    };
  }, []);


return(
  <NavigationContainer>
    <Stack.Navigator>
      {user ? 
      <Stack.Screen name ="Chatrooms" component={Chatrooms} /> 
      : 
      <Stack.Screen name ="Login" component={Loginscreen} /> }
      <Stack.Screen name ="Chatroom" component={Chatroom} options={({ route }) => ({ title: route.params.item })} /> 
    </Stack.Navigator>
  </NavigationContainer>
)


};




export default App;
