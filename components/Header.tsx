import React from 'react';
import { Box, Heading, Text } from '@gluestack-ui/themed';
import { Feather, Ionicons } from '@expo/vector-icons';

function Header({ name }: { name: string }) {
  return (
    <Box w={'$full'} className='bg-black'>
      <Heading color='#fff' textAlign='center'>
        {name}
      </Heading>
    </Box>
  );
}

export default Header;
