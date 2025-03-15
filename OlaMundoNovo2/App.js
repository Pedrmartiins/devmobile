import React, { useState } from "react"; // Adicione a importação de useState
import { View, StyleSheet, TextInput, Button } from "react-native"; // Certifique-se de importar o Button também
import OlaPerfilFuncao from "./componentes/OlaPerfilFuncao";
import OlaPerfilClasse from "./componentes/OlaPerfilClasse";

export default function App() {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />
      <TextInput
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
        style={styles.input}
      />
      <TextInput
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        style={styles.input}
        keyboardType="phone-pad"
      />
      <Button title="Enviar" onPress={handleSubmit} />

      {submitted && (
        <>
         
          <OlaPerfilFuncao nome={nome} endereco={endereco} telefone={telefone} />
          
          
          <OlaPerfilClasse nome={nome} endereco={endereco} telefone={telefone} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
  },
});
