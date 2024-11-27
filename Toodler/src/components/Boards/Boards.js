import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import List from '../Lists/Lists';
import data from '../../resources/data.json';

const Board = ({ board }) => {
    const lists = data.lists.filter((list) => list.boardId === board.id);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{board.name}</Text>
            <FlatList
                data={lists}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                renderItem={({ item}) => <List list={item} />}
                contentContainerStyle={styles.listsContainer}
            />
        </View>
    );
};

export default Board;

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        paddingHorizontal: 10,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },
});