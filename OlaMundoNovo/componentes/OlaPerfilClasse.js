import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class OlaPerfilClasse extends Component {
  render() {
    const { nome, endereco, telefone } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Componente de Classe</Text>
        <Text>Nome: {nome}</Text>
        <Text>Endereço: {endereco}</Text>
        <Text>Telefone: {telefone}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    backgroundColor: "#ffecb3",
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
});

export default OlaPerfilClasse;
