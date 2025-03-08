import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import sampleFoods from "./details.json";
import { SearchHotelDetailsProps } from "../hotels/props";
import { SearchItems } from "../hotels/search";

export default function FoodSearch() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const router = useRouter();

    // set as false if want to use api
    const isDebug = true;

    const _sampleFoods = sampleFoods as SearchHotelDetailsProps[];

    const restaurants = [
        { id: 1, name: "Jogoya", location: "Kuala Lumpur, Malaysia", image: "https://www.wonderfulmalaysia.com/food/files/2012/01/jogoya-japanese-buffet-restaurant-starhill-gallery-8.jpg" },
        { id: 2, name: "Nobu Kuala Lumpur", location: "Kuala Lumpur, Malaysia", image: "https://media.timeout.com/images/105239239/750/422/image.jpg" },
        { id: 3, name: "Dewakan", location: "Kuala Lumpur, Malaysia", image: "https://www.theworlds50best.com/discovery/filestore/jpg/Dewakan-Kuala-Lumpar-1.jpg" },
        { id: 4, name: "Marini's on 57", location: "Kuala Lumpur, Malaysia", image: "https://marinisgroup.com/wp-content/uploads/2022/07/Marinison57_Bar-scaled-2.jpg" },
    ];

    const nearbyRestaurants = [
        { id: 5, name: "Bijan Bar & Restaurant", location: "Kuala Lumpur, Malaysia", image: "https://res.klook.com/image/upload/c_fill,w_750,h_563/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/gnogqce5g9rtqa9fuzwk.jpg" },
        { id: 6, name: "Fuego at Troika Sky Dining", location: "Kuala Lumpur, Malaysia", image: "https://www.theyumlist.net/wp-content/uploads/2024/12/Fuego-Troika-Sky-Dining-1.jpeg" },
        { id: 7, name: "Tamarind Hill", location: "Kuala Lumpur, Malaysia", image: "https://foodforthought.com.my/wp-content/uploads/Tamarind-Hill-Exterior-Tamarind-Hill-Food-For-Thought.jpg" },
    ];

    const handleSearch = async (text: string) => {
        if (isDebug) {
            router.push({ pathname: "/foods/food-list", params: { hotels: JSON.stringify(_sampleFoods) } })
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
                    placeholder="Search restaurants"
                    value={searchQuery}
                    onChangeText={(text) => { setSearchQuery(text) }}
                />
                <TouchableOpacity onPress={() => { handleSearch(searchQuery) }}>
                    <Ionicons name="navigate-outline" size={24} color="gray" style={styles.searchIcon} />
                </TouchableOpacity>
            </View>

            {/* Nearby Restaurants Section */}
            <Text style={styles.sectionTitle}>Nearby Restaurants</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.nearbyContainer}>
                {nearbyRestaurants.map((restaurant) => (
                    <TouchableOpacity
                        key={restaurant.id}
                        style={styles.nearbyCard}
                        onPress={() => router.push({ pathname: "/foods/food-detail", params: { id: restaurant.id } })}
                    >
                        <Image source={{ uri: restaurant.image }} style={styles.nearbyImage} />
                        <Text style={styles.nearbyName}>{restaurant.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Restaurant List */}
            <View style={styles.resultsContainer}>
                {(filteredRestaurants.length > 0 ? filteredRestaurants : restaurants).map((restaurant) => (
                    <TouchableOpacity
                        key={restaurant.id}
                        style={styles.restaurantCard}
                        onPress={() => router.push({ pathname: "/foods/food-detail", params: { id: restaurant.id } })}
                    >
                        <Image source={{ uri: restaurant.image }} style={styles.restaurantImage} />
                        <View style={styles.restaurantInfo}>
                            <Text style={styles.restaurantName}>{restaurant.name}</Text>
                            <Text style={styles.restaurantLocation}>{restaurant.location}</Text>
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
    restaurantCard: {
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
    restaurantImage: { width: 80, height: 80, borderRadius: 10, marginRight: 10 },
    restaurantInfo: { flex: 1 },
    restaurantName: { fontSize: 18, fontWeight: "bold" },
    restaurantLocation: { fontSize: 14, color: "gray" },
});