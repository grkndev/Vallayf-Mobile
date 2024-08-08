import { View, Text, Image } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "@/components/Navbar";
import TabBar from "@/components/Navigation/TabBar";

export default function _layout() {
  return (
    <SafeAreaView className="flex-1 bg-vallayf-950 px-4  py-2 ">
      <Image
        className="absolute"
        source={require("@/assets/images/light.png")}
      />
      <Navbar />
      {/* <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "transparent",
          },
        }}
      /> */}
      <Slot />
      <TabBar />
    </SafeAreaView>
  );
}
