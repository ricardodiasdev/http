import { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from "react-native";
import api from "./src/services/api";

import Filme from "./src/components/Filme";

export default function App() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("r-api/?api=filmes");
      setFilmes(response.data);
      setLoading(false);
    }
    loadFilmes();
  }, []);

  return (
    <>
      {loading ? (
        <View style={styles.container}>
          <ActivityIndicator color="#09A6FF" size={40}/>
        </View>
      ) : (
        <View style={styles.container}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={filmes}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Filme data={item} />}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
