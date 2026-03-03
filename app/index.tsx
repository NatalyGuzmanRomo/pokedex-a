import { useEffect, useState } from "react";
import { View } from "react-native";

export default function Index() {
  const [results, setResults] = useState<any[]>([]);
  useEffect(() => {
    console.log("Entre entre en pantalla");
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
    <View>
      <ul>
        {results.map((item) => {
          return <li key={item.name}> {item.name} </li>;
        })}
      </ul>
    </View>
  );
}
