import React from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet, FlatList } from 'react-native';
import logo from '../../resources/logo.png';
import styles from './styles';


const Main = ({ navigation: { navigate } }) => (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.paragraph}>The most powerful Kanban application!</Text>
      <TouchableHighlight
            style={styles.button}
            onPress={() => { navigate('Home') }}>
            <Text style={styles.buttonText}>Your boards</Text>
      </TouchableHighlight>
    </View>
  );
;


export default Main;

