// @ts-nocheck
import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Image} from "react-native";
import {Card} from "react-native-paper";

type Props = {
  id: string;
  name: string;
  image: string;
  speciality: string;
}

const DoctorListItem = ({id, name, image, speciality}: Props) => {
  return (
    <SafeAreaView>
      <TouchableOpacity className="pt-5 space-x-4 py-10 flex flex-row items-center bg-gray-100 mx-5 my-2 rounded-lg shadow-xl border border-gray-300 px-5">
        <Image
          style={{width: 70, height: 70, borderRadius: 50}}
          source={{uri: image}}
        />
        <View>
          <Text className="text-2xl font-bold">{name}</Text>
          <Text className="text-gray-500">#{id}</Text>
          <Text className="text-gray-500">{speciality}</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DoctorListItem;
// by Rokas with ❤️
