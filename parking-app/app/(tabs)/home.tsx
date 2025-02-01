import { View, Text, TouchableOpacity, SafeAreaView, ImageBackground, Image, FlatList } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import homeStyle from '@/styles/homeStyle'
import { Entypo, Ionicons } from '@expo/vector-icons'
import { RECENT_ADDED_PARKING_SLOT } from '@/utils/constant'
import { IPakingSlot } from '@/types'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'

const home = () => {
    const handleLayout = (event: any) => {
        const { width } = event.nativeEvent.layout;
        console.log(width);

    };
    return (
        <GestureHandlerRootView>
            <ScrollView style={{ flex: 1 }}>
                <SafeAreaView style={homeStyle.homeCont} >
                    <View style={homeStyle.topRow}>
                        <View style={homeStyle.locationCont}>
                            <Ionicons name='location' size={30} />
                            <View>
                                <Text style={homeStyle.locationText}>Location</Text>
                                <Text style={homeStyle.address}>Maitri Residency, Pathal</Text>
                            </View>
                        </View>
                        <Entypo name='bell' size={30} />
                    </View>

                    <View style={[homeStyle.greetCont, { position: 'relative', overflow: 'hidden' }]}>
                        <Image
                            source={require("../../assets/images/homegreetbg.png")}
                            resizeMode='cover'
                            style={
                                homeStyle.homeGreetBgImg
                            } />
                        <Text style={homeStyle.greetMsg}>
                            Hello, Sandeep
                        </Text>
                        <Text style={homeStyle.journeyMessage}>
                            Fresh Start your
                            journey
                        </Text>
                    </View>

                    <View>
                        <View style={homeStyle.recentParkingHeader}>
                            <Text style={homeStyle.headerText}>New Parkings</Text>

                            {/* <Link href="/(screens)/[booking]?booking=123">
                        <Text style={homeStyle.seeAllText}>See All</Text>
                    </Link> */}
                        </View>

                        <View>
                            <FlatList data={RECENT_ADDED_PARKING_SLOT}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({ item }) => {
                                    return <View style={homeStyle.parkingSlotCont}>
                                        <Image source={require("../../assets/images/parkingslot.jpg")}
                                            style={homeStyle.parkingSlotImg}
                                        />

                                        <Text style={[homeStyle.slotName]}>{item.name}</Text>
                                        <Text style={[homeStyle.slotAddress]}>{item.address}</Text>
                                        <Text style={[homeStyle.slotPrice]}>{item.price}/Hours.</Text>
                                    </View>
                                }}
                            />
                        </View>
                    </View>

                    <View>
                        <View style={homeStyle.recentParkingHeader}>
                            <Text style={homeStyle.headerText}>Popular Parkings</Text>
                        </View>
                        <View>
                            <FlatList data={RECENT_ADDED_PARKING_SLOT}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({ item }) => {
                                    return <View style={homeStyle.parkingSlotCont}>
                                        <Image source={require("../../assets/images/parkingslot.jpg")}
                                            style={homeStyle.parkingSlotImg}
                                        />

                                        <Text style={[homeStyle.slotName]}>{item.name}</Text>
                                        <Text style={[homeStyle.slotAddress]}>{item.address}</Text>
                                        <Text style={[homeStyle.slotPrice]}>{item.price}/Hours.</Text>
                                    </View>
                                }}
                            />
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </GestureHandlerRootView>
    )
}

export default home