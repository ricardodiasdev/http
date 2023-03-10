import { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import api from "./src/services/api";

import Filme from "./src/components/Filme";

export default function App() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("r-api/?api=filmes");
      setFilmes(response.data);
    }
    loadFilmes();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Filme data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
