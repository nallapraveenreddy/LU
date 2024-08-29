import { Stack } from "expo-router";
import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import React from "react";
import IonicIcons from '@expo/vector-icons/Ionicons';
export default function RootLayout() {
  return (
    <Tabs>
        <Tabs.Screen name="home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <IonicIcons name="home" color={color} size={size} />
          ),
        }}/>
        <Tabs.Screen name="explore"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <IonicIcons name="search" color={color} size={24} />
          ),
        }}/>
        <Tabs.Screen name="profile"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <IonicIcons name="people-circle" color="black" size={24} />
          ),
        }}/>
    </Tabs>
  );
}