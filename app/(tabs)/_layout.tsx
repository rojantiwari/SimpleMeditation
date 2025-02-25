import React from "react";

// import { View, Text } from "react-native";
import Colors from "@/constants/Colors";
import { Tabs } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      <Tabs.Screen
        name="nature-meditate"
        options={{
          tabBarLabel: "Meditate",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="flower-tulip"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};
export default TabLayout;
