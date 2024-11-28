import React, { useContext, useState, useLayoutEffect } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  TouchableOpacity, 
  Alert 
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // If you're using hooks
import styles from './styles';
import { TasksContext } from '../../context/TasksContext';


const Tasks = ({ route }) => {
  const navigation = useNavigation();
  const { listId, listName } = route.params; // Retrieve listId and listName
  
  const { tasks, setTasks } = useContext(TasksContext);
  const [editingTask, setEditingTask] = useState(null);
  const [editedName, setEditedName] = useState('');

  // Filter tasks based on listId
  const filteredTasks = tasks.filter((task) => task.listId === listId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('CreateTask', { listId })} // Navigate to CreateList
          style={{ marginRight: 15 }}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const handleEdit = (task) => {
    setEditingTask(task);
    setEditedName(task.name);
  }

  const handleSaveChanges = () => {
    const updatedTask = {
      ...editingTask,
      name: editedName,
    };

    const updatedTasks = tasks.map((t) =>
    t.id === editingTask.id ? updatedTask : t
  );

  setTasks(updatedTasks);
  setEditingTask(null);
  };

  const handleDelete = (task) => {
    Alert.alert(
      "Delete Task",
      `Are you sure you want to delete "${task.name}"?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            setTasks((prevTasks) =>
              prevTasks.filter((t) => t.id !== task.id)
            );
          },
        },
      ]
    );
  }

  // Render a single task
   const renderTask = ({ item }) => (
    <TouchableOpacity
      style={styles.taskContainer}
      onLongPress={() =>
        Alert.alert(
          "Task Actions",
          `What would you like to do with "${item.name}"?`,
          [
            {
              text: "Cancel",
              style: "cancel",
            },
            {
              text: "Edit",
              onPress: () => handleEdit(item),
            },
            {
              text: "Delete",
              style: "destructive",
              onPress: () => handleDelete(item),
            },
          ],
          { cancelable: true }
        )
      }
    >
      <Text style={styles.taskName}>{item.name}</Text>
      <Text style={styles.taskDescription}>{item.description}</Text>
      <Text style={styles.taskStatus}>
        Status: {item.isFinished ? 'Finished' : 'Not Finished'}
      </Text>
    </TouchableOpacity>
  );
    

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{listName} Tasks</Text>
      {tasks.length > 0 ? (
        <FlatList
          data={filteredTasks}
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

