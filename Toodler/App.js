import React from 'react';
import { ThemeProvider } from './src/context/ThemeContext'; // Import ThemeProvider
import { BoardsProvider } from './src/context/BoardsContext';
import { ListsProvider } from './src/context/ListsContext';
import { TasksProvider } from './src/context/TasksContext';
import Routes from './src/routes';

const App = () => {
  return (
    <ThemeProvider>
      <BoardsProvider>
        <ListsProvider>
          <TasksProvider>
            <Routes />
          </TasksProvider>
        </ListsProvider>
      </BoardsProvider>
    </ThemeProvider>
  );
};

export default App;
