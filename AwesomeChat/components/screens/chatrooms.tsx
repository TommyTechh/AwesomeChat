import { View, Text, StyleSheet, Button } from "react-native";
import { FlatList, SafeAreaView} from "react-native";
import SignoutButton from '../backend/signoutbutton'
import auth from '@react-native-firebase/auth'


export default function Chatrooms({ navigation }) {

    //Predefined chatrooms
    const chatrooms = ['Chatroom1', 'Chatroom2', 'Chatroom3', 'Chatroom4','Chatroom5']
    
    //sign-out current user
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
                navigation.navigate("Chatroom",{   //Navigates to specific chatroom with the item parameter which is simply a string
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
    marginVertical: '5%',
    
},

text: {
    color: '#D41D1D',
    fontSize: 20,
    fontFamily:'gustavo_regular'
    
},

button:{
    marginVertical: '15%'

}

})