// @ts-nocheck
import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Image} from "react-native";
import {Card} from "react-native-paper";
import { Entypo } from '@expo/vector-icons';

type Props = {
  id: string;
  name: string;
  image: string;
  speciality: string;
}

const DoctorListItem = ({id, name, image, speciality}: Props) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        activeOpacity={0.7}
        className="pt-5 py-3 flex flex-row items-center bg-gray-100 mx-5 my-1 rounded-lg shadow-xl border border-gray-300 px-5">
        <View className="flex space-x-4 flex-row items-center flex-1">
          <Image
            style={{width: 70, height: 70, borderRadius: 50}}
            source={{uri: image}}
          />
          <View>
            <Text
              className="text-xl font-bold">{name}
            </Text>
            <Text
              className="text-gray-500">#{id}
            </Text>
            <Text
              className="text-gray-500">{speciality}
            </Text>
          </View>
        </View>
        <Entypo name="chevron-right" size={24} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DoctorListItem;
// by Rokas with ❤️
