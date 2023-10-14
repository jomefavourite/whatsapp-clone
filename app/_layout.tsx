import { Slot, useRouter, useSegments } from 'expo-router';

import { StatusBar } from 'expo-status-bar';
import { ConvexProvider, ConvexReactClient, useMutation } from 'convex/react';
import { ClerkProvider, useAuth, useUser } from '@clerk/clerk-expo';
import { ConvexProviderWithClerk } from 'convex/react-clerk';
import * as SecureStore from 'expo-secure-store';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@rneui/themed';
import { theme } from '../utils/theme';
import { api } from '../convex/_generated/api';
import { Doc, Id } from '../convex/_generated/dataModel';
import { GluestackUIProvider, Text, Box } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

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
  const { user } = useUser();

  const saveUser = useMutation(api.user.create);

  // If the user is signed in, redirect them to the home page
  // If the user is not signed in, redirect them to the login page
  useEffect(() => {
    if (!isLoaded) return;

    const SaveUser = async (user: Doc<'users'>) => {
      const payload = {
        id: user?.id!,
        firstName: user?.firstName!,
        lastName: user?.lastName!,
        imageUrl: user?.imageUrl!,
        status: 'Hey there!. I am using WhatsApp Clone',
      };

      // Note: I don't think the id type is correct
      const userId = await convex.query(api.user.getUserId, {
        id: user?.id as string,
      });

      // console.log(userId?.firstName, 'userId');

      if (userId?._id) {
      } else {
        await saveUser(payload);
      }

      router.replace('/(auth)/(tabs)/chats');
    };

    // const inTabsGroup = segments[0] === '(auth)';

    // console.log(segments, 'segments');

    if (isSignedIn && user) {
      // saveUser(payload);
      SaveUser(user);
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
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <GluestackUIProvider config={config}>
          <SafeAreaProvider>
            <ThemeProvider theme={theme}>
              <StatusBar style='auto' />
              <InitialLayout />
            </ThemeProvider>
          </SafeAreaProvider>
        </GluestackUIProvider>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
