import { Slot, useRouter, useSegments } from 'expo-router';

import { StatusBar } from 'expo-status-bar';
import { ConvexProvider, ConvexReactClient } from 'convex/react';
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@rneui/themed';
import { theme } from '../utils/theme';

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

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
      router.replace('/(auth)/(tabs)/chats');
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
      publishableKey={CLERK_PUBLISHABLE_KEY!}
    >
      <ConvexProvider client={convex}>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            <StatusBar style='auto' />
            <InitialLayout />
          </ThemeProvider>
        </SafeAreaProvider>
      </ConvexProvider>
    </ClerkProvider>
  );
}
