import { StyleSheet } from 'react-native';
import { graniteGray } from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    listContainer: {
      marginBottom: 10,
      padding: 10,
      backgroundColor: 'blue',
      borderRadius: 5,
    },
    listName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    addButtonText: {
      fontSize: 30,
      color: 'black', // Simple black "+" sign with no background
      fontWeight: 'bold',
    },
  });
  
  
export default styles;