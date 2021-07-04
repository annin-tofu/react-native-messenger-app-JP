import { auth, db } from "../firebase";
import React, { useLayoutEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Avatar } from "react-native-elements";
import CustomListItem from "../components/CustomListItem";
//AntDesign, SimpleLineIcons are to pull bunch of icons  from "@expo/vector-icons"
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

//for Logout
const HomeScreen = ({ navigation }) => {
  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      //HEADER styling
      title: "Signal",
      headerStyle: { backgroundColor: "#fff" },
      //header title color
      headerTitleStyle: { color: "black" },
      // header icons color
      headerTintColor: "black",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
            {/* auth  ==>it first tries to pull from local authentication.
          "?" IF EMPTY then,
          currentUser ==> get currentuser.
          "?" IF EMPTY/UNDEFINED then,
          get photoURL         
          */}
            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
          </TouchableOpacity>
        </View>
      ),

      headerRight: () => {
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 80,
            marginRight: 20,
          }}
        >
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name="camerao" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <SimpleLineIcons name="pencil" size={24} color="black" />
          </TouchableOpacity>
        </View>;
      },
    });
  }, []);

  return (
    // SafeAreaView protects surrounding container from getting cut off by notches (rounded corners)
    <SafeAreaView>
      {/* //ScrollView enables scrollable container */}
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
