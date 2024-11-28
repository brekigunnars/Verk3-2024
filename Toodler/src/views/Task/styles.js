import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    taskContainer: {
      marginBottom: 15,
      padding: 15,
      backgroundColor: '#f9f9f9',
      borderRadius: 8,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    taskName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    taskDescription: {
      fontSize: 16,
      color: '#666',
      marginBottom: 5,
    },
    taskStatus: {
      fontSize: 14,
      color: '#333',
    },
    noTasksText: {
      fontSize: 16,
      color: 'gray',
      textAlign: 'center',
      marginTop: 20,
    },
  });
  
export default styles;