// RestaurantDetailScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const RestaurantDetailScreen = ({ route }) => {
  const { name, address, rating, reviews } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>{name}</Text>
      <Text>{address}</Text>
      <Text>{rating} stars ({reviews} reviews)</Text>
      {/* Add more details as needed */}
    </View>
  );
};

export default RestaurantDetailScreen;