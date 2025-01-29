import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Redirect, useRouter } from 'expo-router'
import useAuthStore from '@/stores/useAuthStore'

const index = () => {
    const { isAuthenticated } = useAuthStore();
    return (
        <View>
            {
                !isAuthenticated ?
                    <Redirect href={"/login"} />
                    : <Redirect href={"/home"} />
            }
        </View>
    )
}

export default index