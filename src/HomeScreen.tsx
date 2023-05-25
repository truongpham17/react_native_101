// import
import React, {useState} from 'react';
import {View} from 'react-native';
import Item from './Item';
import type {TodoList, TodoItem} from './type';
//elements
const HomeScreen = () => {
  //states
  const [todoList, setTodoList] = useState<TodoList>([
    {
      id: 0,
      title: 'First thing to do',
      isCompleted: false,
    },
  ]);

  // add a todo list
  const addItem = (item: TodoItem) => {
    setTodoList([...todoList, item]);
  };

  const readItem = (id: string) => {};

  const updateItem = (id: string, data: TodoItem) => {};

  const deleteItem = (id: string) => {
    setTodoList(todoList.filter(item => item.id !== id));
  };

  // render
  return <Item data={todoList[0]} onDeleteItem={deleteItem} />;
};

//export
export default HomeScreen;
