import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import PokemonCard from "../components/PokemonCard";

export default function Index() {
  const [results, setResults] = useState<any[]>([]);
  useEffect(() => {
    console.log("Entre en pantalla");
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
    const response = await fetch(URL, {
      method: "GET",
    });
    console.log(response);
    const data = await response.json();
    console.log(data.results);
    setResults(data.results);
  };
  return (
    <ScrollView>
      <View>
        {results.map((poke) => {
          return (
            <PokemonCard key={poke.name} name={poke.name} url={poke.url} />
          );
        })}
      </View>
    </ScrollView>
  );
}
