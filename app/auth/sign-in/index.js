import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { Colors } from "./../../../constants/Colors";
import { Ionicons } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../configs/FirebaseConfig';

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();

  const { signout } = useLocalSearchParams();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  const onSignIn = () => {
    if (!email || !password) {
      ToastAndroid.show("Please Enter Email & Password", ToastAndroid.BOTTOM);
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        router.replace("/mytrip");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        if (errorCode == "auth/invalid-credential") {
          ToastAndroid.show("Invalid credentials", ToastAndroid.LONG);
        }
      });
  }

  return (
    <View style={{
      backgroundColor: "#046CB8",
      height: "100%",
      width: "100%",
      paddingHorizontal: 25,
      alignItems: "center"
    }}>

      <Image source={require("../../../assets/images/WeJustGo Logo.png")}
        style={{
          paddingTop: 300,
          width: 350,
          resizeMode: "contain"
        }}
      />

      {/* Email */}
      <View style={{
        // marginTop: 50,
        width: "100%",
        // backgroundColor: "white"
      }}>
        <Text style={{
          fontFamily: "outfit",
          color: "white"
        }}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter Email'
          placeholderTextColor={"#023B64"}
          onChangeText={(value) => setEmail(value)}
        />
      </View>

      {/* Password */}
      <View style={{
        marginTop: 20,
        width: "100%"
      }}>
        <Text style={{
          fontFamily: "outfit",
          color: "white"
        }}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder='Enter Password'
          placeholderTextColor={"#023B64"}
          onChangeText={(value) => setPassword(value)}
        />
      </View>

      <View
        style={{
          marginTop: 25,
          paddingVertical: 10,
          width: "100%",
          borderBottomColor: "white",
          borderBottomWidth: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 5
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 14,
            color: "white"
          }}
        >Don't have an account? </Text>
        <TouchableOpacity
        onPress={() => {router.push("/auth/sign-up")}}
        >
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: 14,
              color: "#0C2541",
              fontStyle: "italic",
              // textDecorationLine: "underline"
            }}
          >Sign Up</Text>
        </TouchableOpacity>
      </View>

      {/* Sign In Button */}
      <TouchableOpacity onPress={onSignIn} style={{
        // padding: 10,
        // height: 64,
        // backgroundColor: Colors.PRIMARY,
        // borderRadius: 99,
        // marginTop: 50,
        // width: "100%",
        // justifyContent: "center"
        position: "absolute",
        bottom: 100,
        padding: 15,
        width: "100%",
        backgroundColor: Colors.PRIMARY,
        borderRadius: 99,
        marginTop: "20%"
      }}>
        <Text style={{
          color: Colors.WHITE,
          textAlign: "center",
          fontSize: 24,
          fontFamily: "outfit-medium",
        }}>Login</Text>
      </TouchableOpacity>

    </View>
  )
}


const styles = StyleSheet.create({
  input: {
    height: 56,
    padding: 20,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.GRAY,
    fontFamily: "outfit",
    backgroundColor: "#E3F0FE"
  }
})