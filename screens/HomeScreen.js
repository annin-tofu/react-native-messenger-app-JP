import { auth, db } from "../firebase";
import React, { useLayoutEffect, useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Avatar } from "react-native-elements";
import CustomListItem from "../components/CustomListItem";
//AntDesign, SimpleLineIcons are to pull bunch of icons  from "@expo/vector-icons"
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

//for Logout
const HomeScreen = ({ navigation }) => {
  // https://youtu.be/MJzmZ9qmdaE?t=7728
  // this will go ahead and have all the State, by default, an empty array "[]"
  const [chats, setChats] = useState([]);

  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };

  // https://youtu.be/MJzmZ9qmdaE?t=7728
  useEffect(() => {
    //clean up functions afterwards. and connect to out db of collection of "chats"
    const unsubscribe = db
      .collection("chats")
      //this will give live snapshot of the database.
      .onSnapshot((snapshot) =>
        //set out local state of empty array of snapshot.  for the every single  doc, go ahead and return objects.
        setChats(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );

    return unsubscribe;
  }, []);
  useLayoutEffect(() => {
    navigation.setOptions({
      //HEADER styling
      title: "Messenger-App",
      headerStyle: { backgroundColor: "#fff" },
      //header title color
      headerTitleStyle: { color: "black" },
      // header icons color
      headerTintColor: "black",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
            {/* auth  ==>it first tries to pull from local authentication.
          "?" IF EMPTY then,
          currentUser ==> get currentuser.
          "?" IF EMPTY/UNDEFINED then,
          get photoURL         
          */}
            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
          </TouchableOpacity>
        </View>
      ),

      // for Camera logo and pencil logo on header right
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            width: 80,
            marginRight: 20,
          }}
        >
          {/* PENCIL ICON */}
          <TouchableOpacity
            onPress={() => navigation.navigate("AddChat")}
            activeOpacity={0.5}
          >
            <SimpleLineIcons name="pencil" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  const enterChat = (id, chatName) => {
    // id: id, chatName: chatName ==>will work too
    navigation.navigate("Chat", { id, chatName });
  };

  return (
    // SafeAreaView protects surrounding container from getting cut off by notches (rounded corners)
    <SafeAreaView>
      {/* //ScrollView enables scrollable container */}
      <ScrollView style={styles.container}>
        {/* {chats.map(({chat}) => ( */}
        {/* "chat" needs to be deconstructed as   "id, data" 
      Also deconstructre "data" as "chatName"*/}
        {chats.map(({ id, data: { chatName } }) => (
          // "key" allows you to have efficient re-rendering of the list
          <CustomListItem
            key={id}
            id={id}
            chatName={chatName}
            //passing through "enterChat" function as a prop
            enterChat={enterChat}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // when you put 100%, you must put it in a string ""
    height: "100%",
  },
});
