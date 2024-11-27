import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import data from '../../resources/data.json';
import styles from './styles';


const Home = ({ navigation }) => {
  const [boards, setBoards] = useState(data.boards);

  // Handle edit action
  const handleEdit = (board) => {
    Alert.prompt(
      "Edit Board",
      `Enter a new name for "${board.name}"`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Save",
          onPress: (newName) => {
            if (newName) {
              setBoards((prevBoards) =>
                prevBoards.map((b) =>
                  b.id === board.id ? { ...b, name: newName } : b
                )
              );
            }
          },
        },
      ],
      "plain-text",
      board.name
    );
  };

  // Handle delete action
  const handleDelete = (board) => {
    Alert.alert(
      "Delete Board",
      `Are you sure you want to delete "${board.name}"?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            setBoards((prevBoards) =>
              prevBoards.filter((b) => b.id !== board.id)
            );
          },
        },
      ]
    );
  };

  const renderBoard = ({ item }) => (
    <TouchableOpacity
      style={styles.boardContainer}
      onPress={() => navigation.navigate('BoardDetails', { boardId: item.id })}
      onLongPress={() =>
        Alert.alert(
          "Board Actions",
          `What would you like to do with "${item.name}"?`,
          [
            {
              text: "Cancel",
              style: "cancel",
            },
            {
              text: "Edit",
              onPress: () => handleEdit(item),
            },
            {
              text: "Delete",
              style: "destructive",
              onPress: () => handleDelete(item),
            },
          ]
        )
      }
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


