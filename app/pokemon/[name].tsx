import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function PokemonDynamicPage() {
  const params = useLocalSearchParams();
  return (
    <View>
      <Text>[name]</Text>
      <Text>{params.name}</Text>
    </View>
  );
}
