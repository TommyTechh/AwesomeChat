import React from 'react';
import firestore from '@react-native-firebase/firestore'
import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth'

const Chat = ({chat}) => {
    const {owner} = chat;
    const currentUser = auth().currentUser.uid;
  
    return owner === currentUser ? (
      <Sent chat={chat} />
    ) : (
      <Received chat={chat} />
    );
  };

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
  
  const Sent = ({chat}) => {
  
    const {id, imageUrl, text} = chat;
  
    const handleDelete = async () => {
      await firestore().collection('chats').doc(id).delete();
    };
  
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
      width: '50%',
      marginRight: 'auto',
      flexDirection: 'row',
    },
    textReceived: {
      fontSize: 15,
      color: 'black',
    },
    imageReceived: {
      width: '50%',
      height: 45,
      marginRight: '2%',
      borderRadius: 50,
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
      maxWidth: '80%',
      letterSpacing: 0,
      fontWeight: '600',
      textAlign: 'right',
      color: 'black',
    },
    imageSent: {
      width: 45,
      height: 45,
      marginLeft: 4,
      marginRight: 0,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textbgSent: {
      height: 'auto',
      maxWidth: '100%',
      marginRight: 0,
      marginLeft: 'auto',
      borderRadius: 4,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      backgroundColor: '#D41D1D',
    },
  })



  
  export default Chat;