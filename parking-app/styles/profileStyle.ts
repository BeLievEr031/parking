import { NotoSerif_400Regular } from '@expo-google-fonts/noto-serif';
import { Lato_700Bold } from '@expo-google-fonts/lato';
import { StyleSheet } from "react-native";

const profileStyle = StyleSheet.create({
    avatar: {
        width: 180,
        height: 180,
        borderRadius: 100,
        alignSelf: "center",
        marginTop: 30
    },
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        borderColor: "black",
        borderWidth: 1,
        height: 55,
        borderRadius: 10,
        gap: 10,
        paddingHorizontal: 10
    },
    infoText: {
        fontFamily: "NotoSerif_700Regular",
        fontSize: 20,
        marginVertical: 7

    },

    input: {
        flex: 1,
        fontSize: 20,
        fontFamily: "Lato_700Bold",
        color: "gray"
    }
})

export default profileStyle;