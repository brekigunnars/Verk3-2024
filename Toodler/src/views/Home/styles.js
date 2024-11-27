import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  boardContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  thumbnail: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  placeholder: {
    width: 200,
    height: 200,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  boardName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;