import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  View,
} from 'react-native';

export type EditModalProps = {
  onPressOk: (title: string) => void;
  defaultValue?: string;
  modalVisible: boolean;
  onCloseModal: () => void;
};

const EditModal = ({
  onPressOk,
  defaultValue,
  modalVisible,
  onCloseModal,
}: EditModalProps) => {
  const [inputValue, setInputValue] = useState(defaultValue || '');

  const onConfirm = () => {
    onPressOk(inputValue);
    onCloseModal();
    setInputValue('');
  };

  const closeModal = () => {
    onCloseModal();
    setInputValue('');
  };

  return (
    <Modal
      visible={modalVisible}
      transparent
      animationType="fade"
      onRequestClose={closeModal}>
      <View style={styles.modalContainer}>
        <View style={styles.addContainer}>
          <TextInput
            value={inputValue}
            placeholder="Task name"
            style={styles.input}
            placeholderTextColor={'grey'}
            autoFocus
            onChangeText={setInputValue}
          />
          <TouchableOpacity style={styles.addBtn} onPress={onConfirm}>
            <Text style={styles.doneTxt}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  addContainer: {
    width: '90%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  addBtn: {
    alignSelf: 'stretch',
    backgroundColor: 'rgb(54,82,159)',
    borderRadius: 4,
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 20,
  },
  doneTxt: {
    fontSize: 18,
    color: 'white',
  },
  input: {
    fontSize: 28,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    color: 'rgb(1,1,0.8)',
  },
});

export default EditModal;
