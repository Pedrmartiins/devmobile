import React from "react";
import { View, StyleSheet } from "react-native";
import OlaPerfilFuncao from "./componentes/OlaPerfilFuncao";
import OlaPerfilClasse from "./componentes/OlaPerfilClasse";

export default function App() {
  return (
    <View style={styles.container}>
      <OlaPerfilFuncao nome="Pedro" endereco="Rua A, 123" telefone="(11) 99999-9999" />
      <OlaPerfilClasse nome="Maria" endereco="Rua B, 456" telefone="(22) 98888-8888" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
});