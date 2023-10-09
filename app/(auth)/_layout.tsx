import React from 'react';
import { Stack } from 'expo-router';
import { MenuProvider } from 'react-native-popup-menu';

const Layout = () => {
  return (
    <>
      <MenuProvider>
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
          <Stack.Screen name='new-group' options={{ title: 'New Group' }} />
        </Stack>
      </MenuProvider>
    </>
  );
};

export default Layout;
