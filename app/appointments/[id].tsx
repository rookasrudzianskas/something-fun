//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {Searchbar} from "react-native-paper";

const AppointmentDetails = () => {
  const [text, setText] = React.useState('');

  return (
    <View className="px-5">
      <TouchableOpacity className="mt-7">
        <Searchbar placeholder={'Search'} value={text} />
      </TouchableOpacity>

      <Text className="text-2xl font-semibold mt-5">Upcoming Appointments:</Text>

      <FlatList
        data={[
          {
            id: '1',
            name: 'John Doe',
            speciality: 'Cardiologist',
          }
        ]}
        renderItem={({item}) => (
          <View className="bg-white rounded-lg shadow-lg p-5  mt-5">
            <Text className="text-xl font-semibold">Dr. {item.name}</Text>
            <Text className="text-gray-500">#{item.id}</Text>
            <Text className="text-gray-500">{item.speciality}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default AppointmentDetails;
