import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { TasksContext } from '../../context/TasksContext';
import styles from './styles';

const EditTask = ({ route, navigation }) => {
    const { taskId } = route.params; // Receive taskId from navigation
    const { tasks, editTask } = useContext(TasksContext); // Use editTask from context
    const [task, setTask] = useState(null);
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    useEffect(() => {
        // Find the task by taskId
        const currentTask = tasks.find(t => t.id === taskId);
        if (currentTask) {
            setTask(currentTask);
            setTaskName(currentTask.name);
        } else {
            Alert.alert('Error', 'Task not found.');
            navigation.goBack();
        }
    }, [taskId, tasks]);

    const handleSaveChanges = () => {
        if (!task) return;

        const updatedTask = {
            ...task,
            name: taskName.trim(),
            description: taskDescription.trim(),
        };

        editTask(updatedTask); // Use context function to update task
        Alert.alert('Success', 'Task updated successfully!')
        navigation.goBack();
    };



    return (
        <View style={styles.container}>
          <Text style={styles.label}>Edit Task Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Task name"
            value={taskName}
            onChangeText={setTaskName}
          />

          <Text style={styles.label}>Edit Description:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Task description"
            value={taskDescription}
            onChangeText={setTaskDescription}
            multiline
            numberOfLines={4}
          />
          
          <TouchableOpacity 
                onPress={handleSaveChanges} 
                style={styles.createButton} 
                disabled={!taskName.trim()}
            >
                <Text style={styles.createButtonText}>Save Changes</Text>
            </TouchableOpacity>
        </View>
      );
};

export default EditTask;