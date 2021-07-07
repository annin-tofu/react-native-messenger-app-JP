// use ES7 snippets
// rnfes (ReactNativeFunctionalExportStylesheet)
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { db } from "../firebase";

const CustomListItem = ({ id, chatName, enterChat }) => {
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("chats")
      .doc(id)
      //go into the collection of messages.
      .collection("messages")
      //timestamp, order by timestamp/decsending =>most recent message come to the top
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setChatMessages(snapshot.docs.map((doc) => doc.data()))
      );

    return unsubscribe;
  });

  return (
    // CHAT ITEM LIST
    // bottomDivider =>gives subtle lines underneath
    <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
      <Avatar
        // "rounded" makes the Avatar in a circle shape
        rounded
        source={{
          uri:
            // if there is a chatmessages in that chat. then access 0(first element). then get from photoURL.Avatar
            // If it doesnt exist "||"
            chatMessages?.[0]?.photoURL ||
            "https://res.cloudinary.com/dhyagpwyl/image/upload/v1625637559/default-profile-pic.jpg_jytoen.webp",
        }}
      />

      <ListItem.Content>
        {/* TITLE */}
        <ListItem.Title style={{ fontWeight: "800" }}>
          {chatName}
        </ListItem.Title>

        {/* SUBTITLE */}
        {/* "numberOfLines" set to 1 => we only want to show one line of text */}
        {/* "ellipsize" means "..." */}
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          {/* ? means undefined.  
          {chatMessages?.[0]?.message} refers to the last message */}
          {chatMessages?.[0]?.displayName} : {chatMessages?.[0]?.message}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
