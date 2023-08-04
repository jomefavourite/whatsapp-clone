import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

import {
  FlatList,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Animated,
  ScrollView,
  ImageBackground,
} from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
import { faker } from '@faker-js/faker/locale/de';
import { Box, Button, Input } from 'components';
import { Ionicons, Feather } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
// const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

faker.seed(10);

const data = [...Array(100).keys()].map((i) => ({
  key: faker.string.uuid(),
  text: faker.lorem.sentences(faker.helpers.arrayElement([1, 2])),
  mine: faker.helpers.arrayElement([true, false]),
  reply: faker.helpers.arrayElement([true, false]),
  replyMessage: faker.lorem.sentences(faker.helpers.arrayElement([1, 2])),
}));
// {
//   uri: 'https://media.geeksforgeeks.org/wp-content/uploads/20220217151648/download3.png',
// }
export default function ChatPage() {
  const [measures, setMeasures] = React.useState({ height });
  const scrollY = React.useRef(new Animated.Value(0)).current;

  const { slug } = useLocalSearchParams();

  return (
    <>
      <Animated.ScrollView
        style={{ backgroundColor: '#252525' }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      >
        <ImageBackground
          source={require('../../../assets/whatsapp-bg.png')}
          resizeMode='stretch'
          style={{ flex: 1, width: width, height: height }}
          imageStyle={{ opacity: 0.2 }}
        >
          <View style={{ height: measures.height }}>
            <FlatList
              scrollEnabled={false}
              data={data}
              keyExtractor={(item) => item.key}
              style={[StyleSheet.absoluteFillObject, { zIndex: 1 }]}
              removeClippedSubviews={false}
              renderItem={({ item }) => {
                return (
                  <View
                    style={[
                      styles.messageItem,
                      {
                        zIndex: item.mine ? -1 : 1, // only display the other messages above the gradient mask, we want to avoid gradient being applied to the other message other than mine.
                        backgroundColor: item.mine ? '#008c7f' : '#434343', // remove the background for my messages because we're using the gradient mask
                        alignSelf: item.mine ? 'flex-end' : 'flex-start',
                      },
                    ]}
                  >
                    {item.reply ? (
                      <Box
                        sx={{
                          borderLeftColor: '#7469a4',
                          borderRadius: 4,
                          marginBottom: 1,
                          backgroundColor: item.mine ? '#027a70' : '#3b3c3e',
                          borderLeftWidth: 2,
                          padding: 5,
                        }}
                      >
                        <Text style={{ color: '#fff' }}>
                          {item.replyMessage}
                        </Text>
                      </Box>
                    ) : null}
                    <Text style={{ color: 'white' }}>{item.text}</Text>
                  </View>
                );
              }}
            />
          </View>
        </ImageBackground>
      </Animated.ScrollView>
      <Box bgColor='#010101' flexDirection='row' gap={5} p={10}>
        <Button variant='link'>
          <Ionicons name='attach' size={24} color='#fff' />
        </Button>
        <Input sx={{ flex: 1 }} variant='rounded'>
          <Input.Input
            type={'text'}
            sx={{ color: '#fff' }}
            placeholder='Message'
          />
          {/* <Input.Icon pr='$3'> */}
          {/* <Icon
                as={showPassword ? EyeIcon : EyeOffIcon}
                color="$darkBlue500"
              /> */}
          {/* </Input.Icon> */}
        </Input>
        <Button variant='link'>
          <Feather name='mic' size={24} color='#fff' />
        </Button>
      </Box>
    </>
  );
}

const styles = StyleSheet.create({
  messageItem: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    margin: 12,
    marginBottom: 8,
    borderRadius: 6,
    maxWidth: width * 0.65,
  },
});
