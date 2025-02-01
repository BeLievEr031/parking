import React from 'react'
import { Redirect, Tabs } from 'expo-router'
import useAuthStore from '@/stores/useAuthStore'
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const TabsLayout = () => {
    const { isAuthenticated } = useAuthStore();
    if (!isAuthenticated) {
        return <Redirect href={"/login"} />
    }

    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name='home'
                options={{
                    title: 'Home',
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen name='search'
                options={{
                    title: 'Search',
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons name={focused ? 'search' : 'search-outline'} size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen name='booking'
                options={{
                    title: 'Booking',
                    tabBarLabel: 'Booking',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons name={focused ? 'car' : 'car-outline'} size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen name='profile'
                options={{
                    title: 'Profile',
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ focused, color, size }) => (
                        <FontAwesome name={focused ? 'user' : 'user-o'} size={size} color={color} />
                    ),
                    headerShown: true
                }}
            />
        </Tabs>
    )
}

export default TabsLayout