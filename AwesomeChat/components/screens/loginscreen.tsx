import React from 'react';
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
import Googlesignin from '../backend/googlesigninbutton';


  

 //Shows googlesignin button
  export default function Loginscreen ({  }){
    return(
     <View style={styles.container}>
    <View>
      <Text style ={styles.text}>
         AwesomeChat 
         </Text>
    </View>
    <View style={styles.buttons}>
        <Googlesignin  />
    </View>
    </View>
    )

  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
    },

    text:  {
      marginTop: '10%',
      color: '#D41D1D',
      fontFamily:'gustavo_regular',
      fontSize: 53,
    },

    buttons: {
      marginVertical: '50%'
    }
  })
  






