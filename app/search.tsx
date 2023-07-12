//@ts-nocheck
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import {useNavigation} from "expo-router";
import DoctorListItem from "../src/components/DoctorListItem";
import doctors from '../data/doctors.json';

const Search = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFilteredDoctors(doctors.filter((doctor) => doctor.name.toLowerCase().includes(search.toLowerCase()) || doctor.speciality.toLowerCase().includes(search.toLowerCase())));
  }, [search]);

  // useEffect(() => {
  //   setLoading(true);
  //   ( async () => {
  //    const response = await fetch('https://64aef65cc85640541d4df695.mockapi.io/doctors');
  //    const data = await response.json();
  //    setFilteredDoctors(data);
  //     setLoading(false);
  //   })();
  // })

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: 'Search',
        onChangeText: (event) => setSearch(event.nativeEvent.text),
      }
    })
  }, [navigation]);
  //
  // if(loading) {
  //   return (
  //     <View className="w-full h-screen flex items-center justify-center">
  //       <ActivityIndicator />
  //     </View>
  //   )
  // }

  return (
    <View className="pt-10 flex-1">
      <FlatList
        style={{
          flex: 1,
        }}
        data={filteredDoctors}
        contentContainerStyle={{padding: 10}}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentInsetAdjustmentBehavior="automatic"
        renderItem={({item}) => (
          <DoctorListItem id={item.id} name={item.name} image={item.image} speciality={item.speciality}/>
        )}
      />
    </View>
  );
};

export default Search ;
