import React from 'react';
import { ListsProvider } from './src/context/ListsContext';
import { BoardsProvider } from './src/context/BoardsContext';
import Routes from './src/routes';

const App = () => {
  return (
    <BoardsProvider>
      <ListsProvider>
        <Routes />
      </ListsProvider>
    </BoardsProvider>
  );
};

export default App;