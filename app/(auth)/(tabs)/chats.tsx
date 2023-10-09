import React, { useEffect, useState } from 'react';
// import { ScrollView } from 'react-native-gesture-handler';
// import { faker } from '@faker-js/faker';
import { FlatList, Image, ScrollView, View } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { chatData } from '../../data';
import { Text } from '@rneui/themed';
import { useConvex, useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import { Doc } from '../../../convex/_generated/dataModel';
import { useUser } from '@clerk/clerk-expo';

type ChatData = typeof chatData;

export default function Chats() {
  const { user } = useUser();
  const users = useQuery(api.user.getUsers, { id: user?.id! });

  return (
    <View style={{ flex: 1, backgroundColor: '#010101' }}>
      <StatusBar style='light' />

      <FlatList
        style={{ padding: 20, borderRadius: 20, backgroundColor: '#252525' }}
        data={users}
        renderItem={({ item }) => <ChatItems data={item} />}
        keyExtractor={(data) => data._id}
      />
    </View>
  );
}

function ChatItems({ data }: { data: Doc<'users'> }) {
  return (
    <View style={{ flex: 1 }}>
      <Link
        href={{ pathname: '/(chat)/[id]', params: { id: data.id as string } }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <Image
            source={{ uri: data.imageUrl }}
            width={40}
            height={40}
            borderRadius={1000}
          />
          <View>
            <Text style={{ color: '#eef1f4' }}>
              {data.firstName} {data.lastName}
            </Text>
            {/* <Text style={{ color: '#77848c' }} numberOfLines={1}>
              {data.lastMessage}
            </Text> */}
          </View>
        </View>
      </Link>
    </View>
  );
}
