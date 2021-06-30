// use ES7 snippets
// rnfes (ReactNativeFunctionalExportStylesheet)

//State hook is... https://reactjs.org/docs/hooks-state.html
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";

// LOGIN SCREEN
const LoginScreen = () => {
  // Declare a new state variable, which we'll call "Email"
  const [email, setEmail] = useState("");

  // Declare a new state variable, which we'll call "Password"
  const [password, setPassword] = useState("");

  return (
    <View>
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
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
