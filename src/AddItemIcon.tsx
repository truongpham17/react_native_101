import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  View,
} from 'react-native';
import {TodoItem} from './type';

type PropsType = {
  onAddItem: (item: TodoItem) => void;
};

const AddItemIcon = (props: PropsType) => {
  const {onAddItem: addItem} = props;

  const [modalVisible, setModalVisibility] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const onAddItem = () => {
    setModalVisibility(false);
    const item: TodoItem = {
      id: '3',
      title: inputValue,
      isCompleted: false,
    };
    addItem(item);
    // handle add new item here
  };

  const closeModal = () => {
    setModalVisibility(false);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.plusBtn}
        onPress={() => setModalVisibility(true)}>
        <Text style={styles.plusIcon}>+</Text>
      </TouchableOpacity>
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
              style={{
                fontSize: 28,
                borderBottomWidth: 1,
                color: 'rgb(1,1,0.8)',
              }}
              placeholderTextColor={'#555555'}
              // handle change text here
              onChangeText={text => {
                setInputValue(text);
              }}
            />
            <TouchableOpacity style={styles.addBtn} onPress={onAddItem}>
              <Text style={styles.doneTxt}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  plusBtn: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: 'rgb(233,41,252)',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  plusIcon: {
    fontSize: 28,
    color: 'white',
  },
  addContainer: {
    width: '90%',
    backgroundColor: 'white',
    padding: 20,
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
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 20,
  },
  doneTxt: {
    fontSize: 18,
    color: 'white',
  },
});

export default AddItemIcon;
