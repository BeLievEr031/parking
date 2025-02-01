import { View, Text, SafeAreaView, Image, TextInput, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import profileStyle from '@/styles/profileStyle'
import { AntDesign, EvilIcons } from '@expo/vector-icons'

const profile = () => {
    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 10 }}>
            <KeyboardAvoidingView>
                <Image source={require("../../assets/images/profile.jpg")}
                    resizeMode='cover'
                    style={profileStyle.avatar}
                />
                <Text style={profileStyle.infoText}>Name</Text>
                <View style={profileStyle.inputWrapper}>
                    <AntDesign name='user' size={20} />
                    <TextInput style={profileStyle.input}
                        value='Sandeep Rajak'
                    />
                </View>


                <Text style={[profileStyle.infoText, { marginTop: 20 }]}>Email</Text>
                <View style={profileStyle.inputWrapper}>
                    <EvilIcons name='envelope' size={25} />
                    <TextInput style={profileStyle.input}
                        value='sandyrajak031@gmail.com'
                    />
                </View>
            </KeyboardAvoidingView>

        </SafeAreaView>
    )
}

export default profile