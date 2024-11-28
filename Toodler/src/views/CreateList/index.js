import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Import Picker
import { ListsContext } from '../../context/ListsContext';
import styles from './styles';

const CreateList = ({ route, navigation }) => {
  const { boardId } = route.params; // Get the boardId to associate the list
  const { addList } = useContext(ListsContext); // Get the addList function from context
  const [listName, setListName] = useState('');
  const [color, setColor] = useState('#ffffff'); // Default color

  // Predefined color options
  const colorOptions = [
    { label: 'White', value: '#ffffff' },
    { label: 'Red', value: '#ff0000' },
    { label: 'Blue', value: '#0000ff' },
    { label: 'Green', value: '#00ff00' },
    { label: 'Yellow', value: '#ffff00' },
    { label: 'Purple', value: '#800080' },
  ];

  // Handle form submission
  const handleCreateList = () => {
    if (!listName.trim()) {
      Alert.alert('Error', 'List name cannot be empty!');
      return;
    }

    const newList = {
      id: Date.now(), // Generate a unique ID
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

      <Text style={styles.label}>Select Color</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={color}
          onValueChange={(value) => setColor(value)}
        >
          {colorOptions.map((option) => (
            <Picker.Item key={option.value} label={option.label} value={option.value} />
          ))}
        </Picker>
      </View>

      <TouchableOpacity onPress={handleCreateList} style={styles.createButton}>
        <Text style={styles.createButtonText}>Create List</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateList;
