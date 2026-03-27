import { router } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface PokeCardsProps {
  name: string;
  url: string;
}

const PokemonCard = ({ name, url }: PokeCardsProps) => {
  const pokemonId = url.split("/").filter(Boolean).pop();
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
  return (
    <Pressable onPress={() => router.push(`/pokemon/${name}` as any)}>
      <View style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.pokemonImage} />

        <Text style={styles.pokemonName}>{name}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    margin: 5,
  },
  pokemonImage: {
    // Dimensiones solicitadas
    width: 100,
    height: 100,
    resizeMode: "contain", // Asegura que la imagen no se corte
  },
  pokemonName: {
    fontSize: 16,
    fontWeight: "600",
    textTransform: "capitalize",
  },
});

export default PokemonCard;
