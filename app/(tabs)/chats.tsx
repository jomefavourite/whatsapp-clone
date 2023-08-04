import React from 'react';
import { Box, Button, Heading, Text } from 'components';
// import { ScrollView } from 'react-native-gesture-handler';
import { faker } from '@faker-js/faker/locale/de';
import { FlatList, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';

faker.seed(10);

type ChatData = typeof chatData;

const chatData = [...Array(20).keys()].map((i) => ({
  id: faker.string.uuid(),
  name: `${faker.person.firstName()} ${faker.person.lastName()}`,
  date: faker.date.future().toISOString(),
  lastMessage: faker.lorem.paragraph(2),
  image: faker.image.url(),
}));

// console.log(chatData);

export default function Chats() {
  return (
    <Box flex={1} bg='#252525'>
      <FlatList
        style={{ padding: 20 }}
        data={chatData}
        renderItem={({ item }) => <ChatItems data={item} />}
        keyExtractor={(data) => data.id}
      />
    </Box>
  );
}

function ChatItems({ data }: { data: ChatData[0] }) {
  return (
    <Box flex={1}>
      <Link href={`/(chat)/${data.id}`}>
        <Box flexDirection='row' alignItems='center' gap={10}>
          <Image
            source={{ uri: data.image }}
            width={40}
            height={40}
            borderRadius={1000}
          />
          <Box>
            <Heading size='sm' color='#eef1f4'>
              {data.name}
            </Heading>
            <Text numberOfLines={1} color='#77848c'>
              {data.lastMessage}
            </Text>
          </Box>
        </Box>
      </Link>
    </Box>
  );
}
