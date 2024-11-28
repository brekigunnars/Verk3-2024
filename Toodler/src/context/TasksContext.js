import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import data from '../resources/data.json';
import { View } from 'react-native';
import CreateTask from '../views/CreateTasks';

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Load tasks from AsyncStorage on component mount
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
        console.log('Error loading tasks from AsyncStorage:', error);
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
        console.log('Error saving tasks to AsyncStorage:', error);
      }
    };

    if (tasks.length > 0) {
      saveTasks();
    }
  }, [tasks]);

  // Add this function
  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
        <TasksContext.Provider value={{ tasks, setTasks, addTask }}>
            {children}
        </TasksContext.Provider>
  );
};

export default CreateTask;