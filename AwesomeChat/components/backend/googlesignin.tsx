import React, { useEffect, useState } from 'react';
import { Button, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/core';

//Initializes google sdk
GoogleSignin.configure({
    webClientId: '540844229874-g7vdq6dq4msoiuhfm1534bti28upj24h.apps.googleusercontent.com',
  });


//Navigates to chatroom screen if user is logged in
function checkUserStatus(){
  const navigation = useNavigation()

useEffect(() => {
  const subscriber = auth().onAuthStateChanged(user => {
     if(user){
      navigation.navigate("Chatroom")
     }
     
  });
    return subscriber;
  }, []);

}

export default function GoogleSignIn() {

  checkUserStatus()
  
  //Used to disable button when logging in
  const [loading, setLoading] = useState(false)

  async function onGoogleButtonPress() {
    
  setLoading(true)
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  setLoading(false)
  return auth().signInWithCredential(googleCredential);
}
  return (
    <GoogleSigninButton
      style={{ width: 192, height: 48 }}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={onGoogleButtonPress}
      disabled={loading}
  />
  );
}