// use ES7 snippets
// rnfes (ReactNativeFunctionalExportStylesheet)

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";

const RegisterScreen = ({ navigation }) => {
  // Name column
  const [name, setName] = useState("");
  //   Email column
  const [email, setEmail] = useState("");
  //   Password column
  const [password, setPassword] = useState("");
  //   ImageUrl column
  const [imageUrl, setImageUrl] = useState("");

  //   This is for   {/* ImageURL column */}
  //   onSubmitEditing={register}
  const register = () => {};

  return (
    // KeyboardAvoidingView tag will push up the page when the keyboards is brought up
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      {/* //StatusBar is Clock/Reception/Battery Icons next to iPhone camera notch. 
      "light" is white. 
      "dark" is black*/}
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50 }}>
        Create an account
      </Text>

      {/* // styling is imported from LoginScreen.js */}
      <View style={styles.inputContainer}>
        {/* FULL NAME column */}
        <Input
          placeholder="Full Name"
          //  {/* Also, autoFocus type gives effect that it auto focuses to input box when logged in. */}
          autofocus
          type="text"
          value={name}
          // // https://reactjs.org/docs/forms.html
          // in React-Native, no need to set (e.target.value) like React.
          // instead use onChangeText
          onChangeText={(text) => setName(text)}
        />
        {/* Email column */}
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        {/* PASSWORD column */}
        <Input
          placeholder="Password"
          type="password"
          //  {/* secureTextEntry will hide typed passwords with black dots for security */}
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        {/* ImageURL column */}
        <Input
          placeholder="Profile Picture URL (optional)"
          type="text"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          // onSubmitEditing={register}  >> will enable automatic register
          onSubmitEditing={register}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {},
});
