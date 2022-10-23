import React from 'react';
import firestore from '@react-native-firebase/firestore'
import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth'

const Chat = ({chat}) => {
    const {owner} = chat;
    const currentUser = auth().currentUser.uid;
  
    //Checks if message is yours or not.
    return owner === currentUser ? (
      <Sent chat={chat} />
    ) : (
      <Received chat={chat} />
    );
  };


  //Style for received messages
  const Received = ({chat}) => {
    const {id, imageUrl, text} = chat;
  
    return (
      <View style={styles.rowStyleReceived}>
        <TouchableOpacity key={id} style={styles.textbgReceived}>
          <Image style={styles.imageReceived} source={{uri: imageUrl}} />
          <Text style={styles.textReceived}>{text}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  //Style for sent messages
  const Sent = ({chat}) => {
  
    const {id, imageUrl, text} = chat;
  
    return (
      <View style={styles.rowStyleSent}>
        <TouchableOpacity
          key={id}
          style={styles.textbgSent}>
          <Text style={styles.textSent}>{text}</Text>
          <Image style={styles.imageSent} source={{uri: imageUrl}} />
        </TouchableOpacity>
      </View>
    );
  };

  const styles = StyleSheet.create({
    rowStyleReceived: {
      width: '90%',
      marginTop: '2%',
      marginRight: 'auto',
      flexDirection: 'row',
    },
    textReceived: {
      padding: 0,
      fontSize: 18,
      maxWidth: '100%',
      letterSpacing: 0,
      textAlign: 'left',
      color: 'black',
    },
    imageReceived: {
      width: 45,
      height: 45,
      marginLeft: '2%',
      marginRight: 4,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center'
    },
    textbgReceived: {
      padding: 4,
      borderRadius: 4,
      marginRight: 'auto',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: '#1dd4d4',
    },
    rowStyleSent: {
      width: '90%',
      marginTop: '2%',
      marginLeft: 'auto',
      flexDirection: 'row',
    },
    textSent: {
      padding: 0,
      fontSize: 18,
      maxWidth: '90%',
      letterSpacing: 0,
      textAlign: 'right',
      color: 'black',
    },
    imageSent: {
      width: 45,
      height: 45,
      marginLeft: 5,
      marginRight: '2%',
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textbgSent: {
      padding: 4,
      borderRadius: 4,
      marginLeft: 'auto',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: '#D41D1D',
    },
  })



  
  export default Chat;