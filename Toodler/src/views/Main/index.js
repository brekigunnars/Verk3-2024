import React from 'react';
import { View, Text, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import logo from '../../resources/logo.png';
import { useTheme } from '../../context/ThemeContext'; // Import useTheme
import styles from './styles';

const Main = ({ navigation: { navigate } }) => {
  const { toggleTheme, theme } = useTheme(); // Access toggleTheme and theme from context

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Logo with a white background */}
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      
      <TouchableHighlight
        style={[styles.button, { backgroundColor: theme.buttonBackground, borderColor: theme.text }]}
        onPress={() => navigate('Home')}
      >
        <Text style={[styles.buttonText, { color: theme.buttonText }]}>
          Click here to go to your boards!
        </Text>
      </TouchableHighlight>

      {/* Add a Toggle Dark Theme Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.buttonBackground, borderColor: theme.text }]}
        onPress={toggleTheme}
      >
        <Text style={[styles.buttonText, { color: theme.buttonText }]}>
          Toggle Dark Theme
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;
