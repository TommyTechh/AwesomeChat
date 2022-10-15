import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';


const SignoutButton = ({handleSignOut}) => {
    return (
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.text}>Sign out</Text>
      </TouchableOpacity>
    );
  };


  const styles = StyleSheet.create({
    text:{
        color:'#D41D1D'
    },
    button: {     
      width: '100%',
      height: 40,
      borderWidth: 2,
      borderColor: '#D41D1D',
      borderRadius: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
  });

  export default SignoutButton;