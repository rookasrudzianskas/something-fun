import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useRouter} from "expo-router";
import { Searchbar } from 'react-native-paper';

export default function Page() {
  const router = useRouter();
  return (
    <View>
      <SearchBar placeholder={'Search'} />
      <TouchableOpacity onPress={() => router.push('/search')}>
        <Text>Search Doctor</Text>
      </TouchableOpacity>
    </View>
  );
}

