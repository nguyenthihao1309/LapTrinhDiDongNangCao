import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import Screen1a from './app/pages/Screen1a';
import Screen1b from './app/pages/Screen1b';
import Screen1c from './app/pages/Screen1c';
import Screen1d from './app/pages/Screen1d';
import Screen1e from './app/pages/Screen1e';
import Tiki from './app/pages/Tiki';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
   
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Tiki' component={Tiki}/>
      <Stack.Screen name='Screen1a' component={Screen1a}/>
      <Stack.Screen name='Screen1b' component={Screen1b}/>
      <Stack.Screen name='Screen1c' component={Screen1c}/>
      <Stack.Screen name='Screen1d' component={Screen1d}/>
      <Stack.Screen name='Screen1e' component={Screen1e}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
