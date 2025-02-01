import { View, Text, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { RECENT_ADDED_PARKING_SLOT } from '@/utils/constant'
import searchStyle from '@/styles/searchStyle'
import homeStyle from '@/styles/homeStyle'
import { AntDesign } from '@expo/vector-icons'
import { Link } from 'expo-router'
import bookingStyle from '@/styles/bookingStyle'

const booking = () => {
    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 10, paddingTop: 10, backgroundColor: "white" }}>
            <FlatList data={RECENT_ADDED_PARKING_SLOT}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return <View style={searchStyle.parkingSlot}>
                        <Image source={require("../../assets/images/parkingslot.jpg")} style={searchStyle.parkingSlotImg} />
                        <View>
                            <Text style={homeStyle.slotName}>{item.name}</Text>
                            <Text style={homeStyle.slotAddress}>{item.address}</Text>
                            <TouchableOpacity style={bookingStyle.viewBtn}
                                activeOpacity={0.7}
                            >
                                <Text style={bookingStyle.viewTxt}>View</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                }}

                contentContainerStyle={{
                    paddingBottom: 20
                }}
            />
        </SafeAreaView>
    )
}

export default booking;