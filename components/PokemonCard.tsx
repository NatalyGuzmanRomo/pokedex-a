import React from "react";
import { Image, Text, View } from "react-native";

interface PokemonProps {
  name: string;
  url: string;
}

export default function PokemonCard({ name, url }: PokemonProps) {
  const segments = url.split("/");
  const id = segments.filter(Boolean).pop();
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <View>
      <Image
        source={{ uri: imageUrl }}
        style={{ width: 100, height: 100 }}
      ></Image>
      <Text>Nombre del pokemon: {name}</Text>
    </View>
  );
}
