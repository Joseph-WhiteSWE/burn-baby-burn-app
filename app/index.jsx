import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeIn, FadeOut, FadeInDown } from "react-native-reanimated";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    // extends View to full screen
    <View className="flex-1 justify-end">
      <StatusBar style="light" />

      {/* makes image full screen */}
      <Image
        className="h-full w-full absolute"
        source={require("../assets/images/welcome.png")}
      />

      {/* adds a gradient */}
      <LinearGradient
        colors={["transparent", "#8b0000"]}
        style={{ width: wp(100), height: hp(70) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        className="flex justify-end pb-12 space-y-8"
      >
        <Animated.View
          entering={FadeInDown.delay(100).springify()}
          className="flex items-center "
        >
          <Text
            style={{ fontSize: hp(6) }}
            className="text-white font-bold tracking-wide"
          >
            Best
            <Text className="text-red-600"> Workouts</Text>
          </Text>
          <Text
            style={{ fontSize: hp(5) }}
            className="text-white font-bold tracking-wide"
          >
            For You
          </Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(400).springify()}>
          {/* make it into a touchable component */}
          <TouchableOpacity
            //use expo router to navigate components
            onPress={() => router.push("home")}
            style={{ height: hp(7), width: wp(80) }}
            className="bg-red-600 flex items-center justify-center mx-auto rounded-full"
          >
            <Text
              style={{ fontSize: hp(3) }}
              className="text-white font-bold tracking-widest"
            >
              Let's Get Started
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
}
