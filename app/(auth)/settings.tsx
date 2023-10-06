import { FlatList, ScrollView, View } from 'react-native';
import React from 'react';
import { useAuth, useUser } from '@clerk/clerk-expo';
// import {
//   Avatar,
//   View,
//   Heading,
//   ScrollView,
//   Text,
//   VStack,
//   HStack,
//   FlatList,
// } from '@gluestack-ui/themed';
import { Avatar, Text } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';

const settingDetails = [
  {
    id: 1,
    name: 'Account',
    desc: 'Security notifications, change number',
  },
  {
    id: 2,
    name: 'Privacy',
    desc: 'Block contacts, disappearing messages',
  },
  {
    id: 3,
    name: 'Avatar',
    desc: 'Create, edit, profile photo',
  },
  {
    id: 4,
    name: 'Chats',
    desc: 'Theme, wallpapers, chat history',
  },
  {
    id: 5,
    name: 'Notifications',
    desc: 'Message, group & call tones',
  },
  {
    id: 6,
    name: 'Storage',
    desc: 'Network usage, auto-download',
  },
  {
    id: 7,
    name: 'App language',
    desc: 'English',
  },
  {
    id: 8,
    name: 'Help',
    desc: 'Help center, contact us, privacy policy',
  },
  {
    id: 9,
    name: 'Invite a friend',
    desc: '',
  },
];

const SettingsPage = () => {
  const { user } = useUser();

  return (
    <ScrollView style={{ padding: 16 }}>
      <View style={{ flexDirection: 'row', gap: 15 }}>
        <Avatar size={64} source={{ uri: user?.imageUrl }} />

        <TouchableOpacity>
          <View style={{ gap: 5 }}>
            <Text h2>
              {user?.firstName} {user?.lastName}
            </Text>
            <Text>Status will show here...</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        {/* <FlatList
          data={settingDetails}
          keyExtractor={(item) => item?.id}
          renderItem={({ item }) => (
            <View
              borderBottomWidth={1}
              borderColor='$trueGray800'
              sx={{
                _dark: {
                  borderColor: '$trueGray100',
                },
                '@base': {
                  pl: 0,
                  pr: 0,
                },
                '@sm': {
                  pl: '$4',
                  pr: '$5',
                },
              }}
              py='$2'
            >
              <HStack space='md' justifyContent='space-between'>
                <VStack>
                  <Text
                    color='$coolGray800'
                    fontWeight='$bold'
                    sx={{
                      _dark: {
                        color: '$warmGray100',
                      },
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    color='$coolGray600'
                    sx={{
                      _dark: {
                        color: '$warmGray200',
                      },
                    }}
                  >
                    {item.desc}
                  </Text>
                </VStack>
              </HStack>
            </View>
          )}
        /> */}
      </View>
    </ScrollView>
  );
};

export default SettingsPage;
