import { StyleSheet } from "react-native"

const searchStyle = StyleSheet.create({
    searchCont: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 10
    },

    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        gap: 10
    },

    input: {
        flex: 1,
        height: 50,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
    },

    searchIconContainer: {
        borderRadius: 8,
        backgroundColor: '#1a73e8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50
    },

    icon: {
        marginTop: -5,
    },

    parkingSlot: {
        height: 130,
        width: "100%",
        borderWidth: 1,
        borderColor: '#1a73e8',
        marginVertical: 5,
        borderRadius: 15,
        backgroundColor: "rgba(123, 122, 122, 0.1)",
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        position: "relative"
    },

    parkingSlotImg: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 10

    },

    favIcon: {
        position: "absolute",
        right: 10,
        top: 10
    },
    visitIcon: {
        position: "absolute",
        right: 10,
        bottom: 10,
        color: "#1a73e8"
    }

})


export default searchStyle;