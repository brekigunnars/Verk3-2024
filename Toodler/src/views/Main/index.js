import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import logo from '../../resources/logo.png';
import Board from '../../components/Boards/Boards';
import data from '../../resources/data.json';

const Main = () => {
  const boards = data.boards;
  
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.headerText}>The most powerful Kanban application!</Text>
      <FlatList
        data={boards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Board board={item} />}
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  headerText: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 18,
  },
});