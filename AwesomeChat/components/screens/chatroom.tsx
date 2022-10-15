import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {
  View,
  StyleSheet,
  Alert,
  FlatList,
} from 'react-native';
import Chat from '../backend/chatmessage';
import Input from '../backend/textinput';
import SendButton from '../backend/sendbutton';


export default function Chatroom ({route}) {
  const [text, setText] = useState('');                      // Input text
  const [chats, setChats] = useState([]);                    // Chat messages
  const timestamp = firestore.FieldValue.serverTimestamp();  // Firestore timestamp
  const chatroomId = route.params.item;
  const user = auth().currentUser;
  let userID;
  let photoURL;
  

  //Sets values for userid and photoURL to use in chats
  const checkUser = () => {
    if(user !== null){
      userID = user.uid;
      photoURL = user.photoURL;
    }
  }
  
  
  
  
  const sendMessage = async e => {
        
    checkUser()
    if (text.length >= 1) {
      try{
        await firestore()
          .collection(chatroomId).doc().set({
            owner: userID,
            imageUrl: photoURL,
            text: text,
            createdAt: timestamp,
          }).then(() => {
            setText('');
          })
         
        }catch{
          Alert.alert('Error')
        }
      }
          else {
      Alert.alert('Chat not sent', 'Text field can\'t be empty ');
    }
  };
  useEffect(() => {
    const unsubscribe = firestore()
      .collection(chatroomId) 
      .orderBy('createdAt')    //sorted by createdAt
      .limitToLast(50) //last 50 messages              
      .onSnapshot(querySnapshot => {
        const chatsArr = [];
        querySnapshot.forEach(doc => {
          const id = doc.id;
          const data = doc.data();
          chatsArr.push({id, ...data});
        });
        setChats(chatsArr);
      });

    return () => {
      unsubscribe();
    };
  }, []);

    return (
      <View style={styles.container}>
        <View style={styles.chatStyle}>
          {chats && (
            <FlatList
              data={chats}
              renderItem={({item}) => <Chat key={item.id} chat={item} />}
            />
          )}
        </View>
        <View style={styles.inputContainer}>
          <Input text={text} setText={setText} />
          <SendButton handleChat={sendMessage} />
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  chatStyle: {
    
    height: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  container: {
    flex: 1,
    backgroundColor: '#181616',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  inputContainer: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#151718',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#1d1b1b',

  },
  text: {
    fontWeight: '600',
    fontSize: 20,
    color: '#030303',
    marginRight: 'auto',
    marginLeft: 8,
    padding: 4,
  },
  textContainer: {
    flexDirection: 'row',
    height: 60,
    width: '100%',
    margin: 0,
    padding: 8,
    elevation: 6,
    backgroundColor: '#ffa600',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});