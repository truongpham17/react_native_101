import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignUpScreen from './src/SignUp';
import HomeScreen from './src/HomeScreen';
import LoginScreen from './src/LoginScreen';
import {User} from './src/types/user';

const AuthStack = createNativeStackNavigator();

const MainStack = createNativeStackNavigator();

const AuthStackNavigator = ({
  onSuccessfullyLogin,
}: {
  onSuccessfullyLogin: (user: User) => void;
}) => (
  <AuthStack.Navigator initialRouteName="Sign Up">
    <AuthStack.Screen name="Sign Up">
      {() => <SignUpScreen onSuccessfullyLogin={onSuccessfullyLogin} />}
    </AuthStack.Screen>
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

  const onSuccessfullyLogin = (user: User) => {
    // @TODO
    // handle store user data to storage
    // navigate to homescreen
    setUser(user);
  };

  return (
    <NavigationContainer>
      {user.token ? (
        <MainStackNavigator />
      ) : (
        <AuthStackNavigator onSuccessfullyLogin={onSuccessfullyLogin} />
      )}
    </NavigationContainer>
  );
};

export default App;

//// @TODO
// handle store user data to storage
// pass onSuccessfullyLogin prop to Login Screen, api login API_ENDPOINT/login
// implement logout
