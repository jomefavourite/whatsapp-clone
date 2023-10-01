import { View, Text, Button } from 'react-native';
import React from 'react';
import SignInWithOAuth from '../../components/screen/SignInWithOAuth';
import { useAuth } from '@clerk/clerk-expo';

const SignOut = () => {
  const { isLoaded, signOut } = useAuth();
  if (!isLoaded) {
    return null;
  }
  return (
    <View>
      <Button
        title='Sign Out'
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
};

const login = () => {
  return (
    <View>
      <Text>login</Text>
      <SignInWithOAuth />

      <SignOut />
    </View>
  );
};

export default login;
