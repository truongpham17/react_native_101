// import
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const TypeBlock = () => (
  <View
    style={{
      flexDirection: 'row',
      marginBottom: 10,
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 6,
    }}>
    <Image
      source={{
        uri: 'https://nhadepso.com/wp-content/uploads/2023/03/loa-mat-voi-101-hinh-anh-avatar-meo-cute-dang-yeu-dep-mat_1.jpg',
      }}
      style={{
        width: 80,
        height: 80,
        resizeMode: 'contain',
        borderRadius: 10,
      }}
    />

    <View
      style={{
        justifyContent: 'space-between',
        flex: 1,
        paddingTop: 10,
        paddingBottom: 5,
        paddingLeft: 10,
      }}>
      <Text>Book Vehicle</Text>
      <Text>Send loadd asdf sadf sdf sadf sdfsadf asdfs asdfasdfsadf</Text>
    </View>
  </View>
);
const MainServices = () => {
  return (
    <View
      style={{
        backgroundColor: '#bcbcbc',
        marginHorizontal: -20,
        padding: 20,
      }}>
      <Text style={{paddingBottom: 10, fontSize: 16, fontWeight: 'bold'}}>
        Main Services
      </Text>
      <TypeBlock />
      <TypeBlock />
      <TypeBlock />
    </View>
  );
};
const CustomSuport = () => <View />;
const WhatNews = () => <View />;

const FrontPage = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          marginHorizontal: 20,
          flex: 1,
        }}>
        <MainServices />
        <CustomSuport />
        <WhatNews />
      </View>
    </SafeAreaView>
  );
};
export default FrontPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(54,82,159)',
  },
});
