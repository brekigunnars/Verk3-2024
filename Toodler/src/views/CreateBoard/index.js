import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { BoardsContext } from '../../context/BoardsContext';

const CreateBoard = ({ navigation }) => {
  const [boardName, setBoardName] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const { boards, setBoards } = useContext(BoardsContext);

  const handleCreateBoard = () => {
    const newBoard = {
      id: boards.length > 0 ? boards[boards.length - 1].id + 1 : 1,
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 20,
  },
  imagePickerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  placeholder: {
    width: 200,
    height: 200,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
  },
});
