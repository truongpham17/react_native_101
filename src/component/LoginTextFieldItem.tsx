import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

type PropTypes = {
  text: string;
  label: string;
  onChangeText: (text: string) => void;
  isPassword?: boolean;
};

const LoginTextfieldItem = ({
  label,
  isPassword,
  onChangeText,
  text,
}: PropTypes) => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'black'}}>{label}</Text>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={onChangeText}
        value={text}
        secureTextEntry={isPassword}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  textInputStyle: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#cccccc',
    marginTop: 8,
    paddingStart: 10,
    color: 'black',
    paddingVertical: 10,
  },
});

export default LoginTextfieldItem;
