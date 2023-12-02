import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white flex space-y-5 " edges={["top"]}>
      <StatusBar style="dark" />

      {/* punchline and avatar */}
      <View className="flex-row items-center justify-between mx-3">
        <View className="space-y-2">
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-neutral-700"
          >
            READY TO
          </Text>
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-red-600"
          >
            WORKOUT
          </Text>
        </View>

        <View className="flex items-center justify-center space-y-2 ">
          <Image
            source={require("../assets/images/avatar.png")}
            style={{ width: wp(12), height: hp(6) }}
            className="rounded-full"
          />
          <View
            className="flex bg-neutral-200 rounded-full items-center justify-center"
            style={{ width: wp(11), height: hp(5) }}
          >
            <Ionicons name="notifications" size={hp(3)} color="gray" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
