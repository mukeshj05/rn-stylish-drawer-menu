import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home.screen';
import CardScreen from '../screens/Card.screen';

const Stack = createNativeStackNavigator();

const HomeNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CardScreen" component={CardScreen} />
    </Stack.Navigator>
  );
};

export default HomeNav;
