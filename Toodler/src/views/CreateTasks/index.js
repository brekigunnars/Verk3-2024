import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import styles from './styles';
import { TasksContext } from '../../context/TasksContext';

const CreateTask = ({ route, navigation }) => {
  const { listId } = route.params;
  const { addTask } = useContext(TasksContext);
  const [taskName, setTaskName] = useState('');
  const [color, setColor] = useState('#ffffff');

  const handleCreateTask = () => {
    if (!taskName.trim()) {
      Alert.alert('Error', 'Task name cannot be empty!');
      return;
    }

    const newTask = {
      id: Date.now(),
      name: taskName,
      color: color,
      listId: listId,
      description: '', // Add a description field if needed
      isFinished: false, // Initialize the task status
    };

    addTask(newTask);
    Alert.alert('Success', 'Task created successfully!');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Task Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter task name"
        value={taskName}
        onChangeText={setTaskName}
      />

      <Text style={styles.label}>Color</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter color (e.g., #ff0000)"
        value={color}
        onChangeText={setColor}
      />

      <TouchableOpacity onPress={handleCreateTask} style={styles.createButton}>
        <Text style={styles.createButtonText}>Create Task</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateTask;
