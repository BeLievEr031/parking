import { View, Text, SafeAreaView, TextInput, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native'
import React from 'react'
import searchStyle from '@/styles/searchStyle'
import { AntDesign, EvilIcons } from '@expo/vector-icons'
import { RECENT_ADDED_PARKING_SLOT } from '@/utils/constant'
import homeStyle from '@/styles/homeStyle'
import { Link } from 'expo-router'

const search = () => {
    return (
        <SafeAreaView style={searchStyle.searchCont}>
            <View style={searchStyle.searchContainer}>
                <TextInput style={searchStyle.input}
                    placeholder='Search'
                />
                <TouchableOpacity style={searchStyle.searchIconContainer}
                    activeOpacity={0.6}
                >
                    <EvilIcons name='search' size={30} style={searchStyle.icon} color={"white"} />
                </TouchableOpacity>
            </View>

            <FlatList data={RECENT_ADDED_PARKING_SLOT}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return <View style={searchStyle.parkingSlot}>
                        <Image source={require("../../assets/images/parkingslot.jpg")} style={searchStyle.parkingSlotImg} />

                        <View>
                            <Text style={homeStyle.slotName}>{item.name}</Text>
                            <Text style={homeStyle.slotAddress}>{item.address}</Text>
                            <Text style={homeStyle.slotPrice}>{item.price}/Hours.</Text>
                            {/* <TouchableOpacity>
                                <Text>
                                    Book
                                </Text>
                            </TouchableOpacity> */}
                        </View>

                        <AntDesign name='heart' size={30} style={searchStyle.favIcon} />

                        <Link href={"/(screens)/slot/1"} style={searchStyle.visitIcon}>
                            <AntDesign name='eye' size={30}
                            />
                        </Link>
                    </View>
                }}

                contentContainerStyle={{
                    paddingBottom: 20
                }}
            />
        </SafeAreaView>
    )
}

export default search