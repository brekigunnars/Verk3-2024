import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { BoardsContext } from '../../context/BoardsContext';
import styles from './styles';

const CreateBoard = ({ navigation }) => {
  const [boardName, setBoardName] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const { boards, setBoards } = useContext(BoardsContext);

  const handleCreateBoard = () => {
    const newBoard = {
      id: Date.now(),
      name: boardName,
      thumbnailPhoto: imageUri,
    };
    setBoards([...boards, newBoard]);
    navigation.navigate('Home');
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need media library permissions to make this work!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Board Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter board name"
        value={boardName}
        onChangeText={setBoardName}
      />
      <View style={styles.imagePickerContainer}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <View style={styles.placeholder}>
            <Text>No Image Selected</Text>
          </View>
        )}
        <Button title="Pick an Image" onPress={pickImage} />
      </View>
      <Button
        title="Create Board"
        onPress={handleCreateBoard}
        disabled={!boardName.trim()}
      />
    </View>
  );
};

export default CreateBoard;

