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
      <TouchableHighlight
            style={styles.button}
            onPress={() => { navigate('Boards') }}>
            <Text style={styles.buttonText}>Your boards</Text>
        </TouchableHighlight>
    </View>
  );
};

export default Main;

