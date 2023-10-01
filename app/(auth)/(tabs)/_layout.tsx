import React from 'react';
import { Tabs } from 'expo-router';
import Header from '../../../components/Header';
import { Feather, Ionicons } from '@expo/vector-icons';
import { Box } from '../../../components';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#010101',
          // height: 250,
          elevation: 0,
        },
        // headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerBackgroundContainerStyle: {
          flexDirection: 'column',
          justifyContent: 'space-between',
        },
        headerRight: () => (
          <>
            <Box flexDirection='row' p={'$1.5'} gap={15}>
              <Feather name='sun' size={24} color='#fff' />
              <Ionicons name='search' size={24} color='#fff' />
              <Ionicons name='camera-outline' size={24} color='#fff' />
            </Box>
          </>
        ),

        tabBarStyle: {
          height: 30,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#010101',
        },
        // tabBarBackground: () => <Text>sds</Text>,
      }}
    >
      <Tabs.Screen
        name='chats'
        options={{
          title: 'Chats',

          headerTintColor: '#fff',
          headerTitle: () => <Header name='Chats' />,
          tabBarIcon: ({ size, color }) => null,

          // tabBarBadge: 1,
        }}
      />
      <Tabs.Screen
        name='groups'
        options={{
          title: 'Groups',
          headerTitle: () => <Header name='Groups' />,
          tabBarIcon: ({ size, color }) => null,

          // tabBarBadge: 1,
        }}
      />
    </Tabs>
  );
}