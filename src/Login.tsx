// import
import React, {useState} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Item from './Item';
import type {TodoList, TodoItem} from './type';
import AddItemIcon from './AddItemIcon';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {saveUsername} from './reducers/user';

const Login = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => {
    return state.user.username;
  });
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onChangeUsername = (text: string) => {
    setUsername(text);
  };

  const onChangePW = (text: string) => {
    setPassword(text);
  };
  const onLogin = () => {
    dispatch(saveUsername(username));
  };

  return (
    <View style={{flex: 1, backgroundColor: 'rgb(54,82,159)'}}>
      <SafeAreaView style={{flex: 1, marginHorizontal: 10}}>
        <TextInput
          style={{borderWidth: 1, height: 50}}
          placeholder="username"
          placeholderTextColor="red"
          value={username}
          onChangeText={onChangeUsername}
        />

        <TextInput
          style={{borderWidth: 1, height: 50, marginTop: 20}}
          placeholder="password"
          placeholderTextColor="red"
          value={password}
          onChangeText={onChangePW}
        />

        <Pressable
          style={{borderWidth: 1, marginTop: 20, paddingVertical: 10}}
          onPress={onLogin}>
          <Text style={{textAlign: 'center'}}>Login</Text>
        </Pressable>

        <Text style={{paddingVertical: 15, color: 'white', fontSize: 20}}>
          Username from store: {userInfo}
        </Text>

        <Text style={{paddingVertical: 15, color: 'white', fontSize: 20}}>
          Password from store:
        </Text>
      </SafeAreaView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(54,82,159)',
  },
});
