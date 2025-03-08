import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { SearchHotelDetailsProps } from "../hotels/props";
// import { sampleHotelsString } from "./data";
import sampleFoods from "./details.json";
// import { sampleHotels } from "./data";


export default function FoodList() {
    const navigation = useNavigation();
    const [filteredHotels, setFilteredHotels] = useState([]);
    const router = useRouter();

    const params = useLocalSearchParams();
    const hotels: SearchHotelDetailsProps[] = JSON.parse(params.hotels as string);
    // console.log("listofhotels:", hotels);
    // console.log(params.hotels);

    // console.log("sample: ", sampleHotels.length);
    // const _sampleHotels = sampleHotels as SearchHotelDetailsProps[];

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ""
        })
    }, [])

    return (
        <ScrollView style={styles.container}>
            <View style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 25
            }}>
                <Text style={{
                    fontFamily: "outfit-bold",
                    fontSize: 35,
                    marginTop: 25
                }}>Foods</Text>
            </View>

            {/* Back Button */}
            {/* <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity> */}

            {/* Hotel List */}
            <View style={styles.resultsContainer}>
                {(filteredHotels.length > 0 ? filteredHotels : hotels).map((hotel, idx) => (
                    <TouchableOpacity
                        key={idx}
                        style={styles.hotelCard}
                        onPress={() => router.push({ pathname: "/hotels/hotel-detail", params: { hotel: JSON.stringify(hotel) } })}
                    >
                        <Image source={{ uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${hotel.photos[0].photo_reference}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}` }} style={styles.hotelImage} />
                        <View style={styles.hotelInfo}>
                            <Text style={styles.hotelName}>{hotel.name}</Text>
                            <Text style={styles.hotelLocation}>{hotel.formatted_address}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 },
    iconButton: { padding: 5 },
    container: { flex: 1, backgroundColor: "#F8F9FA" },
    backButton: { margin: 15 },
    searchBarContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        marginHorizontal: 15,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    searchIcon: { marginRight: 10 },
    searchBar: { flex: 1, fontSize: 16 },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 15,
        marginTop: 20,
        color: "#333",
    },
    nearbyContainer: { paddingLeft: 15, marginTop: 10 },
    nearbyCard: {
        marginRight: 15,
        alignItems: "center",
        width: 120,
    },
    nearbyImage: {
        width: 120,
        height: 80,
        borderRadius: 8,
    },
    nearbyName: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: "600",
        textAlign: "center",
    },
    resultsContainer: { paddingHorizontal: 15, marginTop: 10 },
    hotelCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    hotelImage: { width: 80, height: 80, borderRadius: 10, marginRight: 10 },
    hotelInfo: { flex: 1 },
    hotelName: { fontSize: 18, fontWeight: "bold" },
    hotelLocation: { fontSize: 14, color: "gray" },
});
