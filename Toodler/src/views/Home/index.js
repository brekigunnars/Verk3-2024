import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Modal,
  TextInput,
  Button,
} from 'react-native';
import { BoardsContext } from '../../context/BoardsContext';
import styles from './styles';
import * as ImagePicker from 'expo-image-picker';

const Home = ({ navigation }) => {
  const { boards, setBoards } = useContext(BoardsContext);
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editingBoard, setEditingBoard] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedImageUri, setEditedImageUri] = useState(null);

  // Handle edit action
  const handleEdit = (board) => {
    setEditingBoard(board);
    setEditedName(board.name);
    setEditedImageUri(board.thumbnailPhoto);
    setIsModalVisible(true);
  };
  // Handle save changes
  const handleSaveChanges = () => {
    const updatedBoard = {
      ...editingBoard,
      name: editedName,
      thumbnailPhoto: editedImageUri,
    };

    const updatedBoards = boards.map((b) =>
      b.id === editingBoard.id ? updatedBoard : b
    );

    setBoards(updatedBoards);
    setIsModalVisible(false);
    setEditingBoard(null);
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
      onPress={() => navigation.navigate('Board', {
        boardId: item.id, // Pass the boardId
        boardName: item.name, // Optional: For setting the title
      })}
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
          ],
          { cancelable: true }
        )
      }
    >
      {item.thumbnailPhoto ? (
        <Image source={{ uri: item.thumbnailPhoto }} style={styles.thumbnail} />
      ) : (
        <View style={styles.placeholder}>
          <Text>No Image</Text>
        </View>
      )}
      <Text style={styles.boardName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const pickImage = async () => {
    console.log('called')
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need media library permissions to make this work!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // Updated per deprecation
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setEditedImageUri(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={boards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderBoard}
      />
      <Modal
        transparent={true}
        animationType="slide"
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Edit Board</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter board name"
              value={editedName}
              onChangeText={setEditedName}
            />
            <View style={styles.imagePickerContainer}>
              {editedImageUri ? (
                <Image source={{ uri: editedImageUri }} style={styles.image} />
              ) : (
                <View style={styles.placeholder}>
                  <Text>No Image Selected</Text>
                </View>
              )}
              <Button title="Change Image" onPress={pickImage} />
            </View>
            <View style={styles.modalButtonContainer}>
              <Button title="Cancel" onPress={() => setIsModalVisible(false)} />
              <Button
                title="Save"
                onPress={handleSaveChanges}
                disabled={!editedName.trim()}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Home;


