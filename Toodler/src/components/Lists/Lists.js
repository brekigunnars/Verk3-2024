import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import TaskItem from '../Tasks/Tasks';
import data from '../../resources/data.json';

const getTasksForList = (listId) => {
    return data.tasks.filter((task) => task.listId === listId);
};

const List = ({ list }) => {
    const tasks = getTasksForList(list.id);

    return (
        <View style={styles.container}>
            <Text style={styles.listTitle}>{list.name}</Text>
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id.toString()} // Ensure ID is a string
                renderItem={({ item }) => <TaskItem task={item} />}
                contentContainerStyle={styles.tasksContainer}
            />
        </View>
    );
};

export default List;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    listTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
});