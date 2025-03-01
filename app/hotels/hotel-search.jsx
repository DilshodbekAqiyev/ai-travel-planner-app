import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router"; 

export default function HotelSearch() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredHotels, setFilteredHotels] = useState([]);
    const router = useRouter();

    const hotels = [
        { id: 1, name: "Mandarin Oriental", location: "Kuala Lumpur, Malaysia", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/1d/c8/3b/hotel-exterior.jpg" },
        { id: 2, name: "The Ritz-Carlton", location: "Kuala Lumpur, Malaysia", image: "https://www.theritzcarlton.com/content/dam/ritzcarlton/hotels/asia-pacific/73/hero/KULRZ_Exterior_NightView.jpg" },
        { id: 3, name: "Four Seasons", location: "Kuala Lumpur, Malaysia", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/f5/f1/1b/four-seasons-hotel-kuala.jpg" },
        { id: 4, name: "Shangri-La Hotel", location: "Kuala Lumpur, Malaysia", image: "https://www.shangri-la.com/uploadedImages/Shangri-la_Hotels/Kuala_Lumpur/shangri-la-hotel-kuala-lumpur.jpg" },
    ];

    const nearbyHotels = [
        { id: 5, name: "Grand Hyatt", location: "Kuala Lumpur, Malaysia", image: "https://www.hyatt.com/content/dam/hyatt/hyattdam/images/2019/10/07/0941/Grand-Hyatt-Kuala-Lumpur-P002-Hotel-Exterior.jpg" },
        { id: 6, name: "St. Regis", location: "Kuala Lumpur, Malaysia", image: "https://www.marriott.com/content/dam/marriott-renditions/KULXR/kulxr-exterior-0030-hor-feat.jpg" },
        { id: 7, name: "The Westin", location: "Kuala Lumpur, Malaysia", image: "https://www.marriott.com/content/dam/marriott-renditions/KULWI/kulwi-exterior-0003-hor-feat.jpg" },
    ];

    const handleSearch = (text) => {
        setSearchQuery(text);
        if (text.trim() === "") {
            setFilteredHotels([]);
        } else {
            const filtered = hotels.filter(hotel =>
                hotel.name.toLowerCase().includes(text.toLowerCase()) ||
                hotel.location.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredHotels(filtered);
        }
    };

    return (
        <ScrollView style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

            {/* Search Bar */}
            <View style={styles.searchBarContainer}>
                <Ionicons name="search" size={24} color="gray" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchBar}
                    placeholder="Search hotels"
                    value={searchQuery}
                    onChangeText={handleSearch}
                />
            </View>

            {/* Nearby Hotels Section */}
            <Text style={styles.sectionTitle}>Nearby Hotels</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.nearbyContainer}>
                {nearbyHotels.map((hotel) => (
                    <TouchableOpacity
                        key={hotel.id}
                        style={styles.nearbyCard}
                        onPress={() => router.push({ pathname: "/hotels/hotel-detail", params: { id: hotel.id } })}
                    >
                        <Image source={{ uri: hotel.image }} style={styles.nearbyImage} />
                        <Text style={styles.nearbyName}>{hotel.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Hotel List */}
            <View style={styles.resultsContainer}>
                {(filteredHotels.length > 0 ? filteredHotels : hotels).map((hotel) => (
                    <TouchableOpacity
                        key={hotel.id}
                        style={styles.hotelCard}
                        onPress={() => router.push({ pathname: "/hotels/hotel-detail", params: { id: hotel.id } })}
                    >
                        <Image source={{ uri: hotel.image }} style={styles.hotelImage} />
                        <View style={styles.hotelInfo}>
                            <Text style={styles.hotelName}>{hotel.name}</Text>
                            <Text style={styles.hotelLocation}>{hotel.location}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
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
