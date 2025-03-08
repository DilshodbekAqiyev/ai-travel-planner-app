import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import sampleAttractions from "./details.json";
import { SearchHotelDetailsProps } from "../hotels/props";
import { SearchItems } from "../hotels/search";

export default function AttractionSearch() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredAttractions, setFilteredAttractions] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const router = useRouter();

    // set as false if want to use api
    const isDebug = true;

    const _sampleAttractions = sampleAttractions as SearchHotelDetailsProps[];

    const attractions = [
        { id: 1, name: "Petronas Towers", location: "Kuala Lumpur, Malaysia", image: "https://www.petronastwintowers.com.my/wp-content/uploads/2024/02/card_3.png" },
        { id: 2, name: "Batu Caves", location: "Gombak, Malaysia", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Batu_Caves_stairs_2022-05.jpg/1200px-Batu_Caves_stairs_2022-05.jpg" },
        { id: 3, name: "Menara Kuala Lumpur", location: "Kuala Lumpur, Malaysia", image: "https://media1.thrillophilia.com/filestore/6v7exmna9kilp330wbukzmajcibl_shutterstock_1095675803.jpg" },
        { id: 4, name: "Sunway Lagoon", location: "Selangor, Malaysia", image: "https://images.trvl-media.com/lodging/16000000/15070000/15066000/15065941/4610f0aa.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill" },
    ];

    const nearbyAttractions = [
        { id: 5, name: "KL Tower Mini Zoo", location: "Kuala Lumpur, Malaysia", image: "https://image-tc.galaxy.tf/wijpeg-5f4er1felb0m473w7lih9obdw/kl-tower-mini-zoo.jpg" },
        { id: 6, name: "Aquaria KLCC", location: "Kuala Lumpur, Malaysia", image: "https://media1.thrillophilia.com/filestore/yst72aqtl78wrlwihlyghq815hvd_1581765559_shutterstock_508380913.jpg?w=400&dpr=2" },
        { id: 7, name: "Thean Hou Temple", location: "Kuala Lumpur, Malaysia", image: "https://www.asiakingtravel.com/cuploads/files/Kuala-Lumpur-Thean-Hou-Temple-1(1).jpg" },
    ];

    const handleSearch = async (text: string) => {
        if (isDebug) {
            router.push({ pathname: "/attractions/att-list", params: { hotels: JSON.stringify(_sampleAttractions) } })
            return;
        }
        if (isFetching) return;
        setIsFetching(true);
        console.log("Input:", text);

        const hotels = await SearchItems(text);
        console.log("Search result:", hotels);

        setIsFetching(false);
        // console.log(hotels);

        router.push({ pathname: "/hotels/hotel-list", params: { hotels: JSON.stringify(hotels) } })
    };

    return (
        <ScrollView style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={() => router.push("/explore")}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

            {/* Search Bar */}
            <View style={styles.searchBarContainer}>
                <Ionicons name="search" size={24} color="gray" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchBar}
                    placeholder="Search attractions"
                    value={searchQuery}
                    onChangeText={(text) => { setSearchQuery(text) }}
                />
                <TouchableOpacity onPress={() => { handleSearch(searchQuery) }}>
                    <Ionicons name="navigate-outline" size={24} color="gray" style={styles.searchIcon} />
                </TouchableOpacity>
            </View>

            {/* Nearby Attractions Section */}
            <Text style={styles.sectionTitle}>Nearby Attractions</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.nearbyContainer}>
                {_sampleAttractions.slice(0, 4).map((attraction, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.nearbyCard}
                        onPress={() => router.push({ pathname: "/attractions/att-detail", params: { attraction: JSON.stringify(attraction) } })}
                    >
                        <Image source={{ uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${attraction.photos[0].photo_reference}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}` }} style={styles.nearbyImage} />
                        <Text style={styles.nearbyName}>{attraction.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Attraction List */}
            <View style={styles.resultsContainer}>
                {(_sampleAttractions.slice(4, 8)).map((attraction, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.attractionCard}
                        onPress={() => router.push({ pathname: "/attractions/att-detail", params: { attraction: JSON.stringify(attraction) } })}
                    >
                        <Image source={{ uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${attraction.photos[0].photo_reference}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}` }} style={styles.attractionImage} />
                        <View style={styles.attractionInfo}>
                            <Text style={styles.attractionName}>{attraction.name}</Text>
                            <Text style={styles.attractionLocation}>{attraction.formatted_address}</Text>
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
    attractionCard: {
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
    attractionImage: { width: 80, height: 80, borderRadius: 10, marginRight: 10 },
    attractionInfo: { flex: 1 },
    attractionName: { fontSize: 18, fontWeight: "bold" },
    attractionLocation: { fontSize: 14, color: "gray" },
});
