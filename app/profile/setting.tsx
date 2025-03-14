import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { overlay } from "react-native-paper";


export default function Settings() {
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
                    paddingBottom: 60,
                    backgroundColor: "#E3F0FE",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
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
                    onPress={() => { router.push("/(tabs)/profile") }}>
                    <Ionicons name="arrow-back" size={32} color="black" />
                </TouchableOpacity>

                <Text
                    style={{
                        fontSize: 35,
                        fontFamily: "outfit-medium",
                        textAlign: "center",
                    }}
                >
                    Settings
                </Text>

            </View>

            {/* Main */}
            <View
                style={{
                    minHeight: "100%",
                    paddingHorizontal: 35,
                    paddingTop: 15
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
                        alignItems: "flex-start",
                        overflow: "scroll",
                        padding: 10,
                        paddingBottom: 30,
                        // borderRadius: 10,
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15,
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
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 10,
                            paddingTop: 15,
                            paddingBottom: 25
                        }}
                    >
                        <Ionicons name="person-circle" size={36} color="#204E81" />


                        <Text
                            style={{
                                fontSize: 20,
                                fontFamily: "outfit",
                            }}>
                            Account Settings
                        </Text>
                    </View>

                    {/* Operations */}
                    <TouchableOpacity
                        style={{
                            width: "100%",
                            paddingHorizontal: 10,
                            paddingVertical: 15,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: 10
                        }}
                    >
                        <Text
                            style={{
                                width: "full",
                                fontSize: 18,
                                fontFamily: "spacemono-regular",
                                color: "#204E81"
                            }}>
                            Edit Profile
                        </Text>

                        <Ionicons name="chevron-forward-outline" size={20} color="#4B4B4B" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            width: "100%",
                            paddingHorizontal: 10,
                            paddingVertical: 15,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: 10
                        }}
                    >
                        <Text
                            style={{
                                width: "full",
                                fontSize: 18,
                                fontFamily: "spacemono-regular",
                                color: "#204E81"
                            }}>
                            Change Password
                        </Text>

                        <Ionicons name="chevron-forward-outline" size={20} color="#4B4B4B" />
                    </TouchableOpacity>

                </View>

                {/* More */}
                <View
                    style={{
                        backgroundColor: "white",
                        // height: 100,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        overflow: "scroll",
                        marginTop: 10,
                        padding: 10,
                        paddingBottom: 80,
                        // borderRadius: 10,
                        borderBottomLeftRadius: 15,
                        borderBottomRightRadius: 15,
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
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 10,
                            paddingTop: 15,
                            paddingBottom: 10
                        }}
                    >
                        <Ionicons name="information-circle" size={36} color="#204E81" />


                        <Text
                            style={{
                                fontSize: 20,
                                fontFamily: "outfit",
                            }}>
                            More
                        </Text>
                    </View>

                    {/* Operations */}
                    <TouchableOpacity
                        style={{
                            width: "100%",
                            paddingHorizontal: 10,
                            paddingVertical: 15,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: 10
                        }}
                        onPress={() => { router.push("/profile/feedback") }}
                    >
                        <Text
                            style={{
                                width: "full",
                                fontSize: 18,
                                fontFamily: "spacemono-regular",
                                color: "#204E81"
                            }}>
                            Send Feedback
                        </Text>

                        <Ionicons name="chevron-forward-outline" size={20} color="#4B4B4B" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            width: "100%",
                            paddingHorizontal: 10,
                            paddingVertical: 15,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: 10
                        }}
                    >
                        <Text
                            style={{
                                width: "full",
                                fontSize: 18,
                                fontFamily: "spacemono-regular",
                                color: "#204E81"
                            }}>
                            About Us
                        </Text>

                        <Ionicons name="chevron-forward-outline" size={20} color="#4B4B4B" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            width: "100%",
                            paddingHorizontal: 10,
                            paddingVertical: 15,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: 10
                        }}
                    >
                        <Text
                            style={{
                                width: "full",
                                fontSize: 18,
                                fontFamily: "spacemono-regular",
                                color: "#204E81"
                            }}>
                            Privacy Policy
                        </Text>

                        <Ionicons name="chevron-forward-outline" size={20} color="#4B4B4B" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            width: "100%",
                            paddingHorizontal: 10,
                            paddingVertical: 15,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: 10
                        }}
                    >
                        <Text
                            style={{
                                width: "full",
                                fontSize: 18,
                                fontFamily: "spacemono-regular",
                                color: "#204E81"
                            }}>
                            Help Centre
                        </Text>

                        <Ionicons name="chevron-forward-outline" size={20} color="#4B4B4B" />
                    </TouchableOpacity>

                </View>

            </View>

        </ScrollView>
    );
}