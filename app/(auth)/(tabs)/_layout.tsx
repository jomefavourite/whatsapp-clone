import React from 'react';
import { Tabs, useRouter } from 'expo-router';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useAuth } from '@clerk/clerk-expo';
import Header from '../../../components/Header';

export default function TabsLayout() {
  const { isLoaded, signOut } = useAuth();
  const router = useRouter();
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
            {/* <View flexDirection='row' p={'$1.5'} gap={15}>
              <Feather name='sun' size={24} color='#fff' />
              <Ionicons name='search' size={24} color='#fff' />
              <Ionicons name='camera-outline' size={24} color='#fff' />

              <Menu
                placement='bottom'
                trigger={({ ...triggerProps }) => {
                  return (
                    <Button {...triggerProps}>
                      <MaterialCommunityIcons
                        name='dots-vertical'
                        size={24}
                        color='#fff'
                      />
                    
                    </Button>
                  );
                }}
              >
                <MenuItem onPress={() => router.push('/(auth)/new-group')}>
                  <MenuItemLabel size='sm'>New group</MenuItemLabel>
                </MenuItem>
                <MenuItem onPress={() => router.push('/(auth)/settings')}>
                  <MenuItemLabel size='sm'>Settings</MenuItemLabel>
                </MenuItem>
                <MenuItem
                  key='Logout'
                  textValue='Logout'
                  onPress={() => {
                    signOut();
                  }}
                >
                  <MenuItemLabel size='sm'>Logout</MenuItemLabel>
                </MenuItem>
              </Menu>
            </View> */}
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
