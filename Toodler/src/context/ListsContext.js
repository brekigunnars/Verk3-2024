import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import data from '../resources/data.json';

export const ListsContext = createContext();

export const ListsProvider = ({ children }) => {
  const [lists, setLists] = useState([]);

  // Load lists from AsyncStorage on component mount
  useEffect(() => {
    const loadLists = async () => {
      try {
        const storedLists = await AsyncStorage.getItem('lists');
        if (storedLists !== null) {
          console.log('Lists loaded from AsyncStorage:', storedLists);
          setLists(JSON.parse(storedLists));
        } else {
          console.log('No lists in AsyncStorage, initializing with data.json');
          setLists(data.lists);
        }
      } catch (error) {
        console.error('Error loading lists from AsyncStorage:', error);
        setLists(data.lists); // Initialize with data.json if an error occurs
      }
    };

    loadLists();
  }, []);

  // Save lists to AsyncStorage whenever they change
  useEffect(() => {
    const saveLists = async () => {
      try {
        await AsyncStorage.setItem('lists', JSON.stringify(lists));
        console.log('Lists saved to AsyncStorage:', lists);
      } catch (error) {
        console.error('Error saving lists to AsyncStorage:', error);
      }
    };

    saveLists();
  }, [lists]);

  // Function to add a new list
  const addList = (newList) => {
    setLists((prevLists) => [...prevLists, newList]);
  };

  return (
    <ListsContext.Provider value={{ lists, addList }}>
      {children}
    </ListsContext.Provider>
  );
};
