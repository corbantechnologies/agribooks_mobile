import { useSystem } from '@/powersync/Powersync';
import { PowerSyncProvider } from '@/powersync/PowerSyncProvider';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
  const [fontsLoaded] = useFonts({
    "Rubik-Bold":require('../assets/fonts/Rubik-Bold.ttf'),
    "Rubik-ExtraBold":require('../assets/fonts/Rubik-ExtraBold.ttf'),
    "Rubik-SemiBold":require('../assets/fonts/Rubik-SemiBold.ttf'),
    "Rubik-Light":require('../assets/fonts/Rubik-Light.ttf'),
    "Rubik-Medium":require('../assets/fonts/Rubik-Medium.ttf'),
    "Rubik-Regular":require('../assets/fonts/Rubik-Regular.ttf'),
  })
  const system = useSystem();

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    system.init();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ headerShown: false }}/>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
        <Stack.Screen name="(auth)/login" options={{ headerShown: false }}/>
        <Stack.Screen name="(modals)/profileModal" options={{ headerShown: false }}/>
      </Stack>
  );
}
const RootLayout = () => {
  return (
    <PowerSyncProvider>
      <InitialLayout />
    </PowerSyncProvider>
  );
};

export default RootLayout;
