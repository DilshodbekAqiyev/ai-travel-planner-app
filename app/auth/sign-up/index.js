import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from "./../../../constants/Colors";
import { Ionicons } from '@expo/vector-icons';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../configs/FirebaseConfig';


export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fullName, setFullName] = useState();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  const createAccount = () => {
    if (!email || !password || !fullName) {
      ToastAndroid.show("Please enter all details", ToastAndroid.BOTTOM);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        router.replace("/mytrip");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);

        // ...
      });
  }

  return (
    <View style={{
      // padding: 25,
      // paddingTop: 40,
      // backgroundColor: Colors.WHITE,
      // height: "100%"
      backgroundColor: "#046CB8",
      height: "100%",
      width: "100%",
      paddingHorizontal: 25,
      alignItems: "center"
    }}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{
        fontFamily: "outfit-bold",
        fontSize: 40,
        marginTop: 50,
        color: "white"
      }}>Create Account</Text>

      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 24,
          marginTop: 20,
          color: "white"
        }}
      >Hello traveller,</Text>

      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 16,
          color: "white",
          marginTop: 15
        }}
      >you are just one step away from your first step!</Text>

      {/* User Full Name */}
      <View style={{
        marginTop: 50,
        width: "100%"
      }}>
        <Text style={{
          fontFamily: "outfit",
          color: "white",
          fontSize: 16
        }}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter Full Name'
          placeholderTextColor={"#023B64"}
          onChangeText={(value) => setFullName(value)}
        />
      </View>

      {/* Email */}
      <View style={{
        marginTop: 20,
        width: "100%"
      }}>
        <Text style={{
          fontFamily: "outfit",
          color: "white",
          fontSize: 16
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
          color: "white",
          fontSize: 16
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
          marginTop: 10,
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
        >Already have an account?</Text>
        <TouchableOpacity
          onPress={() => { router.push("/auth/sign-in") }}
        >
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: 14,
              color: "#0C2541",
              fontStyle: "italic",
              // textDecorationLine: "underline"
            }}
          >Sign In</Text>


        </TouchableOpacity>

        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 14,
            color: "white"
          }}
        >instead</Text>
      </View>

      {/* Create Account Button */}
      <TouchableOpacity onPress={createAccount} style={{
        padding: 20,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 15,
        marginTop: 50,
        width: "100%"
      }}>
        <Text style={{
          color: Colors.WHITE,
          textAlign: "center"
        }}>Create Account</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  input: {
    marginTop: 5,
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.GRAY,
    fontFamily: "outfit",
    backgroundColor: "#E3F0FE"
  }
})