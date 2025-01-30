import { NotoSerif_700Bold } from '@expo-google-fonts/noto-serif';
import { Lato_700Bold, Lato_400Regular } from '@expo-google-fonts/lato';
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
    },
    descText: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: "Lato_700Bold"
    },
    description: {
        fontSize: 14,
        textAlign: "justify",
        color: "gray",
        fontFamily: "Lato_400Regular"
    },
    ownerInfoCont: {
        width: "100%",
        marginTop: 10,
        paddingHorizontal: 15,
    },

    operatedText: {
        fontSize: 20,
        fontFamily: "Lato_700Bold",
    },

    ownerInfo: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        marginTop: 15
    },

    ownerName: {
        fontSize: 15,
        fontFamily: "NotoSerif_700Bold"
    },

    phone: {
        color: "gray",
        fontWeight: "bold"
    },

    bookSlotBtn: {
        backgroundColor: "#1a73e8",
        padding: 15,
        width: "90%",
        alignSelf: "center",
        borderRadius: 10,
        marginTop: 30
    },
    bookSlotText: {
        color: "white",
        fontFamily: "NotoSerif_700Bold",
        fontSize: 18,
        textAlign: "center"
    },

    bookSlotBSText: {
        fontSize: 25,
        fontFamily: "NotoSerif_700Bold",
        marginTop: 10,
        marginBottom: 15,
        textAlign: "center"
    },

    BSInput: {
        borderWidth: 1,
        borderColor: "black",
        marginTop: 10,
        borderRadius: 10,
        height: 50
    },
    bookBtn: {
        backgroundColor: "#1a73e8",
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 10
    },
    bookBtnText: {
        fontSize: 18,
        fontFamily: "Lato_700Bold",
        color: "white",
        textAlign: "center"
    }

})

export default singleSlotStyle;