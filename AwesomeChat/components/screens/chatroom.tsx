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
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'



export default function Chatroom ({  }){

  const messageCollection = firestore().collection('chatroom#1')
  const query = messageCollection.orderBy('createdAt').limit(50)

  const messages: any = []
  query.get().then(querySnapShot => {
    querySnapShot.forEach(documentSnapShot => {
      messages.push(documentSnapShot.data())
    })
  })


    return(
    <View>
      {messages && messages.map(msg =>
        <ChatMessage key={msg.id} message={msg} />)}
    </View>
    )
  
  };
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      marginTop: '5%'
    }
  })
  
  function ChatMessage(props: any){
    const {text, uid} = props.message;
    return(
      <Text> {text} </Text>
    )
  }