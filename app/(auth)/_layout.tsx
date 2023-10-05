import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#010101',
            // height: 250,
          },
          // headerTitleAlign: 'center',
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen name='settings' options={{ title: 'Settings' }} />
      </Stack>
    </>
  );
};

export default Layout;
