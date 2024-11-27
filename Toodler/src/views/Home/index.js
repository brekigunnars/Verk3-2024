import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import data from '../../resources/data.json';
import styles from './styles';

const Home = ({ navigation }) => {
  const boards = data.boards;

  const renderBoard = ({ item }) => (
    <TouchableOpacity
      style={styles.boardContainer}
      onPress={() => navigation.navigate('Boards', { boardId: item.id })}
    >
      <Image source={{ uri: item.thumbnailPhoto }} style={styles.thumbnail} />
      <Text style={styles.boardName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={boards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderBoard}
      />
    </View>
  );
};

export default Home;


