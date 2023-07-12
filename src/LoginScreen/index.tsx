import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import LoginTextfieldItem from './LoginTextFieldItem';

const LoginScreen = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const onChangeEmail = (email: string) => {
    setUser({email, password: user.password});
  };

  const onChangePassword = (password: string) => {
    setUser({password, email: user.email});
  };

  return (
    <View style={styles.containter}>
      <SafeAreaView>
        <Text style={styles.label}>Login</Text>
        <LoginTextfieldItem
          onChangeText={onChangeEmail}
          text={user.email}
          label={'Username'}
        />
        <LoginTextfieldItem
          label={'Password'}
          text={user.password}
          onChangeText={onChangePassword}
          isPassword
        />
        <View
          style={{
            marginTop: 32,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: 'black'}}>Forgot password?</Text>
        </View>
        <View style={{marginTop: 32}} />
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={{fontSize: 20, color: 'white'}}>Login</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  containter: {
    backgroundColor: 'white',
    padding: 20,
    flex: 1,
  },
  label: {
    fontSize: 35,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  btnLogin: {
    width: '90%',
    backgroundColor: 'green',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
});
