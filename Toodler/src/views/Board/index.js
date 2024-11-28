import React, { useContext, useLayoutEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { ListsContext } from '../../context/ListsContext';
import styles from './styles';

const Board = ({ route, navigation }) => {
  const { boardId } = route.params; // Board ID
  const { lists } = useContext(ListsContext); // Get lists from context

  const boardLists = lists.filter((list) => list.boardId === boardId); // Filter lists by boardId

  // Add the "+" button to the top-right corner of the screen
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('CreateList', { boardId })} // Navigate to CreateList
          style={{ marginRight: 15 }}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  // Render a single list
  const renderList = ({ item }) => (
    <TouchableOpacity
      style={styles.listContainer}
      onPress={() =>
        navigation.navigate('Tasks', { listId: item.id, listName: item.name })
      }
    >
      <Text style={[styles.listName, { color: item.color }]}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lists</Text>
      <FlatList
        data={boardLists}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderList}
      />
    </View>
  );
};

export default Board;

