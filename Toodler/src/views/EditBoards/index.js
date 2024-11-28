import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { BoardsContext } from '../../context/BoardsContext';
import styles from '../EditBoards/styles';

const EditBoard = ({ route, navigation }) => {
    const { board } = route.params;
    const [boardName, setBoardName] = useState(board.name);
    const [imageUri, setImageUri] = useState(board.thumbnailPhoto);
    const { boards, setBoards } = useContext(BoardsContext);

    const handleSaveChanges = () => {
        const updateBoard = {
            ...board,
            name: boardName,
            thumbnailPhoto: imageUri,
        };

        const updateBoards = boards.map((b) =>
            b.id === board.id ? updateBoard : b
        );

        setBoards(updateBoards);
        navigation.goBack();
    };

    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Sorry, we need media library permission to make this work!');
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
          <Text style={styles.label}>Edit Board Name:</Text>
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
            <Button title="Change Image" onPress={pickImage} />
          </View>
          <Button
            title="Save Changes"
            onPress={handleSaveChanges}
            disabled={!boardName.trim()}
          />
        </View>
      );
};

export default EditBoard;