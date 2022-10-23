import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Input = ({text, setText}) => {

  //Text input to type messages
  return (
    <TextInput
      value={text}
      onChangeText={setText}
      style={styles.textField}
      placeholder="Enter message"
      placeholderTextColor="#595959"
    />
  );
};

const styles = StyleSheet.create({
  textField: {
    width: '80%',
    fontSize: 15,
    letterSpacing: 0,
    color: '#D41D1D',
    borderRadius: 4,
    backgroundColor: 'grey',
  },
});

export default Input;