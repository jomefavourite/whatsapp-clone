import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { useQuery } from 'convex/react';
import { FlatList } from 'react-native-gesture-handler';
import { Doc } from '../../../convex/_generated/dataModel';
import { Image } from 'react-native';
import { FAB } from '@rneui/base';
import { api } from '../../../convex/_generated/api';
import { useUser } from '@clerk/clerk-expo';
import { ListItem } from '@rneui/themed';

const CreateGroup = () => {
  const { user } = useUser();
  const users = useQuery(api.user.getUsers, { id: user?.id! });
  const usersCheck = users?.map((user) => ({
    ...user,
    checked: false,
  }));
  const [usersState, setUsersState] = useState(
    users?.map((user) => ({
      ...user,
      checked: false,
    }))
  );
  // const users = convex.query(api.user.getUsers)

  // console.log(users, 'users');
  return (
    <View style={{ backgroundColor: '#252525', flex: 1 }}>
      <FlatList
        style={{
          padding: 20,
          // backgroundColor: '#252525',
        }}
        data={usersState}
        renderItem={({ item }) => <ChatItems data={item} />}
        keyExtractor={(data) => data.id}
      />

      <FAB
        visible={true}
        placement='right'
        upperCase
        icon={{ name: 'arrow-left', color: 'white' }}
      />
    </View>
  );
};

export default CreateGroup;

function ChatItems({ data }: { data: Doc<'users'> }) {
  return (
    <View
      style={{ flex: 1 }}
      // onPress={() => setUsersState({ ...data, checked: true })}
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
          <Text style={{ color: '#eef1f4' }}>{data.status}</Text>
        </View>
      </View>
    </View>
  );
}
