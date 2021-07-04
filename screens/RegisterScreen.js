// use ES7 snippets
// rnfes (ReactNativeFunctionalExportStylesheet)

import { StatusBar } from "expo-status-bar";
import React, { useState, useLayoutEffect } from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import { auth } from "../firebase";

const RegisterScreen = ({ navigation }) => {
  // Name column
  const [name, setName] = useState("");
  //   Email column
  const [email, setEmail] = useState("");
  //   Password column
  const [password, setPassword] = useState("");
  //   ImageUrl column
  const [imageUrl, setImageUrl] = useState("");

  //   useLayerEffect in React-Native similarly works like useEffect as in React.
  // Any kind of navigation works, use useLayerEffect
  //   https://youtu.be/MJzmZ9qmdaE?t=3884
  //   https://reactjs.org/docs/hooks-reference.html#uselayouteffect
  useLayoutEffect(() => {
    navigation.setOptions({
      // headerBackTitle is message that is next "<"" logo on top-left.
      headerBackTitle: "Back to Login",
    });
  }, [navigation]);

  //   This is for   {/* ImageURL column */}
  //   onSubmitEditing={register}
  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        // https://youtu.be/MJzmZ9qmdaE?t=4483
        authUser.user.update({
          displayName: name,
          //   double straight lines || means OR
          photoURL:
            imageUrl ||
            "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
        });
      })
      //below line is for when the authentication did not go successful. if there is any error, alert will pop up
      .catch((error) => alert(error.message));
  };

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
      {/* onPress={register} >> upon clicking the button, it will trigger register.  or  // onSubmitEditing={register}  >> will enable automatic register */}
      {/* raised  >> creates raised effects >> creates shadow effect */}
      <Button raised onPress={register} title="Register" />

      {/* next line is added to have more space between keyboard and register button, when keyboard is enabled. */}
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

// styling (CSS)  <<< This styling is the exactly the same as in LoginScreen
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
