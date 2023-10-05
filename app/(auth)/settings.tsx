import { View } from 'react-native';
import React from 'react';
import { useAuth, useUser } from '@clerk/clerk-expo';
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Box,
  Heading,
  ScrollView,
  Text,
  VStack,
  HStack,
  FlatList,
} from '@gluestack-ui/themed';
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
    <ScrollView p={16}>
      <Box flexDirection='row' gap={15}>
        <Avatar bgColor='' size='lg' borderRadius='$md'>
          <AvatarImage source={{ uri: user?.imageUrl }} />
          {/* <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText> */}
        </Avatar>

        <TouchableOpacity>
          <Box display='flex' gap={5}>
            <Heading size='lg' fontWeight='$bold'>
              {user?.firstName} {user?.lastName}
            </Heading>
            <Text>Status will show here...</Text>
          </Box>
        </TouchableOpacity>
      </Box>

      <Box>
        <FlatList
          data={settingDetails}
          keyExtractor={(item) => item?.id}
          renderItem={({ item }) => (
            <Box
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
            </Box>
          )}
        />
      </Box>
    </ScrollView>
  );
};

export default SettingsPage;
