import AppGradient from "@/components/AppGradient";
import { StatusBar } from "expo-status-bar";
import { View, Text, FlatList, Pressable, ImageBackground } from "react-native";

import { MEDITATION_DATA } from "@/constants/MeditationData";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import { LinearGradient } from "expo-linear-gradient";

const NatureMeditate = () => {
  return (
    <View className="flex-1 ">
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <View className=" mt-5">
          <Text className="text-gray-200 mb-3 font-bold text-4xl text-left">
            Welcome Harrison
          </Text>
          <Text className="text-indigo-100 text-xl font-medium">
            Start Your Meditation
          </Text>
        </View>
        <View>
          <FlatList
            data={MEDITATION_DATA}
            className="mb-20 "
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => console.log(item.id - 1)}
                className="h-48 my-3 rounded-2xl overflow-hidden  m-2"
              >
                <ImageBackground
                  source={MEDITATION_IMAGES[item.id - 1]}
                  resizeMode="cover"
                  className="flex-1 rounded-lg justify-center "
                >
                  <LinearGradient
                    colors={["transparent", "rgba(0, 0, 0, 0.7)"]}
                    className="flex-1 justify-center items-center"
                  >
                    <Text className="text-gray-100 text-3xl font-bold text-center">
                      {" "}
                      {item.title}
                    </Text>
                  </LinearGradient>
                </ImageBackground>
              </Pressable>
            )}
          ></FlatList>
        </View>
      </AppGradient>
      <StatusBar style="light" />
    </View>
  );
};
export default NatureMeditate;
