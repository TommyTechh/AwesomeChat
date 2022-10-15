import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { FlatList, SafeAreaView, SectionList } from "react-native";
import SignoutButton from '../backend/signoutbutton'
import auth from '@react-native-firebase/auth'


export default function Chatrooms({ navigation }) {

    const chatrooms = ['Chatroom1', 'Chatroom2', 'Chatroom3', 'Chatroom4','Chatroom5']
    
    const signOut = async () => await auth().signOut();

    return ( 
        <SafeAreaView style={styles.container}>
            <View style={styles.signout}>
            <SignoutButton handleSignOut={signOut} />
            </View>
            <Text style={styles.text}>Which chatroom do you want to enter?</Text>
            <View style={styles.button}>
            <FlatList
              data={chatrooms}
              renderItem={({item}) =>
               <Button title={item}
                color='#D41D1D'
                 onPress={ () =>
                navigation.navigate("Chatroom",{
                    item,
                })} />
            }
              ItemSeparatorComponent={() => <View style={styles.button}/>}
            />
            </View>



        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
container:{
    flex:1,
    alignItems: 'center',
    marginVertical: '10%',
},

signout:{
    marginLeft: 'auto',
    marginHorizontal: '5%',
    marginVertical: '5%'
},

text: {
    color: '#D41D1D',
    fontSize: 20
},

button:{
    marginVertical: '15%'
}

})