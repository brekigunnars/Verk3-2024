import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import styles from './styles';
import data from '../../resources/data.json';
import Board from '../../components/Boards/Boards';

const Boards = () => {
    const boards = data.boards;
    
    return (
      <View style={styles.container}>
        <FlatList
          data={boards}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Board board={item} />}
        />
      </View>
    );
  };

  export default Boards;