import React from 'react';
import { View, Text, Image } from 'react-native';
import logo from '../../resources/logo.png';
import styles from './styles';

const Main = () => (
  <View>
    <Image source={logo} style={styles.logo} />
    <Text>The most powerful Kanban application!</Text>
  </View>
);

export default Main;
