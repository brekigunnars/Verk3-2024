import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import data from '../resources/data.json';

export const BoardsContext = createContext();

export const BoardsProvider = ({ children }) => {
    const [boards, setBoards] = useState([]);
  
    // Load boards from AsyncStorage on component mount
    useEffect(() => {
        const loadBoards = async () => {
          try {
            const storedBoards = await AsyncStorage.getItem('boards');
            if (storedBoards !== null) {
              // Use stored data
              console.log('Boards loaded from AsyncStorage:', storedBoards);
              setBoards(JSON.parse(storedBoards));
            } else {
              // Initialize with data.json
              console.log('No boards in AsyncStorage, initializing with data.json');
              setBoards(data.boards);
            }
          } catch (error) {
            console.log('Error loading boards from AsyncStorage:', error);
            // Initialize with data.json in case of error
            setBoards(data.boards);
          }
        };
      
        loadBoards();
      }, []);
  
    // Save boards to AsyncStorage whenever they change
    useEffect(() => {
        const saveBoards = async () => {
          try {
            await AsyncStorage.setItem('boards', JSON.stringify(boards));
            console.log('Boards saved to AsyncStorage:', boards);
          } catch (error) {
            console.log('Error saving boards to AsyncStorage:', error);
          }
        };
      
        if (boards.length > 0) {
          saveBoards();
        }
      }, [boards]);
  
    return (
      <BoardsContext.Provider value={{ boards, setBoards }}>
        {children}
      </BoardsContext.Provider>
    );
  };