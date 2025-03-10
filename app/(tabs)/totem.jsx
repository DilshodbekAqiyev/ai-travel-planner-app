import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { overlay } from "react-native-paper";


export default function Totem() {
  const router = useRouter();

  const TotemPuzzles = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGnmL7311kjEl73b5RyaKnngMrZrIMiUHohQ&s",
      name: "Penang Hill"
    },
    {
      image: "https://platinumcharters.com.my/wp-content/uploads/2022/02/Penang.jpg",
      name: "Chew Jetty"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Gurney_Plaza_at_night.jpg",
      name: "Gurney Plaza"
    },
    {
      image: "https://onpenang.com/wp-content/uploads/2024/01/Kek-Lok-Si-Temple-Penang.jpg",
      name: "Kek Lok Si Temple"
    },
    {
      image: "https://joujoutravels.com/wp-content/uploads/2023/06/street-art-penang-susu-soya-asli-segar-Mural.jpg",
      name: "Penang Street Art"
    },
    {
      image: "https://www.awaygowe.com/wp-content/uploads/2019/10/batu-ferringhi-reasons-featured2.webp",
      name: "Batu Ferringhi Beach"
    },
  ]

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#FFF" }}
      showsVerticalScrollIndicator={false}
    >

      {/* Header */}
      <View
        style={{
          paddingHorizontal: 30,
          paddingBottom: 15,
          backgroundColor: "#E3F0FE",
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontFamily: "outfit-bold",
            textAlign: "center",
            marginTop: 40
          }}
        >
          Totem
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: Colors.GRAY,
            fontFamily: "outfit"
          }}
        >
          Capture landmarks for rewards!
        </Text>

        <View
          style={{
            backgroundColor: "#BBDDFD",
            height: 100,
            padding: 15,
            borderRadius: 24,
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* Completed Places */}
          <TouchableOpacity
            style={{
              width: "45%",
              // backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 10
            }}
          >
            <Image
              source={require("../../assets/images/completed-places.png")}
              style={{ width: 42, height: 42, borderRadius: 5 }}
            />

            <Text
              style={{
                fontSize: 16,
                fontFamily: "outfit-medium",
                color: "#204E81"
              }}
            >
              Completed Places
            </Text>
          </TouchableOpacity>

          {/* Reward History */}
          <TouchableOpacity
            style={{
              width: "45%",
              // backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 10
            }}
          >
            <Image
              source={require("../../assets/images/reward-history.png")}
              style={{ width: 42, height: 42, borderRadius: 5 }}
            />

            <Text
              style={{
                fontSize: 16,
                fontFamily: "outfit-medium",
                color: "#204E81"
              }}
            >
              Reward History
            </Text>
          </TouchableOpacity>

        </View>

      </View>

      {/* Content */}
      <View
        style={{
          minHeight: "100%",
          paddingHorizontal: 30,
          paddingTop: 15
        }}
      >

        {/* Totem Item Container */}
        <View
          style={{
            backgroundColor: "white",
            // height: 100,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            overflow: "scroll",
            padding: 10,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: "outfit-medium",
            }}>
            1. George Town, Penang
          </Text>

          {/* Totem Container */}
          <View
            style={{
              // backgroundColor: "lightblue",
              // minHeight: 250,
              height: 300,
              width: "100%",
              padding: 20,
              // marginTop: 15,
              display: "flex",
              flexWrap: "wrap",
              alignContent: "center",
              justifyContent: "center",
              overflow: "scroll",
              gap: 20
            }}
          >

            {TotemPuzzles.map((item, index) => (
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 5
                }}
              >
                <Image
                  // source={require("../../assets/images/reward-history.png")}
                  source={{ uri: item.image }}
                  style={{ width: 90, height: 90, borderRadius: 100 }}
                />
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{
                    width: 80,
                    fontSize: 14,
                    fontFamily: "outfit-medium",
                    color: "#204E81",
                  }}
                >
                  {item.name}
                </Text>
              </View>
            ))}
          </View>

          <View
            style={{ width: "100%" }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#204E81",
                borderRadius: 30,
                height: 60,
                paddingHorizontal: 15,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text
                numberOfLines={2}
                style={{
                  // width: "100%",
                  fontSize: 14,
                  fontFamily: "outfit-medium",
                  color: "white",
                  textAlign: "center"
                  // flexWrap: "wrap",
                  // alignItems: "flex-start"
                }}>2 more to unlock an Escape Theme Park Day Ticket !!!</Text>
            </TouchableOpacity>
          </View>

          {/* Redeem Totem */}
          <View
            style={{
              width: "100%",
              // backgroundColor: "lightblue",
              marginVertical: 20,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              source={{ uri: "https://cdn.prod.website-files.com/61d6f58347d69acf7aecd077/66e82081f928a945922e28cc_ESCAPE%20Penang%20Photo%205.jpg" }}
              style={{
                width: 180,
                height: 100,
                borderRadius: 12,
              }}
            />

            <TouchableOpacity
              style={{
                backgroundColor: "#E3F0FE",
                borderRadius: 30,
                height: 40,
                marginTop: 20,
                paddingHorizontal: 15,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text
                numberOfLines={2}
                style={{
                  // width: "100%",
                  fontSize: 14,
                  fontFamily: "outfit-medium",
                  color: "#204E81",
                  opacity: 0.4,
                  textAlign: "center"
                  // flexWrap: "wrap",
                  // alignItems: "flex-start"
                }}>Redeem Now</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>

    </ScrollView>
  );
}