import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';

const stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
    <stack.Navigator>
      
      <stack.Screen name="Home" component={HomeScreen}/>
      <stack.Screen name="Restaurant" component={RestaurantScreen}/>

    </stack.Navigator>
    </NavigationContainer>
  );
}
