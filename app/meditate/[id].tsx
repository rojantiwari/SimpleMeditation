import { View, Text, ImageBackground, Pressable } from "react-native";

import MEDITATION_IMAGES from "@/constants/meditation-images";
import AppGradient from "@/components/AppGradient";
import { AntDesign } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import CustomButton from "@/components/CustomButton";
import { useEffect, useState } from "react";

const Meditate = () => {
  const { id } = useLocalSearchParams();

  const [secondsRemaining, setSecondsRemaining] = useState(10);
  const [isMeditating, setMeditating] = useState(false);

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (secondsRemaining === 0) {
      setMeditating(false);
      return;
    }

    if (isMeditating) {
      timerId = setTimeout(() => {
        setSecondsRemaining(secondsRemaining - 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [secondsRemaining, isMeditating]);

  // Format the timeLeft to ensure two digits are displayed
  const formattedTimeMinutes = String(
    Math.floor(secondsRemaining / 60)
  ).padStart(2, "0");
  const formattedTimeSeconds = String(secondsRemaining % 60).padStart(2, "0");

  return (
    <View className="flex-1">
      <ImageBackground
        source={MEDITATION_IMAGES[Number(id) - 1]}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["transparent", "rgba(0,0,0,0.8)"]}>
          <Pressable
            onPress={() => router.back()}
            className="absolute top-16 left-6 z-10"
          >
            <AntDesign name="leftcircleo" size={50} color="white" />
          </Pressable>

          <View className="flex-1 justify-center">
            <View className="mx-auto bg-neutral-200 rounded-full w-44 h-44 justify-center items-center">
              <Text className="text-4xl text-blue-800 font-rmono ">
                {formattedTimeMinutes}.{formattedTimeSeconds}
              </Text>
            </View>
          </View>

          <View className="mb-5 bg-white rounded-2xl text-3xl min-h-[62px] justify-center items-center">
            <CustomButton
              title="Start Meditation"
              onPress={() => setMeditating(true)}
              // onPress={handleAdjustDuration}
            />
            {/* <CustomButton
              //   title={isMeditating ? "Stop" : "Start Meditation"}
              title="Stop"
              onPress={() => console.log("Pressed")}
              // onPress={toggleMeditationSessionStatus}
              containerStyles="mt-4"
            /> */}
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};
export default Meditate;
