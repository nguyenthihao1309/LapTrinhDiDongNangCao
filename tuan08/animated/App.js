import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './app/Components/Main';
import Cau02 from './app/Components/Cau02';
import Cau03 from './app/Components/Cau03';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cau03" component={Cau03} />
        {/* <Stack.Screen name="Cau02" component={Cau02} /> */}
        {/* <Stack.Screen name="Main" component={Main} /> */}
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
