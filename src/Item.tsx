import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TodoItem} from './type';

type PropTypes = {
  data: TodoItem;
  onDeleteItem: (id: string | number) => void;
};
const Item = ({data, onDeleteItem}: PropTypes) => {
  const onPressItem = () => {
    // delete item
    onDeleteItem(data.id);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPressItem}>
      <View style={styles.circle} />
      <Text style={styles.text}>{data.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: 'red',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginLeft: 16,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'rbg(211,40,236)',
  },
});

export default Item;
