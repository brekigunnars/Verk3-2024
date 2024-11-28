import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import data from '../resources/data.json';
import { Alert } from 'react-native';

// Create the context
export const TasksContext = createContext();

// Context provider component
export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Load tasks from AsyncStorage or data.json on component mount
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem('tasks');
        if (storedTasks !== null) {
          console.log('Tasks loaded from AsyncStorage:', storedTasks);
          setTasks(JSON.parse(storedTasks));
        } else {
          console.log('No tasks in AsyncStorage, initializing with data.json');
          setTasks(data.tasks);
        }
      } catch (error) {
        console.error('Error loading tasks from AsyncStorage:', error);
        Alert.alert('Error', 'Failed to load tasks.');
        setTasks(data.tasks);
      }
    };

    loadTasks();
  }, []);

  // Save tasks to AsyncStorage whenever they change
  useEffect(() => {
    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
        console.log('Tasks saved to AsyncStorage:', tasks);
      } catch (error) {
        console.error('Error saving tasks to AsyncStorage:', error);
        Alert.alert('Error', 'Failed to save tasks.');
      }
    };

    saveTasks();
  }, [tasks]);

  // Function to add a new task
  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  // Function to edit a task
  const editTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, deleteTask, editTask }}>
      {children}
    </TasksContext.Provider>
  );
};