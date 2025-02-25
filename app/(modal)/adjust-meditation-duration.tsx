import AppGradient from "@/components/AppGradient";
import CustomButton from "@/components/CustomButton";
import { TimerContext } from "@/context/TimerContext";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { useContext } from "react";
import { View, Text, Pressable } from "react-native";

const AdjustMeditationDuration = () => {
  const { setDuration } = useContext(TimerContext);

  const handlePress = (duration: number) => {
    setDuration(duration);
    router.back();
  };
  return (
    <View className="flex-1 relative">
      <AppGradient
        // Background Linear Gradient
        colors={["#161b2e", "#0a4d4a", "#766e67"]}
      >
        <Pressable
          onPress={() => router.back()}
          className=" absolute top-16 left-6 z-10"
        >
          <AntDesign name="leftcircleo" size={50} color="white" />
        </Pressable>
        <View className="justify-center h-4/5">
          <View>
            <Text className="text-center font-bold text-3xl text-white mb-8">
              Adjust your meditation duration
            </Text>
          </View>

          <View>
            <View className="bg-white rounded-2xl text-3xl min-h-[62px] justify-center items-center">
              <CustomButton
                title="10 seconds"
                onPress={() => handlePress(10)}
                containerStyles="mb-5"
              />
            </View>
            <View className="bg-white rounded-2xl text-3xl min-h-[62px] justify-center items-center mt-5">
              <CustomButton
                title="5 minutes"
                onPress={() => handlePress(5 * 60)}
                containerStyles="mb-5"
              />
            </View>
            <View className="bg-white rounded-2xl text-3xl min-h-[62px] justify-center items-center mt-5">
              <CustomButton
                title="10 minutes"
                onPress={() => handlePress(10 * 60)}
                containerStyles="mb-5"
              />
            </View>
            <View className="bg-white rounded-2xl text-3xl min-h-[62px] justify-center items-center mt-5">
              <CustomButton
                title="15 minutes"
                onPress={() => handlePress(15 * 60)}
                containerStyles="mb-5"
              />
            </View>
          </View>
        </View>
      </AppGradient>
    </View>
  );
};
export default AdjustMeditationDuration;
