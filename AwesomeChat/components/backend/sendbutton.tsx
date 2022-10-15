import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const SendButton = ({handleChat}) => {
  return (
    <TouchableOpacity onPress={handleChat} style={styles.button}>
      <Text>Send</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    marginLeft: 16,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D41D1D',
  },
});

export default SendButton;