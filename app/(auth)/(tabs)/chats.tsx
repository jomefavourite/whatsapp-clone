import React from 'react';
// import { ScrollView } from 'react-native-gesture-handler';
// import { faker } from '@faker-js/faker';
import { FlatList, Image, ScrollView, View } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { chatData } from '../../data';
import { Text } from '@rneui/themed';

type ChatData = typeof chatData;

export default function Chats() {
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
