import { View, Text, Button } from 'react-native';
import React, { useEffect } from 'react';
import SignInWithOAuth from '../../components/screen/SignInWithOAuth';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import SignInWithGithub from '../../components/screen/SignInWithGithub';

const login = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;

    if (isSignedIn) {
      router.replace('/(auth)/(tabs)/chats');
    }
  }, [isSignedIn]);

  return (
    <SafeAreaView className='p-3'>
      <Text>login</Text>
      <SignInWithOAuth />
      <SignInWithGithub />
    </SafeAreaView>
  );
};

export default login;
