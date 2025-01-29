import { Image, Keyboard, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import useAuthStore from '@/stores/useAuthStore'
import { Link, Redirect, router } from 'expo-router';
import { EvilIcons } from '@expo/vector-icons';

const Register = () => {
    const { isAuthenticated } = useAuthStore();
    const [keyboardShow, setKeyboardShow] = useState(false);
    const [focus, setFocus] = useState({
        emailFocus: false,
        passFocus: false
    })

    useEffect(() => {
        console.log("i am from register");

        if (isAuthenticated) {
            router.replace("/(tabs)/home")
        }
    }, [isAuthenticated, router])


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
        <SafeAreaView style={styles.registerCont}>
            <Image source={require("../../assets/images/register.png")}
                style={[styles.signImg, {
                    height: !keyboardShow ? 280 : 0,
                    resizeMode: 'contain',

                }]}
            />

            <View>
                <Text style={styles.greetText1}>Get Started Now!</Text>
                <Text style={styles.greetText2}>Fill in your details to create your account.</Text>
            </View>

            <View style={styles.userInfoCont}>
                <View style={styles.userInfo}>
                    <View style={{
                        width: "50%"
                    }}>
                        <Text>First Name</Text>
                        <View style={styles.inputWrapper}>
                            <TextInput style={[styles.input]} placeholder='Sandeep'
                                onFocus={() => setFocus({ emailFocus: false, passFocus: true })}
                                onBlur={() => setFocus({ ...focus, passFocus: false })}
                                secureTextEntry
                            />
                        </View>
                    </View>
                    <View style={{
                        width: "50%"
                    }}>
                        <Text>Last Name</Text>
                        <View style={styles.inputWrapper}>
                            <TextInput style={[styles.input]} placeholder='Rajak'
                                onFocus={() => setFocus({ emailFocus: false, passFocus: true })}
                                onBlur={() => setFocus({ ...focus, passFocus: false })}
                            />
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.inputInfoText}>Email</Text>
                    <View style={styles.inputWrapper}>
                        <TextInput style={[styles.input]} placeholder='sandyrajak031@gmail.com'
                            onFocus={() => setFocus({ passFocus: false, emailFocus: true })}
                            onBlur={() => setFocus({ ...focus, emailFocus: false })}
                        />
                        <EvilIcons name="envelope" size={30} color={focus.emailFocus ? "#1a73e8" : "#888"} style={styles.icon} />
                    </View>
                </View>
            </View>
            <View>
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

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>Register</Text>
            </TouchableOpacity>

            <Link href={"/login"} style={styles.link}>
                <Text>
                    Alreday have an account,
                </Text>
                <Text style={styles.linkText}>
                    Login
                </Text>
            </Link>

        </SafeAreaView>
    )
}

export default Register

const styles = StyleSheet.create({
    registerCont: {
        paddingHorizontal: 10
    },

    signImg: {
        width: "100%",
        marginTop: 20,
    },

    greetText1: {
        fontWeight: "bold",
        fontSize: 25,
        textAlign: 'center',
    },

    greetText2: {
        fontWeight: 400,
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10
    },

    userInfoCont: {
        marginTop: 20
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

    userInfo: {
        flexDirection: "row",
        gap: 5
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
        textTransform: "capitalize",
        textDecorationLine: 'underline',
        marginLeft: 25
    }
})