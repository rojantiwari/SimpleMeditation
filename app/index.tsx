import React from "react";
import { ImageBackground, SafeAreaView, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import beachImage from "@/assets/meditation-images/beach.webp";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";

export default function Index() {
  const router = useRouter();
  return (
    <View className="flex-1 ">
      <StatusBar style="light" />
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0, 0, 0, 0.4)", "rgba(0 ,0, 0, 0.8)"]}>
          <SafeAreaView className="flex-1 px-4 justify-between">
            <View className="mt-[50px]">
              <Text className="text-center text-white font-bold text-4xl  ">
                Simple Meditation{" "}
              </Text>
              <Text className="text-center text-white text-regular text-2xl mt-3">
                Simplifying Meditation for EveryOne
              </Text>
            </View>
            <View className="bg-white rounded-2xl min-h-[62px] justify-center items-center ">
              <CustomButton
                onPress={() => router.push("/nature-meditate")}
                title="Get Started"
                textStyles="text-2xl"
              />
            </View>
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
}
