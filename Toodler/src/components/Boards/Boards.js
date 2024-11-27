import React from 'react';
import { View, Text, FlatList } from 'react-native';
import data from '../../resources/data.json';
import styles from './styles';

const Board = ({ route }) => {
  const { boardId } = route.params;
  const lists = data.lists.filter((list) => list.boardId === boardId);

  const renderTask = ({ item }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskName}>{item.name}</Text>
    </View>
  );

  const renderList = ({ item }) => (
    <View style={styles.listContainer}>
      <Text style={styles.listName}>{item.name}</Text>
      <FlatList
        data={data.tasks.filter((task) => task.listId === item.id)}
        keyExtractor={(task) => task.id.toString()}
        renderItem={renderTask}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={lists}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderList}
      />
    </View>
  );
};

export default Board;