import React from 'react';
import { TasksProvider } from './src/context/TasksContext';
import { ListsProvider } from './src/context/ListsContext';
import { BoardsProvider } from './src/context/BoardsContext';
import Routes from './src/routes';

const App = () => {
  return (
    <BoardsProvider>
      <ListsProvider>
        <TasksProvider>
          <Routes />
        </TasksProvider>
      </ListsProvider>
    </BoardsProvider>
  );
};

export default App;