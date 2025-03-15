import React from "react";
import { View, Text, StyleSheet } from "react-native";

const OlaPerfilFuncao = ({ nome, endereco, telefone }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Componente Funcional</Text>
      <Text>Nome: {nome}</Text>
      <Text>Endereço: {endereco}</Text>
      <Text>Telefone: {telefone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    backgroundColor: "#e0f7fa",
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
});

export default OlaPerfilFuncao;
