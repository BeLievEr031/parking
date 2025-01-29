import { StyleSheet } from "react-native"
const homeStyle = StyleSheet.create({
    homeCont: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 10,
        paddingTop: 10
    },
    topRow: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between"
    },

    locationCont: {
        flexDirection: "row",
        alignItems: 'center',
        gap: 5
    },

    locationText: {
        fontWeight: "bold",
        fontSize: 14,
        color: "gray"
    },

    address: {
        fontSize: 13
    },

    greetCont: {
        width: "100%",
        height: 150,
        marginTop: 35,
        borderRadius: 20,
        justifyContent: "center",
        paddingHorizontal: 30,
        backgroundColor: "#1a73e8"
    },

    greetMsg: {
        fontSize: 20,
        color: "white",
        fontFamily: "NotoSerif_700Bold",
    },

    journeyMessage: {
        fontSize: 30,
        color: "white",
        fontFamily: "Lato_900Black",
        marginTop: 5
    },

    homeGreetBgImg: {
        width: "100%",
        height: "100%",
        position: "absolute",
        right: 0,
        top: 40,
        transform: "scale(1.8)"
    },

    recentParkingHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: 'center',
        marginTop: 12,
        marginBottom: 10,
        paddingHorizontal: 10
    },

    headerText: {
        fontSize: 24,
        fontWeight: 700,
        fontFamily: 'Lato_400Regular'
    },

    seeAllText: {
        fontSize: 17,
        fontFamily: 'Lato_400Regular'
    },

    parkingSlotCont: {
        marginHorizontal: 10
    },

    parkingSlotImg: {
        width: 200,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 10
    },

    slotName: {
        fontSize: 18,
        fontFamily: "Lato_900Black",
        marginTop: 5
    },

    slotAddress: {
        fontSize: 16,
        fontFamily: "Lato_700Bold",
        color: "gray",
        marginTop: 2,
    },

    slotPrice: {
        color: "#1a73e8",
        fontFamily: "Lato_900Black",
        fontSize: 14,
        marginTop: 5
    }

})


export default homeStyle;