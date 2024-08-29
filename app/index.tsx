import { Text, View } from "react-native";
import React from "react";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is my First react Native project.</Text>
      <Text>Here I am going to Build a Project which is a To Do List</Text>
      <View
        style={{
          backgroundColor: "red",
          width: 200,
          height: 50,
          marginTop: 20,
        }}
      />
    </View>
  );
}
