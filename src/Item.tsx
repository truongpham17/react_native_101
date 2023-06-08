import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {SwipeRow} from 'react-native-swipe-list-view';
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
    <SwipeRow rightOpenValue={-150} style={{marginTop: 20}}>
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.actionBtn}>
          <Text style={{color: 'white'}}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <Text style={{color: 'white'}}>Edit</Text>
        </TouchableOpacity>
      </View>
      <TouchableWithoutFeedback onPress={onPressItem}>
        <View style={styles.container}>
          <View style={styles.uncheckedCircle} />
          <Text
            style={[
              styles.text,
              data.isCompleted && {textDecorationLine: 'line-through'},
            ]}>
            {data.title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </SwipeRow>
  );
};
const styles = StyleSheet.create({
  actionContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingEnd: 20,
  },
  actionBtn: {
    padding: 10,
    backgroundColor: 'green',
    marginHorizontal: 5,
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  container: {
    height: 60,
    backgroundColor: 'rgb(5,27,85)',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    // marginVertical: 10,
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
