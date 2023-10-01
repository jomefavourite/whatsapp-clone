import { Slot, Stack, useRouter, useSegments } from 'expo-router';
import { GluestackUIProvider } from '../components';
import { config } from '../gluestack-ui.config';
import { StatusBar } from 'expo-status-bar';
import { ConvexProvider, ConvexReactClient } from 'convex/react';
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Linking from 'expo-linking';

// Linking.openURL('https://expo.dev');

// import './styles/global.css';

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

const InitialLayout = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  // If the user is signed in, redirect them to the home page
  // If the user is not signed in, redirect them to the login page
  useEffect(() => {
    if (!isLoaded) return;

    // const inTabsGroup = segments[0] === '(auth)';

    console.log(segments, 'segments');

    if (isSignedIn) {
      router.replace('/(auth)/chats');
    } else if (!isSignedIn) {
      router.replace('/(public)/login');
    }
  }, [isSignedIn]);

  return <Slot />;
};

export default function RootLayout() {
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={Constants.expoConfig.extra.clerkPublishableKey}
    >
      <ConvexProvider client={convex}>
        <GluestackUIProvider config={config.theme}>
          <StatusBar style='auto' />
          <InitialLayout />
        </GluestackUIProvider>
      </ConvexProvider>
    </ClerkProvider>
  );
}
