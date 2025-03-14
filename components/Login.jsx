import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

export default function Login() {

    const router = useRouter();
    return (
        <View
            style={{
                backgroundColor: "#046CB8",
                height: "100%",
                paddingHorizontal: 50,
                alignItems: "center"
            }}
        >
            <Image source={require("./../assets/images/WeJustGo Logo.png")}
                style={{
                    paddingTop: 300,
                    width: 350,
                    resizeMode: "contain"
                }}
            />

            <Text style={{
                fontSize: 30,
                fontFamily: "outfit",
                textAlign: "center",
                color: "white",
                // marginTop: 20
            }}>Welcome,</Text>

            <Text style={{
                fontFamily: "outfit",
                fontSize: 18,
                textAlign: "center",
                color: "white",
                marginTop: 0,
                fontStyle: "italic"
            }}>your all in one travel planner</Text>

            <TouchableOpacity style={styles.button}
                onPress={() => router.push('auth/sign-in')}
            >
                <Text style={{
                    color: Colors.WHITE,
                    textAlign: "center",
                    fontFamily: "outfit",
                    fontSize: 17
                }}>Get Started</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        marginTop: -20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: '100%',
        padding: 25,
    },

    button: {
        position: "absolute",
        bottom: 100,
        padding: 15,
        width: "100%",
        backgroundColor: Colors.PRIMARY,
        borderRadius: 99,
        marginTop: "20%"
    }
})  