import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";

const AddChatScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: " Add a new chat",
      //   below line is only effective on iPhones. will not be enabled in web app. ==> iPhone will have "chats" next to the back arrow on header left
      headerBackTitle: "Chats",
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Add Chat Screen</Text>
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {},
});
