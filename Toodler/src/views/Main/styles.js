import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logoContainer: {
    backgroundColor: '#FFFFFF', // Fixed white background for the logo
    padding: 10,
    borderRadius: 10, // Optional: Add rounded corners
  },
  logo: {
    width: 200, // Adjust the size as needed
    height: 70,
    resizeMode: 'contain',
  },
  button: {
    marginTop: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default styles;
