import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

const CustomListItem = ({ id, chatName, enterChat }) => {
  return (
    // CHAT ITEM LIST
    <ListItem>
      <Avatar
        // "rounded" makes the Avatar in a circle shape
        rounded
        source={{
          uri: "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
        }}
      />

      <ListItem.Content>
        {/* TITLE */}
        <ListItem.Title style={{ fontWeight: "800" }}>
          Youtube Chat
        </ListItem.Title>

        {/* SUBTITLE */}
        {/* "numberOfLines" set to 1 => we only want to show one line of text */}
        {/* "ellipsize" means "..." */}
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          This is a test subtitle This is a test subtitle This is a test
          subtitle This is a test subtitle This is a test subtitle This is a
          test subtitle
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
