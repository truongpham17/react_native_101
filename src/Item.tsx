import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TodoItem} from './type';

type PropTypes = {
  data: TodoItem;
  onCompleteItem: (id: string) => void;
};

const Item = ({data, onCompleteItem}: PropTypes) => {
  const onPressItem = () => {
    onCompleteItem(data.id);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPressItem}>
      {/* handle style for checked and unchecked circle here */}
      <View style={styles.uncheckedCircle} />
      <Text
        style={[
          styles.text,
          data.isCompleted && {textDecorationLine: 'line-through'},
        ]}>
        {data.title}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: 'rgb(5,27,85)',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginTop: 10,
    marginHorizontal: 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginLeft: 16,
  },
  uncheckedCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'rgb(233,41,252)',
  },
  checkedCircle: {},
});

export default Item;
