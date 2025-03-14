// Prerequisites 
// 1. Make sure firestore has a new "users" collection
// 2. Add new section of rule to firestore: 
/*
  match /users/{userId} {
    allow read, update: if request.auth.uid == userId;
    allow create: if request.auth.uid != null;
  }
*/
// 3. Modified a section of code in sign-up index.js and added some imports
// 4. Added a settings icon in assets/images
// 5. The page to edit profile info is is called profileEdit.jsx under /app

import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Alert, TextInput } from 'react-native';
import { useRouter, useFocusEffect } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../configs/FirebaseConfig";
import { Ionicons } from '@expo/vector-icons';


export default function ProfileView() {
  // const [userData, setUserData] = useState({
  //   fullName: '',
  //   bio: '',
  //   accountCreation: '',
  //   points: 0,
  // });

  const router = useRouter();
  const user = auth.currentUser;
  const creationDate = user.metadata.creationTime;
  const lastSignInTime = extractDate(user.metadata.lastSignInTime);

  const Achievements = [
    {
      title: "Write your first review",
      description: "Unlock review milestones"
    },
    {
      title: "Unlock your first 1000k steps",
      description: "Unlock totem reward milestones"
    }
  ]

  console.log("Current user in profile.jsx:", user);
  // console.log(user?.metadata?.creationTime);

  function extractDate(dateString) {
    const match = dateString.match(/\b\d{1,2} \w{3} \d{4}\b/);
    return match ? match[0] : null;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Settings Icon on Top Right */}
      <View
        style={{
          // backgroundColor: "lightblue",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity
          onPress={() => router.push("/profile/setting")} // Navigate to settings path
        >
          <Image source={require("./../../assets/images/settings-icon.png")}
            style={{
              width: 35,
              height: 35
            }}
          />
        </TouchableOpacity>


      </View>


      {/* Username */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 20
        }}
      >
        <Ionicons name="person-circle" size={68} color={Colors.PRIMARY} />

        <View
          style={{
            width: "80%",
            marginLeft: 20
            // backgroundColor: "lightblue"
          }}
        >
          <Text style={{
            fontFamily: "outfit-medium",
            fontSize: 24,
            color: Colors.BLACK,
          }}>{user.displayName ?? user.email.split("@")[0]}</Text>

          {/* Account Creation Date */}
          <Text style={{
            fontFamily: "outfit",
            fontSize: 16,
            color: Colors.GRAY,
          }}>Joined at {extractDate(creationDate)}</Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              marginTop: 5
            }}
          >
            <Ionicons name="location-sharp" size={16} color={Colors.PRIMARY} />
            <Text>Shah Alam, Malaysia</Text>
          </View>
        </View>


      </View>

      <TextInput
        numberOfLines={2}
        style={{
          height: 80,
          borderRadius: 6,
          padding: 15,
          marginVertical: 20,
          backgroundColor: "#F8F8F8",
          fontFamily: "outfit",
          fontSize: 18,
          color: Colors.dark,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 5,
        }}
        placeholder="Share a little about yourself so other travellers can get to know you!"
        placeholderTextColor={Colors.GRAY}
        multiline
      />

      {/* Your Achievements */}
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          // height: 90,
          borderRadius: 6,
          padding: 15,
          marginVertical: 20,
          backgroundColor: "#F8F8F8",
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 5,
        }}
      >
        {/* Achievement Heading */}
        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 5,
            paddingBottom: 5,
            // borderBottomWidth: 1,
            // borderBottomColor: "#D2D2D3"
          }}
        >
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: 18,
              color: "black",
              marginBottom: 5,
            }}
          >Your Achievements</Text>
          <TouchableOpacity>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 18,
                color: "black",
                marginBottom: 5,
                textDecorationLine: "underline"
              }}
            >View All</Text>
          </TouchableOpacity>

        </View>

        {Achievements.map((item) => (
          <View
            style={{
              width: "100%",
              // backgroundColor: "lightgray",
              borderTopWidth: 1,
              borderTopColor: "#D2D2D3",
              height: 70,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 10
            }}
          >
            <Image source={require("./../../assets/images/lock.png")} />
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                width: "95%"
              }}
            >
              <Text
                style={{
                  fontFamily: "outfit",
                  fontSize: 16
                }}
              >{item.title}</Text>
              <Text
                style={{
                  fontFamily: "outfit",
                  fontSize: 14,
                  color: "#7D848D"
                }}
              >{item.description}</Text>
            </View>
          </View>
        ))}

      </View>

      {/*My rewards*/}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          height: 90,
          borderRadius: 6,
          padding: 15,
          marginVertical: 20,
          backgroundColor: "#F8F8F8",
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 5,
        }}
      >

        <View style={{
          // backgroundColor: "blue",
          display: "flex",
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 20
        }}>

          <View
            style={{
              // backgroundColor: "lightblue",
            }}
          >
            {/* Display points */}
            <View
              style={{
                // backgroundColor: "lightblue",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 5
              }}
            >
              <Text
                style={{
                  color: Colors.BLACK,
                  textAlign: "left",
                  fontFamily: "outfit",
                  fontSize: 36,
                }}
              >
                3681
              </Text>

              <Text
                style={{
                  color: Colors.BLACK,
                  textAlign: "left",
                  fontFamily: "outfit",
                  fontSize: 24,
                }}>points</Text>
            </View>

            {/* Last Updated Date */}
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 16,
                color: Colors.GRAY,
              }}
            >Last Updated {lastSignInTime}</Text>
          </View>

          {/* My Rewards Button */}
          <TouchableOpacity
            onPress={() => router.push("/screens/rewards")}
            style={{
              padding: 10,
              backgroundColor: Colors.WHITE,
              borderRadius: 25,
              shadowColor: "#000",
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 5,
            }}>

            <Text
              style={{
                color: Colors.GRAY,
                textAlign: "center",
                fontFamily: "outfit",
                fontSize: 16,
              }}>My Rewards</Text>

          </TouchableOpacity>

        </View>

      </View>

      {/*Sign out button*/}
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // position: "absolute",
          // bottom: 0,
          paddingTop: 50
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#204E81",
            height: 54,
            width: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10
          }}
          onPress={() => {
            // console.log("Signout");
            router.replace({
              pathname: "/auth/sign-in",
              params: { signout: true }
            })
          }}>
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: "center",
              fontFamily: "outfit",
              fontSize: 16,
            }}>Sign Out</Text>
        </TouchableOpacity>
      </View>


    </ScrollView >
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 55,
    backgroundColor: Colors.WHITE,
    height: "100%",
  },

  settingsIcon: {
    position: 'absolute',
    top: 55,
    right: 30,
    zIndex: 10,
  },

  title: {
    // backgroundColor: "blue",
    fontSize: 35,
    fontFamily: "outfit-bold",
    textAlign: "center",
  },

  label: {
    fontFamily: "outfit",
    fontSize: 18,
    color: Colors.GRAY,
    marginBottom: 5,
  },

  button: {
    marginTop: 40,
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 15,
  },

  buttonText: {
    color: Colors.WHITE,
    textAlign: "center",
    fontFamily: "outfit",
    fontSize: 18,
  },
});