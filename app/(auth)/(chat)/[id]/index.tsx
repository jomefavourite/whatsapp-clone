import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';

import {
  FlatList,
  StyleSheet,
  Dimensions,
  Animated,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
// import { LinearGradient } from 'expo-linear-gradient';
// import {  Button, Input } from '@gluestack-ui/themed';
import { Ionicons, Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native';
import { Button, Icon, Input } from '@rneui/themed';
import { faker } from '@faker-js/faker';
import { useConvex } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
  // const { chatId } = useLocalSearchParams();
  const [measures, setMeasures] = React.useState({ height });
  const scrollY = React.useRef(new Animated.Value(0)).current;

  const { id: chatId } = useLocalSearchParams();

  console.log(chatId, 'chatId');
  const convex = useConvex();
  const navigation = useNavigation();

  // Load group name and set header title
  useEffect(() => {
    const loadGroup = async () => {
      const userInfo = await convex.query(api.user.getUserId, {
        id: chatId as string,
      });
      console.log(userInfo);
      navigation.setOptions({
        headerTitle: `${userInfo?.firstName} ${userInfo?.lastName}`,
        headerLeft: () => {
          return (
            <>
              <Icon name='arrow-back' type='ionicons' color={'#fff'} />
              <Image
                source={{ uri: userInfo?.imageUrl }}
                width={20}
                height={20}
                style={{ borderRadius: 50 }}
              />
            </>
          );
        },
      });
    };
    loadGroup();
  }, [chatId]);

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
          source={require('../../../../assets/whatsapp-bg.png')}
          resizeMode='cover'
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
                      <View
                        style={{
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
                      </View>
                    ) : null}
                    <Text style={{ color: 'white' }}>{item.text}</Text>
                  </View>
                );
              }}
            />
          </View>
        </ImageBackground>
      </Animated.ScrollView>

      <View
        style={{
          backgroundColor: '#010101',
          flexDirection: 'row',
          gap: 4,
          padding: 10,
        }}
      >
        <Button>
          <Ionicons name='attach' size={24} color='#fff' />
        </Button>
        <Input style={{ flex: 1 }} placeholder='Message' />

        <Button>
          <Feather name='mic' size={24} color='#fff' />
        </Button>
      </View>
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
