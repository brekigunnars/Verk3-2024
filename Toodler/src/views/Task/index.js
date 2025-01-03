import React, { useContext, useLayoutEffect, useState } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  TouchableOpacity, 
  Alert 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { TasksContext } from '../../context/TasksContext';
import { ListsContext } from '../../context/ListsContext';
import SelectListModal from '../../components/Lists/SelectListModal'; // Adjust the path accordingly

const Tasks = ({ route }) => {
  const navigation = useNavigation();
  const { listId, listName } = route.params; // Retrieve listId and listName
  
  const { tasks, deleteTask, editTask } = useContext(TasksContext); // Destructure editTask
  const { lists } = useContext(ListsContext); // Access lists
  
  const [modalVisible, setModalVisible] = useState(false);
  const [taskToMove, setTaskToMove] = useState(null);

  // Filter tasks based on listId
  const filteredTasks = tasks.filter((task) => task.listId === listId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('CreateTask', { listId })} // Navigate to CreateTask
          style={{ marginRight: 15 }}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, listId]);

  const handleEdit = (task) => {
    navigation.navigate('EditTask', { taskId: task.id });
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
            deleteTask(task.id);
            Alert.alert('Success', 'Task deleted successfully!');
          },
        },
      ]
    );
  }

  const toggleTaskCompletion = (task) => {
    const updatedTask = { ...task, isFinished: !task.isFinished };
    console.log('Toggling Task Completion:', updatedTask);
    editTask(updatedTask); // Use editTask from context
    Alert.alert(
      'Success',
      `Task marked as ${updatedTask.isFinished ? 'Finished' : 'Incomplete'}!`
    );
  }

  const handleMove = (task) => {
    setTaskToMove(task);
    setModalVisible(true);
  }

  const handleSelectList = (targetList) => {
    if (!taskToMove) return;
    const updatedTask = { ...taskToMove, listId: targetList.id };
    console.log('Moving Task:', updatedTask);
    editTask(updatedTask);
    Alert.alert(
      'Success',
      `Task moved to "${targetList.name}" successfully!`
    );
    setTaskToMove(null);
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
              text: item.isFinished ? "Mark as Incomplete" : "Mark as Finished",
              onPress: () => toggleTaskCompletion(item),
            },
            {
              text: "Move to Another List",
              onPress: () => handleMove(item),
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
      <Text style={[
        styles.taskName, 
        item.isFinished && styles.taskNameFinished
      ]}>
        {item.name}
      </Text>
      <Text style={styles.taskDescription}>{item.description}</Text>
      <Text style={styles.taskStatus}>
        Status: {item.isFinished ? 'Finished' : 'Not Finished'}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{listName} Tasks</Text>
      {filteredTasks.length > 0 ? ( // Use filteredTasks.length
        <FlatList
          data={filteredTasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderTask}
        />
      ) : (
        <Text style={styles.noTasksText}>No tasks available for this list.</Text>
      )}
      <SelectListModal 
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelect={handleSelectList}
        excludeListId={listId}
      />
    </View>
  );
};

export default Tasks;