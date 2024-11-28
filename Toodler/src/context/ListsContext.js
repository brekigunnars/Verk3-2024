import React, { createContext, useState, useEffect } from 'react';
import { Alert } from 'react-native';

// Create the context
export const ListsContext = createContext();

// Context provider component
export const ListsProvider = ({ children }) => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    // Load initial data from data.json or hardcoded data
    const loadData = async () => {
      try {
        const data = require('../resources/data.json'); // Adjust path as needed
        setLists(data.lists); // Initialize lists from data.json
      } catch (error) {
        console.error('Error loading lists:', error);
        Alert.alert('Error', 'Failed to load initial data.');
      }
    };

    loadData();
  }, []);

  // Function to add a new list
  const addList = (newList) => {
    setLists((prevLists) => [...prevLists, newList]);
  };

  return (
    <ListsContext.Provider value={{ lists, setLists, addList }}>
      {children}
    </ListsContext.Provider>
  );
};
