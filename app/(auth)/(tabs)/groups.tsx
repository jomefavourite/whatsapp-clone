import React from 'react';
// import { ScrollView } from 'react-native-gesture-handler';
// import { faker } from '@faker-js/faker/locale/en';
import { FlatList, Image, ScrollView, View } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { chatData } from '../../data';
import { Text } from '@rneui/themed';

// faker.seed(10);

type ChatData = typeof chatData;

// const chatData = [...Array(20).keys()].map((i) => ({
//   id: faker.string.uuid(),
//   name: `${faker.person.firstName()} ${faker.person.lastName()}`,
//   date: faker.date.future().toISOString(),
//   lastMessage: faker.lorem.paragraph(2),
//   image: faker.image.url(),
// }));

// console.log(chatData);

export default function Groups() {
  return (
    <View style={{ flex: 1, backgroundColor: '#010101' }}>
      <StatusBar style='light' />

      <FlatList
        style={{ padding: 20, borderRadius: 20, backgroundColor: '#252525' }}
        data={chatData}
        renderItem={({ item }) => <ChatItems data={item} />}
        keyExtractor={(data) => data.id}
      />
    </View>
  );
}

function ChatItems({ data }: { data: ChatData[0] }) {
  return (
    <View style={{ flex: 1 }}>
      <Link href={{ pathname: `/(chat)/${data.id}`, params: data }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <Image
            source={{ uri: data.image }}
            width={40}
            height={40}
            borderRadius={1000}
          />
          <View>
            <Text style={{ color: '#eef1f4' }}>{data.name}</Text>
            <Text style={{ color: '#77848c' }} numberOfLines={1}>
              {data.lastMessage}
            </Text>
          </View>
        </View>
      </Link>
    </View>
  );
}
