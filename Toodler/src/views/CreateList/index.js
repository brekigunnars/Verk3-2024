import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { ListsContext } from '../../context/ListsContext';
import styles from './styles';

const CreateList = ({ route, navigation }) => {
  const { boardId } = route.params; // Get the boardId to associate the list
  const { addList } = useContext(ListsContext); // Get the addList function from context
  const [listName, setListName] = useState('');
  const [color, setColor] = useState('#ffffff'); // Default color

  // Handle form submission
  const handleCreateList = () => {
    if (!listName.trim()) {
      Alert.alert('Error', 'List name cannot be empty!');
      return;
    }

    const newList = {
      id: lists.length > 0 ? lists[lists.length - 1].id + 1 : 1, // Generate a unique ID
      name: listName,
      color: color,
      boardId: boardId, // Associate with the correct board
    };

    addList(newList); // Add the new list to context
    Alert.alert('Success', 'List created successfully!');
    navigation.goBack(); // Navigate back to the Board screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>List Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter list name"
        value={listName}
        onChangeText={setListName}
      />

      <Text style={styles.label}>Color</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter color (e.g., #ff0000)"
        value={color}
        onChangeText={setColor}
      />

      <TouchableOpacity onPress={handleCreateList} style={styles.createButton}>
        <Text style={styles.createButtonText}>Create List</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateList;

