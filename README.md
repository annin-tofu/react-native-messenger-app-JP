# signal-clone

# To start

$ expo start

## If you get this error,

"Expo Developer Tools is disconnected from Expo CLI. Use the expo start command to start the CLI again."

reinstall watchman by doing so
$ brew reinstall watchman

and you should no longer see the error message

## cant run iOS simulator?

You have to install Xcode to be able run iPhone Emulator /simulator

# React-Native Navigation

## Installation

$ yarn add @react-navigation/native
https://reactnavigation.org/docs/getting-started/

## Installing dependencies into an Expo managed project

$ expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

This will install all dependencies to the terminal

# in React-Native "Navigator" will allow us to have MULTIPLE Screens inside of an app. it STACKS up

on phone apps, different screens stack up on each other
when swiped back, it removes the page from the stack.

On the otherhand, like React "Router", on web , when you click, it takes you to different route. i.e. Pages do not stack up.

https://youtu.be/MJzmZ9qmdaE?t=1339

# // ES7 snippets.

// use rnfes (ReactNativeFunctionalExportStylesheet)

# // react-native-vector-icons are installed by default by EXPO

# Cmd + K will enable keyboard on iphone simulator

# useState ... How to use State hook: https://reactjs.org/docs/hooks-state.html

# In React, Button tag takes props with title. React-Native EXPO App sets flex-column by DEFAULT, not row

# RegisterScreen

navigation props.
https://youtu.be/MJzmZ9qmdaE?t=3027

--in LoginScreen.json

const LoginScreen = ({ navigation }) => {

onPress={() => navigation.navigate("Register")

in RegisterScreen.js

const RegisterScreen = ({navigation}) => {

## // KeyboardAvoidingView tag will push up the page when the keyboards is brought up

  <KeyboardAvoidingView behavior='padding' style={styles.container} >

## {/\* //StatusBar is Clock/Reception/Battery Icons next to iPhone camera notch.

      "light" is white.
      "dark" is black*/}


      <StatusBar style="light" />

## in React-Native, we do not use <h1> tag

instead, write like this.

<Text h3 style={{ marginBottom: 50 }}>
Create an account
</Text>
