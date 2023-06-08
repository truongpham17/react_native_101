// import
import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import Item from './Item';
import type {TodoList, TodoItem} from './type';
import AddItemIcon from './AddItemIcon';
const HomeScreen = () => {
  const [todoList, setTodoList] = useState<TodoList>([
    {
      id: '0',
      title: 'First thing to do',
      isCompleted: false,
    },
    {
      id: '1',
      title: 'First thing to do',
      isCompleted: false,
    },
  ]);

  const addItem = (item: TodoItem) => {
    setTodoList([...todoList, item]);
  };

  const readItem = (id: string) => {};

  const updateItem = (id: string, data: TodoItem) => {};

  const deleteItem = (id: string) => {
    setTodoList(todoList.filter(item => item.id !== id));
  };

  const onCompleteItem = (id: string) => {
    setTodoList(
      todoList.map(item => {
        if (item.id !== id) {
          return item;
        }
        return {...item, isCompleted: true};
      }),
    );
  };

  const renderItem = props => {
    console.log({item: props.item});
    return <Item data={props.item} onCompleteItem={onCompleteItem} />;
  };

  return (
    <View style={{flex: 1, backgroundColor: 'rgb(54,82,159)'}}>
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          style={styles.container}
          data={todoList}
          renderItem={renderItem}
        />
        <AddItemIcon onAddItem={addItem} />
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(54,82,159)',
  },
});
