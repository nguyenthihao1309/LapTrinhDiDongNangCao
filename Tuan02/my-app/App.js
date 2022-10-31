import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('Hao')
  const [value, setValue] = useState('')
  function handleShow() {
    setName(value)
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <TextInput value={value} style={styles.inputtext} onChangeText={e => (setValue(e))} placeholder='textInput'></TextInput>
      <Button title='Show' onPress={handleShow}></Button>
      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputtext: {
    width: 150,
    height: 40,
    borderWidth: 1,
  },
});
