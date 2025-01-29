import useAuthStore from '@/stores/useAuthStore';
import { useFonts } from 'expo-font';
import { Redirect, Stack, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
// import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { NotoSerif_400Regular, NotoSerif_700Bold } from '@expo-google-fonts/noto-serif';
import { Lato_400Regular, Lato_700Bold, Lato_900Black } from '@expo-google-fonts/lato';

const RootLayout = () => {
  const { isAuthenticated } = useAuthStore()
  const router = useRouter();
  const [isInitialized, setIsInitialized] = useState(false)
  const [fontsLoaded] = useFonts({
    NotoSerif_400Regular, NotoSerif_700Bold,
    Lato_400Regular, Lato_700Bold, Lato_900Black
  });


  useEffect(() => {
    if (fontsLoaded) {
      setIsInitialized(true);
    }
  }, [fontsLoaded]);

  useEffect(() => {
    if (isInitialized && isAuthenticated) {
      router.replace('/(tabs)/home');
    }
  }, [isAuthenticated, router]);


  if (!isInitialized) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }



  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(auth)/login" />
      <Stack.Screen name="(auth)/register" />
      <Stack.Screen name="(screens)/booking/[booking]"
        options={{
          headerShown: true,
          title: "Booking"
        }}
      />
      <Stack.Screen name="(screens)/slot/[slotid]"
        options={{
          headerShown: true,
          title: "Parking Slot"
        }}
      />
    </Stack>
  );
};

export default RootLayout;
