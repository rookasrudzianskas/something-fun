// @ts-nocheck
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useRouter} from "expo-router";
import { Searchbar } from 'react-native-paper';
import {useState} from "react";

export default function Page() {
  const router = useRouter();
  const [text, setText] = useState('');
  return (
    <View className="px-5">
      <TouchableOpacity activeOpacity={0.7} onPress={() => router.push('/search')} className="mt-7">
        <Searchbar placeholder={'Search'} value={text}  onChangeText={setText}/>
      </TouchableOpacity>
    </View>
  );
}

