//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Searchbar} from "react-native-paper";

const AppointmentDetails = () => {
  const [text, setText] = React.useState('');

  return (
    <View className="px-5">
      <TouchableOpacity className="mt-7">
        <Searchbar placeholder={'Search'} value={text} />
      </TouchableOpacity>

      <Text className="text-2xl font-semibold mt-5">Upcoming Appointments:</Text>
    </View>
  );
};

export default AppointmentDetails;
