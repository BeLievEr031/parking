import { View, Text, SafeAreaView, Image, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from 'react-native'
import React, { useEffect, useMemo, useRef } from 'react'
import singleSlotStyle from '@/styles/singleSlot';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';

const Slot = () => {
    const sheetRef = useRef<BottomSheet>(null);

    const snapPoints = useMemo(() => ["60%", "75%"], []);

    const handleBottomSheetOpen = () => {
        sheetRef.current?.snapToIndex(0)
    }


    useEffect(() => {
        const didKeyBoardOpen = Keyboard.addListener("keyboardDidShow", () => {
            sheetRef.current?.snapToIndex(1)

        })

        const didKeyBoardClose = Keyboard.addListener("keyboardDidHide", () => {
            sheetRef.current?.snapToIndex(0)
        })
    }, [])
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <Image source={require("../../../assets/images/parkingslot.jpg")} style={singleSlotStyle.slotImg} />

                <View style={singleSlotStyle.slotInfo}>
                    <Text style={singleSlotStyle.parkingSlot}>
                        Car Parkings
                    </Text>
                    <Text style={singleSlotStyle.slotName}>Cinema Park</Text>
                    <Text style={singleSlotStyle.slotAddress}>Resort Street, Cooper</Text>
                    <Text style={singleSlotStyle.slotPrice}>25/Hours.</Text>

                    <Text style={singleSlotStyle.descText}>
                        Description
                    </Text>
                    <Text style={singleSlotStyle.description}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, praesentium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, voluptatem!
                    </Text>
                </View>

                <View style={singleSlotStyle.ownerInfoCont}>
                    <Text style={singleSlotStyle.operatedText}>
                        Operated By
                    </Text>

                    <View style={singleSlotStyle.ownerInfo}>
                        <MaterialCommunityIcons name='steering' size={45} color={"#1a73e8"} />

                        <View>
                            <Text style={singleSlotStyle.ownerName}>Sandeep Rajak</Text>
                            <Text style={singleSlotStyle.phone}>9511849241</Text>
                        </View>
                    </View>

                </View>

                <TouchableOpacity style={singleSlotStyle.bookSlotBtn}
                    activeOpacity={0.8}
                    onPress={handleBottomSheetOpen}
                >
                    <Text style={singleSlotStyle.bookSlotText}>Book Slot</Text>
                </TouchableOpacity>


                <BottomSheet
                    ref={sheetRef}
                    snapPoints={snapPoints}
                    enableDynamicSizing={false}
                    enablePanDownToClose={true}
                    index={-1}
                >
                    <BottomSheetView style={{ paddingHorizontal: 10 }}>
                        <KeyboardAvoidingView
                            behavior={Platform.OS === "ios" ? "padding" : "height"}
                        >
                            <Text style={singleSlotStyle.bookSlotBSText}>Book a slot</Text>

                            <TextInput style={singleSlotStyle.BSInput} placeholder='Name' />
                            <TextInput style={singleSlotStyle.BSInput} placeholder='Car Name' />
                            <TextInput style={singleSlotStyle.BSInput} placeholder='Car Model' />
                            <TextInput keyboardType='number-pad' style={singleSlotStyle.BSInput} placeholder='Car Number' />

                            <TouchableOpacity style={singleSlotStyle.bookBtn}>
                                <Text style={singleSlotStyle.bookBtnText}>
                                    Book a slot now
                                </Text>
                            </TouchableOpacity>
                        </KeyboardAvoidingView>
                    </BottomSheetView>
                </BottomSheet>

            </SafeAreaView>
        </GestureHandlerRootView>

    )
}

export default Slot;