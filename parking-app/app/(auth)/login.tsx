import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Keyboard, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, Redirect, router } from 'expo-router'
import useAuthStore from '@/stores/useAuthStore'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons, EvilIcons } from '@expo/vector-icons'

const Login = () => {
    const { isAuthenticated, login } = useAuthStore();
    const [keyboardShow, setKeyboardShow] = useState(false);
    const [focus, setFocus] = useState({
        emailFocus: false,
        passFocus: false
    })

    useEffect(() => {
        if (isAuthenticated) {
            router.replace("/(tabs)/home")
        }
    }, [isAuthenticated, router])

    const handleLogin = () => {
        login();
    }

    useEffect(() => {
        const showKeyboard = Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardShow(true)
        })

        const hideKeyboard = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardShow(false)
        })
        return () => {
            showKeyboard.remove();
            hideKeyboard.remove();
        }
    }, [])

    return (
        <SafeAreaView style={styles.loginCont}>
            <Image source={require("../../assets/images/login.png")}
                style={[styles.loginImg, {
                    height: !keyboardShow ? 250 : 0,
                    resizeMode: !keyboardShow ? "cover" : 'contain',

                }]}
            />
            <View>
                <Text style={styles.greetText1}>Welcome Back!</Text>
                <Text style={styles.greetText2}>Please Sign in Your Account.</Text>
            </View>
            <View style={[styles.credCont]}>
                <Text style={styles.inputInfoText}>Email</Text>
                <View style={styles.inputWrapper}>
                    <TextInput style={[styles.input]} placeholder='sandyrajak031@gmail.com'
                        onFocus={() => setFocus({ passFocus: false, emailFocus: true })}
                        onBlur={() => setFocus({ ...focus, emailFocus: false })}
                    />
                    <EvilIcons name="envelope" size={30} color={focus.emailFocus ? "#1a73e8" : "#888"} style={styles.icon} />
                </View>
            </View>

            <View style={[styles.credCont]}>
                <Text style={styles.inputInfoText}>Password</Text>
                <View style={styles.inputWrapper}>
                    <TextInput style={[styles.input]} placeholder='12345678'
                        onFocus={() => setFocus({ emailFocus: false, passFocus: true })}
                        onBlur={() => setFocus({ ...focus, passFocus: false })}
                        secureTextEntry
                    />
                    <EvilIcons name="lock" size={30} color={focus.passFocus ? "#1a73e8" : "#888"} style={styles.icon} />
                </View>
            </View>

            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                <Text style={styles.loginText}>Sign In</Text>
            </TouchableOpacity>

            <Link href={"/register"} style={styles.link}>
                <Text style={styles.linkText}>
                    Create an account
                </Text>
            </Link>
        </SafeAreaView >
    )
}

export default Login;

const styles = StyleSheet.create({
    loginCont: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 10
    },

    loginImg: {
        width: "100%",
        marginTop: 20,
    },

    greetText1: {
        fontWeight: "bold",
        fontSize: 30,
        textAlign: 'center',
        marginTop: 15
    },

    greetText2: {
        fontWeight: 400,
        fontSize: 25,
        textAlign: 'center',
        marginTop: 10
    },

    credCont: {
        paddingTop: 20
    },

    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 5,
        width: '100%',
        backgroundColor: '#fff',
    },

    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
        height: 50
    },

    inputInfoText: {
        paddingVertical: 5,
        fontWeight: 600
    },

    icon: {
        marginTop: -8
    },

    loginBtn: {
        width: "100%",
        backgroundColor: "#1a73e8",
        alignSelf: "center",
        marginTop: 20,
        paddingVertical: 12,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    loginText: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
        fontWeight: 600,
    },
    link: {
        marginTop: 10
    },
    linkText: {
        color: "#007BFF",
        fontSize: 15,
        textDecorationLine: 'underline',
    }
})