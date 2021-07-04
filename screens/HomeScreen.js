import React, { useLayoutEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import CustomListItem from "../components/CustomListItem";

const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({ title: "Signal" });
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
