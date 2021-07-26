# React-Native Messenger App

# install yarn

if you get this error, "Unable to find expo in this project - have you run yarn / npm install yet?"
run $ yarn install

# install react-native

https://reactnative.dev/docs/environment-setup

$ (sudo) yarn global add expo-cli

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

# When native-react is freaking out>>> try "Cmd + Ctrl + z" to reload

# {/_ raised >> creates raised effects >> creates shadow effect _/}

      <Button raised onPress={register} title="Register" />

# // useLayerEffect in React-Native similarly works like useEffect as in React.

// Any kind of navigation works, use useLayerEffect
// https://youtu.be/MJzmZ9qmdaE?t=3884
// https://reactjs.org/docs/hooks-reference.html#uselayouteffect
useLayoutEffect(() => {
navigation.setOptions({
// headerBackTitle is message that is next "<"" logo on top-left.
headerBackTitle: "Back to Login",
});
}, [navigation]);

# Connect to Firebase

---In RegisterScreen,

// This is for {/_ ImageURL column _/}
// onSubmitEditing={register}
const register = () => {
auth
.createUserWithEmailAndPassword(email, password)
.then((authUser) => {
// https://youtu.be/MJzmZ9qmdaE?t=4483
authUser.user.update({
displayName: name,
// double straight lines || means OR
photoURL:
imageUrl ||
"https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
});
})
//below line is for when the authentication did not go successful. if there is any error, alert will pop up
.catch((error) => alert(error.message));
};

---In LoginScreen,

// with below lines, the app will know if the user is logged in or not. https://youtu.be/MJzmZ9qmdaE?t=4518
useEffect(() => {
const unsubscribe = auth.onAuthStateChanged((authUser) => {
//next line is for when the user is not signed in>>> then push him to the Home screen
if (authUser) {
navigation.replace("Home");
}
});

    // "const unsubcribe" and below lines are for unmounting when the components remounts
    return unsubscribe;

}, []);

# Registration --For profile pic

only use JPEG/JPG or PNG

There are actually no differences between the JPG and JPEG formats. The only difference is the number of characters used. JPG only exists because in earlier versions of Windows (MS-DOS 8.3 and FAT-16 file systems) they required a three letter extension for the file names

https://res.cloudinary.com/dhyagpwyl/image/upload/v1625110274/Yuya_Profile_Pic_pp0zzs.png

# when React-Native is freaking out / or freezes

go to terminal and press "i" to reopoen iOS simulator.

# Deployment on firebase

$ firebase login
$ firebase init
choose Hosting

then run $ expo build:web
(this will create 'web-build' folder.
everytime there is a new change of code. run $ expo build:web
this is like running $ yarn build )

then run $ firebase deploy
to deploy on actual web

# react-native-messenger-app-JP
