import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';

const stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
    <stack.Navigator>
      
      <stack.Screen name="Home" component={HomeScreen}/>

    </stack.Navigator>
    </NavigationContainer>
  );
}
