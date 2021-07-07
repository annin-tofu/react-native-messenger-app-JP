// use ES7 snippets
// rnfes (ReactNativeFunctionalExportStylesheet)

import React, { useLayoutEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Keyboard,
} from "react-native";
import { Avatar } from "react-native-elements";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { db, auth } from "../firebase";
import * as firebase from "firebase";

const ChatScreen = ({ navigation, route }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chat",
      //    headerBackTitleVisible: false => the tile "Back" next to back arrow on the header left to be invisible
      headerBackTitleVisible: false,
      //   headerTitleAlign: "left" => title to the left header
      headerTitleAlign: "left",
      headerTitle: () => (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/* sets the avatar of the last person in the chat */}
          <Avatar
            rounded
            source={{
              uri: "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
            }}
          />

          {/* <CHAT NAME */}
          <Text style={{ color: "white", marginLeft: 10, fontWeight: "700" }}>
            {/* {route.params.chatName} is the name of the chat => and set it as a
          title in ChatScreen page */}
            {route.params.chatName}
          </Text>
        </View>
      ),

      headerLeft: () => (
        <TouchableOpacity
          style={{ marginLeft: 10 }}
          // onPress={navigation.goBack} ==> makes the arrowleft clickable and takes you to previous page when clicked
          onPress={navigation.goBack}
        >
          {/* arrowleft  => arrow pointing to the left,
           color can take hex value, too */}
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
      ),

      // VIDEO CAMERA ICON AND PHONE ICON on header right
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 80,
            // marginRight set to 20 so that it is not touching to the right end
            marginRight: 20,
          }}
        >
          {/* VIDEO CAMERA ICON */}
          <TouchableOpacity>
            <FontAwesome name="video-camera" size={24} color="white" />
          </TouchableOpacity>
          {/* PHONE ICON */}
          <TouchableOpacity>
            <Ionicons name="call" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  const sendMessage = () => {
    //dismiss keyboard. ==> when SEND is clicked, it hides the keyboard
    Keyboard.dismiss();

    // SEND MESSAGE

    //go inside chats. =>which chat, are we in? then pass in 'chats'. and then "doc". then pass in 'router.params.id'.
    // then iside of chat in collection of 'messages' and push /("add") objects
    db.collection("chats").doc(route.params.id).collection("messages").add({
      //when SEND button is clicked, it goes to firebase. then firestore. then FieldValue. then serverTimestamp()
      // Reason why servertimestamp is used that the users might be from all over the world. they have diffent timestmp. But using an universal ServerTimeStamp prevents it.
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      //How to get User's name   => go to "auth". then get the CurrentUser. then displayName that we first set up
      displayName: auth.currentUser.displayName,
      email: auth.currentUser.email,
      //profile picture
      photoURL: auth.currentUser.photoURL,
    });

    setInput("");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="light" />
      {/* route.params => https://youtu.be/MJzmZ9qmdaE?t=8517 */}
      {/* <Text>{route.params.chatName}</Text> */}
      <KeyboardAvoidingView
        //  behavior={Platform.OS === "ios" ? "padding" : "height"} reads if the platform is "iOS", apply "padding" or "height"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        // This will allow you to offset the screen
        keyboardVerticalOffset={90}
      >
        {/* //disable keyboard when tapped */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <ScrollView>{/* Chat goes here */}</ScrollView>
            <View style={styles.footer}>
              <TextInput
                value={input}
                //styling is separetaly set later
                onChangeText={(text) => setInput(text)}
                pleceholder="Signal Message"
                onSubmitEditing={sendMessage}
                style={styles.textInput}
              />

              {/* SEND ICON (blue arrow facing rightward) */}
              <TouchableOpacity onPress={sendMessage} activeOpacity={0.5}>
                <Ionicons name="send" size={24} color="#2B68E6" />
              </TouchableOpacity>
            </View>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
  },

  // TEXT INPUT in the bottom styling
  textInput: {
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 15,
    // borderColor: "transparent",
    backgroundColor: "#ECECEC",
    // borderWidth: 1,
    padding: 10,
    color: "grey",
    borderRadius: 30,
  },
});
