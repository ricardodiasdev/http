import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Filme = ({ data }) => {
  let { nome, sinopse, foto } = data;

  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.nome}>{nome}</Text>
        <Image
          style={styles.imagem}
          source={{ uri: foto }}
          resizeMode="cover"
        />
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Leia mais</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "#000",
    backgroundColor: "##FFF",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    margin: 15,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3,
  },
  nome: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    padding: 15,
  },
  sinopse: {
    fontSize: 12,
    textAlign: "justify",
    color: "black",
    padding: 10,
  },
  imagem: {
    height: 250,
    zIndex: 2,
    margin: 5
  },
  btnArea: {
    alignItems: "flex-end",
    marginTop: -45,
    zIndex: 9,
    margin: 7,
  },
  btn: {
    width: 100,
    backgroundColor: "#09A6FF",
    opacity: 1,
    padding: 8,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    marginBottom: -5

  },
  btnText: {
    textAlign: "center",
    color: "#fff",
  },
});

export default Filme;
