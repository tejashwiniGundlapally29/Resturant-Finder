// RestaurantListScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import mockData from './mockData.json';

const RestaurantListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetail', item)}>
      <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
        <Text>{item.address}</Text>
        <Text>{item.rating} stars ({item.reviews} reviews)</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={mockData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default RestaurantListScreen;