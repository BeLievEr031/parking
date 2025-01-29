import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'

const Booking = () => {
    const { booking } = useLocalSearchParams();
    console.log(booking);

    return (
        <View>
            <Text>{booking}</Text>
        </View>
    )
}

export default Booking;