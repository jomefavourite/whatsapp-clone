import { View, Text } from 'react-native';
import React from 'react';
import { useConvex, useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { FlatList } from 'react-native-gesture-handler';
import { Doc } from '../../convex/_generated/dataModel';
import { Image } from 'react-native';

const CreateGroup = () => {
  const convex = useConvex();
  const users = useQuery(api.user.getUsers);
  // const users = convex.query(api.user.getUsers)

  console.log(users, 'users');
  return (
    <View style={{ backgroundColor: '#252525', flex: 1 }}>
      <FlatList
        style={{
          padding: 20,
          // backgroundColor: '#252525',
        }}
        data={users}
        renderItem={({ item }) => <ChatItems data={item} />}
        keyExtractor={(data) => data.id}
      />
    </View>
  );
};

export default CreateGroup;

function ChatItems({ data }: { data: Doc<'users'> }) {
  return (
    <View style={{ flex: 1 }}>
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
          <Text style={{ color: '#eef1f4' }}>{data.status}</Text>
        </View>
      </View>
    </View>
  );
}
