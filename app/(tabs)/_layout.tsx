import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{}}>
      <Tabs.Screen
        name='chats'
        options={{
          title: 'Chats',
          headerStyle: {
            backgroundColor: '#010101',
          },
          headerTintColor: '#fff',
        }}
      />
      <Tabs.Screen
        name='groups'
        options={{
          title: 'Chats',
          headerStyle: {
            backgroundColor: '#010101',
          },
          headerTintColor: '#fff',
        }}
      />
    </Tabs>
  );
}
