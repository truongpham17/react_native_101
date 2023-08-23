import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignUpScreen from './src/SignUp';
import HomeScreen from './src/HomeScreen';
import LoginScreen from './src/LoginScreen';
import {User} from './src/types/user';
import {store} from './src/store';
import {Provider} from 'react-redux';
const AuthStack = createNativeStackNavigator();

const MainStack = createNativeStackNavigator();

const AuthStackNavigator = () => (
  <AuthStack.Navigator initialRouteName="Sign Up">
    <AuthStack.Screen name="Sign Up">{() => <SignUpScreen />}</AuthStack.Screen>
    <AuthStack.Screen name="Login" component={LoginScreen} />
  </AuthStack.Navigator>
);

const MainStackNavigator = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="HomeScreen" component={HomeScreen} />
  </MainStack.Navigator>
);

const App = () => {
  const [user, setUser] = useState<User>({email: '', password: '', token: ''});

  return (
    <Provider store={store}>
      <NavigationContainer>
        {user.token ? <MainStackNavigator /> : <AuthStackNavigator />}
      </NavigationContainer>
    </Provider>
  );
};

export default App;

//// @TODO
// handle store user data to storage
// pass onSuccessfullyLogin prop to Login Screen, api login API_ENDPOINT/login
// implement logout
