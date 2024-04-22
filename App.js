// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RestaurantListScreen from './RestaurantListScreen';
import RestaurantDetailScreen from './RestaurantDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RestaurantList">
        <Stack.Screen name="RestaurantList" component={RestaurantListScreen} options={{ title: 'Restaurant Finder' }} />
        <Stack.Screen name="RestaurantDetail" component={RestaurantDetailScreen} options={({ route }) => ({ title: route.params.name })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
