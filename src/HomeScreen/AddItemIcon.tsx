import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import EditModal from './EditModal';

type PropsType = {
  onAddItem: (title: string) => void;
};

const AddItemIcon = ({onAddItem}: PropsType) => {
  const [modalVisible, setModalVisibility] = useState(false);

  const closeModal = () => {
    setModalVisibility(false);
  };

  return (
    <TouchableOpacity
      style={styles.plusBtn}
      onPress={() => setModalVisibility(true)}>
      <Text style={styles.plusIcon}>+</Text>
      <EditModal
        modalVisible={modalVisible}
        onCloseModal={closeModal}
        defaultValue=""
        onPressOk={onAddItem}
      />
    </TouchableOpacity>
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
});

export default AddItemIcon;
