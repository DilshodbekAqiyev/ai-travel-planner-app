import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";


export default function Feedback() {
    const router = useRouter();

    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: "#FFF" }}
            showsVerticalScrollIndicator={false}
        >

            {/* Header */}
            <View
                style={{
                    paddingHorizontal: 30,
                    paddingTop: 45,
                    paddingBottom: 30,
                    backgroundColor: "#E3F0FE",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                }}
            >
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 15
                    }}
                >
                    <TouchableOpacity
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        onPress={() => { router.push("/profile/setting") }}>
                        <Ionicons name="arrow-back" size={32} color="black" />
                    </TouchableOpacity>

                    <Text
                        style={{
                            fontSize: 35,
                            fontFamily: "outfit-medium",
                            textAlign: "center",
                        }}
                    >
                        Feedback
                    </Text>
                </View>

                <Text
                    style={{
                        fontSize: 18,
                        fontFamily: "spacemono-regular",
                        color: "#204E81",
                        paddingHorizontal: 25,
                        paddingTop: 40,
                        lineHeight: 25
                    }}
                >Please tell us about your suggestion or if you had found some bugs.</Text>

            </View>

            {/* Main */}
            <View
                style={{
                    minHeight: "100%",
                    paddingHorizontal: 35,
                    paddingTop: 25
                }}
            >

                {/* Account Settings */}
                <View
                    style={{
                        backgroundColor: "white",
                        // height: 100,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "scroll",
                        padding: 10,
                        paddingBottom: 30,
                        borderRadius: 15,
                        // borderTopLeftRadius: 15,
                        // borderTopRightRadius: 15,
                        shadowColor: "#000",
                        borderBottomColor: Colors.GRAY,
                        // borderWidth: 1,
                        borderBottomWidth: 1,
                        shadowOpacity: 0.1,
                        shadowRadius: 4,
                        elevation: 3
                    }}
                >
                    {/* Title */}

                    <Text
                        style={{
                            marginVertical: 15,
                            width: "90%",
                            fontSize: 20,
                            fontFamily: "outfit",
                        }}>
                        How are you feeling?
                    </Text>

                    <View
                        style={{
                            width: "80%",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                            alignItems: "center",
                            // gap: 10
                        }}
                    >
                        {Array.from({ length: 5 }, (_, i) => (<Ionicons name="star-outline" size={28} color="#4B4B4B" />))}

                    </View>

                    {/* Feedback Input */}
                    <TextInput
                        // underlineColor="transparent"
                        // activeUnderlineColor="transparent"
                        numberOfLines={6}
                        style={{
                            width: "90%",
                            height: 300,
                            borderTopLeftRadius: 15,
                            borderTopRightRadius: 15,
                            borderRadius: 15,
                            padding: 15,
                            // paddingHorizontal: 15,
                            marginVertical: 30,
                            backgroundColor: "#204E81",
                            fontFamily: "outfit",
                            fontSize: 16,
                            color: "#E3F0FE",
                            textAlign: "left",
                            textAlignVertical: "top"
                        }}
                        placeholder="Describe your feedbacks..."
                        placeholderTextColor="#E3F0FE"
                        multiline
                    />

                    <TouchableOpacity
                        style={{
                            backgroundColor: "#204E81",
                            width: 200,
                            height: 54,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 28
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: "spacemono-regular",
                                fontSize: 16,
                                color: "#E3F0FE"
                            }}
                        >Send Feedback</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </ScrollView>
    );
}