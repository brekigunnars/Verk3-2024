import React from 'react';
import Routes from './src/routes';
import { BoardsProvider } from './src/context/BoardsContext';

export default function App() {
  return (
    <BoardsProvider>
      <Routes />
    </BoardsProvider>
  );
}