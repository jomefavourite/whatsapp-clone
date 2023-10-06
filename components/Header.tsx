import React from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/themed';

function Header({ name }: { name: string }) {
  return (
    <View style={{ width: '100%' }} className='bg-black'>
      <Text style={{ color: '#fff', textAlign: 'center' }}>{name}</Text>
    </View>
  );
}

export default Header;
