import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <View className='flex-1 items-center justify-center bg-white'>
        <Text>Whatsapp clone begin!</Text>
        <StatusBar style='auto' />
      </View>
    </SafeAreaProvider>
  );
}
