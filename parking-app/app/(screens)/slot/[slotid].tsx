import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import singleSlotStyle from '@/styles/singleSlot';

const Slot = () => {
    return (
        <SafeAreaView>
            <Image source={require("../../../assets/images/parkingslot.jpg")} style={singleSlotStyle.slotImg} />


            <View style={singleSlotStyle.slotInfo}>
                <Text style={singleSlotStyle.parkingSlot}>
                    Car Parkings
                </Text>
                <Text style={singleSlotStyle.slotName}>Cinema Park</Text>
                <Text style={singleSlotStyle.slotAddress}>Resort Street, Cooper</Text>
                <Text style={singleSlotStyle.slotPrice}>25/Hours.</Text>
            </View>
        </SafeAreaView>
    )
}

export default Slot;