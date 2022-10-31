import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';

export default function App() {
  const [valueA, setValueA] = useState(1)
  const [valueB, setValueB] = useState(1)
  const [result, setResult] = useState(0)

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput value={valueA} style={styles.inputtext} onChangeText={e => (setValueA(e))} placeholder='inputA'></TextInput>
      <TextInput value={valueB} style={styles.inputtext} onChangeText={e => (setValueB(e))} placeholder='inputB'></TextInput>
      <View style={styles.viewbutton}>
        <Button style={styles.buttonhandle} title="  +  " onPress={() => { setResult(Number.parseInt(valueA) + Number.parseInt(valueB)) }}>
        </Button>
        <Button style={styles.buttonhandle} title='  -  ' onPress={() => { setResult(Number.parseInt(valueA) - Number.parseInt(valueB)) }}></Button>
        <Button style={styles.buttonhandle} title='  *  ' onPress={() => { setResult(Number.parseInt(valueA) * Number.parseInt(valueB)) }}></Button>
        <Button style={styles.buttonhandle} title='  /  ' onPress={() => { setResult(Number.parseInt(valueA) / Number.parseInt(valueB)) }}></Button>
      </View>

      <Text style={styles.result}>{result}</Text>
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
    width: 250,
    height: 40,
    borderWidth: 1,
    margin: 5,
  },
  viewbutton:{
    width: "60%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  result: {
    fontSize: 18,
    color: "red"
  }, 
 
});
