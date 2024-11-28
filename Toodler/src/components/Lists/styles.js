import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    listTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
      modalContainer: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        maxHeight: '80%',
      },
      modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
      },
      listItem: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      listName: {
        fontSize: 16,
      },
      closeButton: {
        marginTop: 16,
        paddingVertical: 12,
        backgroundColor: '#007AFF',
        borderRadius: 4,
        alignItems: 'center',
      },
      closeButtonText: {
        fontSize: 16,
        color: '#fff',
      },
});

export default styles;