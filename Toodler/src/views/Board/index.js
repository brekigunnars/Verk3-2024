import React, { useContext, useLayoutEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { ListsContext } from '../../context/ListsContext';
import styles from './styles';

const Board = ({ route, navigation }) => {
  const { boardId } = route.params; // Get the board ID passed via navigation
  const { lists, setLists } = useContext(ListsContext); // Access lists and setLists from context

  // Filter lists for the current board
  const boardLists = lists.filter((list) => list.boardId === boardId);

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

  // Handle deleting a list
  const handleDelete = (list) => {
    Alert.alert(
      "Delete List",
      `Are you sure you want to delete "${list.name}"? All associated tasks will be removed.`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            setLists((prevLists) =>
              prevLists.filter((l) => l.id !== list.id)
            );
          },
        },
      ]
    );
  };

  const renderList = ({ item }) => (
    <TouchableOpacity
      style={[styles.listContainer, { backgroundColor: item.color }]} // Apply the color as the background
      onPress={() =>
        navigation.navigate('Tasks', { listId: item.id, listName: item.name }) // Navigate to Tasks
      }
      onLongPress={() =>
        Alert.alert(
          "List Actions",
          `What would you like to do with "${item.name}"?`,
          [
            { text: "Cancel", style: "cancel" },
            {
              text: "Edit",
              onPress: () =>
                navigation.navigate('EditList', {
                  list: item, // Pass the list to EditList
                }),
            },
            { text: "Delete", style: "destructive", onPress: () => handleDelete(item) },
          ]
        )
      }
    >
      <Text style={styles.listName}>{item.name}</Text>
    </TouchableOpacity>
  );
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lists</Text>
      <FlatList
        data={boardLists} // Only lists for the current board
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderList}
      />
    </View>
  );
};

export default Board;
