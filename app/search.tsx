//@ts-nocheck
import React, {useLayoutEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {useNavigation} from "expo-router";
import DoctorListItem from "../src/components/DoctorListItem";
import doctors from '../data/doctors.json';

const Search = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: 'Search',
        onChangeText: (event) => setSearch(event.nativeEvent.text),
      }
    })
  }, [navigation]);

  return (
    <View className="pt-10">
      <FlatList
        data={doctors}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <DoctorListItem id={item.id} name={item.name} image={item.image} speciality={item.speciality}/>
        )}
      />
    </View>
  );
};

export default Search ;
