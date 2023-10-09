import React, { useEffect } from 'react';
import { Tabs, useRouter } from 'expo-router';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useAuth } from '@clerk/clerk-expo';
import Header from '../../../components/Header';
import { View } from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuProvider,
  MenuTrigger,
} from 'react-native-popup-menu';

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
        tabBarStyle: {
          height: 30,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#010101',
        },
        headerRight: () => (
          <>
            <View style={{ flexDirection: 'row', padding: 12, gap: 15 }}>
              <Feather name='sun' size={24} color='#fff' />
              <Ionicons name='search' size={24} color='#fff' />
              <Ionicons name='camera-outline' size={24} color='#fff' />

              <Menu>
                <MenuTrigger
                  customStyles={{
                    triggerWrapper: {
                      // top: -20,
                    },
                  }}
                >
                  {/* <Entypo name="dots-three-vertical" size={24} color="black" /> */}
                  <MaterialCommunityIcons
                    name='dots-vertical'
                    size={24}
                    color='#fff'
                  />
                </MenuTrigger>
                <MenuOptions
                  customStyles={{
                    optionsContainer: {
                      // backgroundColor: 'green',
                      padding: 5,
                      borderRadius: 10,
                      marginTop: 30,
                    },
                  }}
                >
                  <MenuOption
                    onSelect={() =>
                      router.push('/(auth)/(new-group)/new-group')
                    }
                    text='New Group'
                  />
                  <MenuOption
                    onSelect={() => router.push('/(auth)/settings')}
                    text='Settings'
                  />
                  <MenuOption
                    onSelect={() => {
                      signOut();
                    }}
                    text='Logout'
                  />
                </MenuOptions>
              </Menu>
            </View>
          </>
        ),
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
