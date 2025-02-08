import { StatusBar } from 'expo-status-bar';

import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';

export default function App() {
  const [text, settext] = useState('');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Meu App Expo</Text>
      </View>

      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite algo..."
        value={text}
        onChangeText={settext}
      />

      <Text style={styles.textOutput}>voce digitou: {text}</Text>
      <button 
        title="Pressione-me"
        onProgress={() => alert('Botao pressionado!')}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },

  header: {
    backgroundColor: '#6200ea',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },

  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginVertical: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },

  textOutput: {
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center',
  },
});
