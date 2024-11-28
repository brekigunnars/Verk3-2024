// components/SelectListModal.js

import React, { useContext } from 'react';
import { Modal, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { ListsContext } from '../../context/ListsContext';

const SelectListModal = ({ visible, onClose, onSelect, excludeListId }) => {
  const { lists } = useContext(ListsContext);

  // Filter out the current list
  const availableLists = lists.filter(list => list.id !== excludeListId);

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      onPress={() => { onSelect(item); onClose(); }} 
      style={styles.listItem}
    >
      <Text style={styles.listName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Select a List</Text>
          <FlatList
            data={availableLists}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: '#000000',
    borderRadius: 4,
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default SelectListModal;
