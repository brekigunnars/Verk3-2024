import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { ListsContext } from '../../context/ListsContext';
import styles from './styles';

const EditList = ({ route, navigation }) => {
    const { list } = route.params;
    const [listName, setListName] = useState(list.name);
    const { lists, setLists } = useContext(ListsContext);

    const handleSaveChanges = () => {
        const updateList = {
            ...list,
            name: listName
        };

        const updateLists = lists.map((l) =>
            l.id === list.id ? updateList : l
        );

        setLists(updateLists);
        navigation.goBack();
    };



    return (
        <View style={styles.container}>
          <Text style={styles.label}>Edit List Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter List name"
            value={listName}
            onChangeText={setListName}
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