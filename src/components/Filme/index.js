import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Filme = ({ data }) => {
  let { nome, sinopse, foto } = data;
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{nome}</Text>
      <Image style={styles.imagem} source={{ uri: foto }} resizeMode="cover" />
      <Text style={styles.sinopse}>{sinopse}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  nome: {
    marginTop: 15,
    fontSize: 22,
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  },
  sinopse: {
    fontSize: 12,
    textAlign: "justify",
    color: "black",
    padding: 10,
  },
  imagem: {
    flex: 1,
    height: 400,
    alignItems: "center",
  },
});

export default Filme;
