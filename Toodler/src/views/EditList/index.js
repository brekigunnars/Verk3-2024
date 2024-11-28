import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { ListsContext } from '../../context/ListsContext';
import styles from './styles';

const EditList = ({ route, navigation }) => {
  const { list } = route.params; // Get the list passed from navigation
  const { lists, setLists } = useContext(ListsContext); // Access lists and setLists from context

  const [listName, setListName] = useState(list.name);
  const [listColor, setListColor] = useState(list.color);

  const handleSaveChanges = () => {
    if (!listName.trim()) {
      Alert.alert('Error', 'List name cannot be empty!');
      return;
    }

    const updatedList = {
      ...list,
      name: listName,
      color: listColor,
    };

    // Update the lists state
    const updatedLists = lists.map((l) =>
      l.id === list.id ? updatedList : l
    );

    setLists(updatedLists); // Update the context
    navigation.goBack(); // Navigate back after saving
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Edit List Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter list name"
        value={listName}
        onChangeText={setListName}
      />
      <Text style={styles.label}>Edit List Color:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter list color (e.g., #ff0000)"
        value={listColor}
        onChangeText={setListColor}
      />
      <Button
        title="Save Changes"
        onPress={handleSaveChanges}
        disabled={!listName.trim()}
      />
    </View>
  );
};

export default EditList;
