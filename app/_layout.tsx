import Header from 'components/Header';
import { Tabs, Slot, Stack } from 'expo-router';
import { GluestackUIProvider } from 'components';
import { config } from 'gluestack-ui.config';
import { StatusBar } from 'expo-status-bar';

// import './styles/global.css';

export default function HomeLayout() {
  return (
    <GluestackUIProvider config={config.theme}>
      <StatusBar style='auto' />
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      </Stack>
    </GluestackUIProvider>
  );
}
