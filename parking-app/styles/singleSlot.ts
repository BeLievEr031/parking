import { StyleSheet } from "react-native"


const singleSlotStyle = StyleSheet.create({
    slotImg: {
        resizeMode: "cover",
        width: "100%",
        height: 250
    },
    slotInfo: {
        padding: 15
    },
    parkingSlot: {
        fontSize: 25,
        fontFamily: 'NotoSerif_700Bold',
    },
    slotName: {
        fontSize: 19,
        fontFamily: 'Lato_700Bold',
        marginTop: 18
    },
    slotAddress: {
        fontSize: 14,
        fontFamily: 'Lato_400Regular',
        color: "gray",
        marginTop: 8
    },
    slotPrice: {
        marginTop: 10,
        fontFamily: 'Lato_700Bold',
        color: "#1a73e8",
        textAlign: "right",
        fontSize: 18
    }
})

export default singleSlotStyle;