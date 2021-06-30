// use ES7 snippets
// rnfes (ReactNativeFunctionalExportStylesheet)

//State hook is... https://reactjs.org/docs/hooks-state.html
import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";

// LOGIN SCREEN

// const and function are the same thing
const LoginScreen = () => {
  // Declare a new state variable, which we'll call "Email"
  const [email, setEmail] = useState("");

  // Declare a new state variable, which we'll call "Password"
  const [password, setPassword] = useState("");

  const signIn = () => {};

  return (
    // <View style={styles.container}>
    // KeyboardAvoidingView tag enables
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      {/* //StatusBar is Clock/Reception/Battery Icons next to iPhone camera notch. 
      "light" is white. 
      "dark" is black*/}
      <StatusBar style="light" />
      <Image
        // use "source", "src" will not work.
        source={{
          uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
        }}
        //inline-styling
        style={{ width: 200, height: 200 }}
      />
      {/* INPUT COLUMN for Email for sign-up */}
      <View style={styles.inputContainer}>
        {/* placeholder is grey words to show "Email" to show it is the place for "Email" */}
        <Input
          placeholder="Email"
          //  {/* Also, autoFocus type gives effect that it auto focuses to input box when logged in. */}
          autoFocus
          type="email"
          value={email}
          // // https://reactjs.org/docs/forms.html
          // in React-Native, no need to set (e.target.value) like React.
          // instead use onChangeText
          onChangeText={(text) => setEmail(text)}
        />

        <Input
          placeholder="Password"
          //  {/* secureTextEntry will hide typed passwords with black dots for security */}
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      {/* In React-Native, it takes props with title.
// React-Native EXPO App sets flex-column by DEFAULT, not row.
// Also, In React-Native, uses containStyle= instead of Style= as in React*/}

      {/* 
// use onPress in React-Native, instead of onClick as in React. This is becuase of idea of stack in react-native app*/}
      <Button containerStyle={styles.button} onPress={signIn} title="Login" />

      {/* type="outline"  makes the box outlined. i.e. here it  makes the Register box with blue text, and white background, and blue outline */}
      <Button containerStyle={styles.button} type="outline" title="Register" />

      {/* next line is added to have more space between keyboard and register button, when keyboard is enabled. */}
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

// styling (CSS)
const styles = StyleSheet.create({
  // for WHOLE LoginScreen
  container: {
    flex: 1,
    // alignItems: 'center'  >>NOTE: axis is vertical
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },

  // Login and Register width are widened here
  inputContainer: {
    width: 300,
  },

  // marginTop will make more space between Login and Register buttons
  button: {
    width: 200,
    marginTop: 10,
  },
});
