import { Button } from 'components';
import { Link, Redirect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return <Redirect href={'chats'} />;
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text>Whatsapp clone begin!</Text>

      <Link href={'/chats'}>Home</Link>

      <Button>
        <Button.Text>Hello</Button.Text>
      </Button>
      <StatusBar style='auto' />
    </View>
  );
}
