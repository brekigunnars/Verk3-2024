import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import data from '../../resources/data.json'; // Load tasks from JSON
import styles from './styles';


const Tasks = ({ route }) => {
  const { listId, listName } = route.params; // Retrieve listId and listName
  const tasks = data.tasks.filter((task) => task.listId === listId); // Filter tasks by listId

  // Render a single task
  const renderTask = ({ item }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskName}>{item.name}</Text>
      <Text style={styles.taskDescription}>{item.description}</Text>
      <Text style={styles.taskStatus}>
        Status: {item.isFinished ? 'Finished' : 'Not Finished'}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{listName} Tasks</Text>
      {tasks.length > 0 ? (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderTask}
        />
      ) : (
        <Text style={styles.noTasksText}>No tasks available for this list.</Text>
      )}
    </View>
  );
};

export default Tasks;

