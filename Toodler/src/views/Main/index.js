import React from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet, FlatList } from 'react-native';
import logo from '../../resources/logo.png';
import styles from './styles';


const Main = ({ navigation: { navigate } }) => (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <TouchableHighlight
            style={styles.button}
            onPress={() => { navigate('Home') }}>
            <Text style={styles.buttonText}>Click here to go your boards!</Text>
      </TouchableHighlight>
    </View>
  );
;


export default Main;

