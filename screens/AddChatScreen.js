import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { db } from "../firebase";

const AddChatScreen = ({ navigation }) => {
  const [input, setInput] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: " Add a new chat",
      //   below line is only effective on iPhones. will not be enabled in web app. ==> iPhone will have "chats" next to the back arrow on header left
      headerBackTitle: "Chats",
    });
  }, [navigation]);

  const createChat = async () => {
    await db
      //go to firestore DB, and you will see "chats" stored in a "collection".
      .collection("chats")
      //then we "add" to the "collection". and we add "chatName"
      .add({ chatName: input })
      .then(() => {
        //navigate the user to "goBack" ( goes back to the precious screen)
        navigation.goBack();
      })
      //error handling
      .catch((error) => alert(error));
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="新しく作成するチャットの名前を入力"
        value={input}
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={createChat}
        // for Messenger icon on the very left
        leftIcon={
          <Icon name="wechat" type="antdesign" size={24} color="black" />
        }
      />
      <Button
        // button disabled if there is no input
        disbled={!input}
        onPress={createChat}
        title="チャットを作成する"
      />
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 30,
    height: "100%",
  },
});
