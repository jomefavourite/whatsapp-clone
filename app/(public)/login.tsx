import { View, Text, Button } from 'react-native';
import React from 'react';
import SignInWithOAuth from '../../components/screen/SignInWithOAuth';
import { SafeAreaView } from 'react-native-safe-area-context';

const login = () => {
  return (
    <SafeAreaView className='p-3'>
      <Text>login</Text>
      <SignInWithOAuth />
    </SafeAreaView>
  );
};

export default login;
