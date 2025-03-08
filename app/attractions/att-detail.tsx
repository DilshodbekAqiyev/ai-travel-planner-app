import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Linking } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SearchHotelDetailsProps } from "../hotels/props";

export default function AttractionDetail() {
    const params = useLocalSearchParams();
    const router = useRouter();
    const attraction: SearchHotelDetailsProps = JSON.parse(params.attraction as string);

    // Attraction Data (matching att-search.jsx)
    const attractions = {
        1: {
            name: "Petronas Twin Towers",
            location: "Kuala Lumpur, Malaysia",
            image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Petronas_Twin_Towers_Malaysia.jpg",
            rating: 4.7,
            ranking: "#1 of 366 things to do in Kuala Lumpur",
            category: "Historical Landmark",
            hours: "9:00 AM - 9:00 PM",
            about: "The Petronas Towers are an iconic landmark of Kuala Lumpur, standing at 452 meters tall. Visitors can enjoy breathtaking views from the observation deck.",
            address: "Kuala Lumpur City Centre, 50088 Kuala Lumpur, Malaysia",
            reviews: 2345, // Added reviews count
            googleMapsLink: "https://goo.gl/maps/Lt5Vb5Fj7MycT7qG7", // Added Google Maps link
            photos: [
                "https://source.unsplash.com/300x200/?petronas",
                "https://source.unsplash.com/300x200/?kuala-lumpur",
            ],
        },
        2: {
            name: "Batu Caves",
            location: "Gombak, Malaysia",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Batu_Caves.jpg",
            rating: 4.6,
            ranking: "#3 of 366 things to do in Kuala Lumpur",
            category: "Religious Site",
            hours: "6:00 AM - 9:00 PM",
            about: "Batu Caves is a famous Hindu temple and shrine, featuring a massive golden statue and limestone caves with beautiful murals and carvings.",
            address: "Batu Caves, 68100 Batu Caves, Selangor, Malaysia",
            reviews: 1800, // Added reviews count
            googleMapsLink: "https://goo.gl/maps/yZrKh3gtd2F2",
            photos: [
                "https://source.unsplash.com/300x200/?batu-caves",
                "https://source.unsplash.com/300x200/?hindu-temple",
            ],
        },
        3: {
            name: "Menara Kuala Lumpur",
            location: "Kuala Lumpur, Malaysia",
            image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Kuala_Lumpur_Tower.jpg",
            rating: 4.5,
            ranking: "#5 of 366 things to do in Kuala Lumpur",
            category: "Observation Tower",
            hours: "10:00 AM - 9:00 PM",
            about: "Menara Kuala Lumpur, also known as KL Tower, is a communications tower with an observation deck offering panoramic city views.",
            address: "2 Jalan Punchak, Off Jalan P. Ramlee, 50250 Kuala Lumpur, Malaysia",
            reviews: 2800, // Added reviews count
            photos: [
                "https://source.unsplash.com/300x200/?kl-tower",
                "https://source.unsplash.com/300x200/?city-view",
            ],
            nearbyAttractions: [
                { name: "KL Forest Eco Park", image: "https://source.unsplash.com/150x150/?forest" },
                { name: "Upside Down House KL", image: "https://source.unsplash.com/150x150/?house" },
            ],
            nearbyRestaurants: [
                { name: "Atmosphere 360", image: "https://source.unsplash.com/150x150/?restaurant-view" },
                { name: "Maredo Restaurant", image: "https://source.unsplash.com/150x150/?steak" },
            ],
        },
        4: {
            name: "Sunway Lagoon",
            location: "Selangor, Malaysia",
            image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Sunway_Lagoon.jpg",
            rating: 4.4,
            ranking: "#10 of 366 things to do in Kuala Lumpur",
            category: "Theme Park",
            hours: "10:00 AM - 6:00 PM",
            about: "Sunway Lagoon is a popular theme park with water rides, amusement rides, a wildlife park, and extreme park activities.",
            address: "3 Jalan PJS 11/11, Bandar Sunway, 47500 Subang Jaya, Selangor, Malaysia",
            reviews: 3900, // Added reviews count
            photos: [
                "https://source.unsplash.com/300x200/?sunway-lagoon",
                "https://source.unsplash.com/300x200/?theme-park",
            ],
            nearbyAttractions: [
                { name: "Sunway Pyramid", image: "https://source.unsplash.com/150x150/?shopping-mall" },
                { name: "Sunway Medical Centre", image: "https://source.unsplash.com/150x150/?hospital" },
            ],
            nearbyRestaurants: [
                { name: "Nando's", image: "https://source.unsplash.com/150x150/?chicken" },
                { name: "The Manhattan FISH MARKET", image: "https://source.unsplash.com/150x150/?seafood" },
            ],
        },
        5: {
            name: "KL Tower Mini Zoo",
            location: "Kuala Lumpur, Malaysia",
            image: "https://upload.wikimedia.org/wikipedia/commons/9/94/KL_Tower_Mini_Zoo.jpg",
            rating: 4.3,
            ranking: "#15 of 366 things to do in Kuala Lumpur",
            category: "Zoo",
            hours: "10:00 AM - 9:00 PM",
            about: "KL Tower Mini Zoo offers visitors a chance to get up close with various animals in a unique setting within the KL Tower.",
            address: "KL Tower, Jalan Puncak, Off Jalan P. Ramlee, 50250 Kuala Lumpur, Malaysia",
            reviews: 2200, // Added reviews count
            photos: [
                "https://source.unsplash.com/300x200/?mini-zoo",
                "https://source.unsplash.com/300x200/?animals",
            ],
            nearbyAttractions: [
                { name: "KL Forest Eco Park", image: "https://source.unsplash.com/150x150/?forest" },
                { name: "Upside Down House KL", image: "https://source.unsplash.com/150x150/?house" },
            ],
            nearbyRestaurants: [
                { name: "Atmosphere 360", image: "https://source.unsplash.com/150x150/?restaurant-view" },
                { name: "Maredo Restaurant", image: "https://source.unsplash.com/150x150/?steak" },
            ],
        },
        6: {
            name: "Aquaria KLCC",
            location: "Kuala Lumpur, Malaysia",
            image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Aquaria_KLCC.jpg",
            rating: 4.6,
            ranking: "#8 of 366 things to do in Kuala Lumpur",
            category: "Aquarium",
            hours: "10:00 AM - 8:00 PM",
            about: "Aquaria KLCC is a state-of-the-art aquarium showcasing over 5,000 different exhibits of aquatic and land-dwelling creatures.",
            address: "Kuala Lumpur Convention Centre, Jalan Pinang, Kuala Lumpur City Centre, 50088 Kuala Lumpur, Malaysia",
            reviews: 7900, // Added reviews count
            photos: [
                "https://source.unsplash.com/300x200/?aquarium",
                "https://source.unsplash.com/300x200/?marine-life",
            ],
            nearbyAttractions: [
                { name: "KLCC Park", image: "https://source.unsplash.com/150x150/?park" },
                { name: "Petronas Twin Towers", image: "https://source.unsplash.com/150x150/?towers" },
            ],
            nearbyRestaurants: [
                { name: "Marini's on 57", image: "https://source.unsplash.com/150x150/?fine-dining" },
                { name: "Suria KLCC Food Court", image: "https://source.unsplash.com/150x150/?food-court" },
            ],
        },
        7: {
            name: "Thean Hou Temple",
            location: "Kuala Lumpur, Malaysia",
            image: "https://upload.wikimedia.org/wikipedia/commons/4/41/Thean_Hou_Temple.jpg",
            rating: 4.7,
            ranking: "#6 of 366 things to do in Kuala Lumpur",
            category: "Temple",
            hours: "8:00 AM - 9:00 PM",
            about: "Thean Hou Temple is a beautiful six-tiered temple dedicated to the Chinese sea goddess Mazu, featuring intricate architecture and cultural exhibits.",
            address: "65 Persiaran Endah, Off Jalan Syed Putra, 50460 Kuala Lumpur, Malaysia",
            reviews: 11000, // Added reviews count
            photos: [
                "https://source.unsplash.com/300x200/?temple",
                "https://source.unsplash.com/300x200/?chinese-architecture",
            ],
            nearbyAttractions: [
                { name: "National Museum of Malaysia", image: "https://source.unsplash.com/150x150/?museum" },
                { name: "Perdana Botanical Garden", image: "https://source.unsplash.com/150x150/?garden" },
            ],
            nearbyRestaurants: [
                { name: "Oriental Landmark", image: "https://source.unsplash.com/150x150/?chinese-restaurant" },
                { name: "Restoran Sin Kee", image: "https://source.unsplash.com/150x150/?local-food" },
            ],
        },
    };

    // const attraction = attractions[params.id] || attractions[1]; // Default to Petronas Twin Towers if ID is invalid

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={true}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <View style={styles.rightIcons}>
                    <TouchableOpacity style={styles.iconButton}>
                        <Ionicons name="share-outline" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <Ionicons name="heart-outline" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Main Image */}
            <Image source={{ uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${attraction.photos[0].photo_reference}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}` }} style={styles.mainImage} />

            {/* Attraction Info */}
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{attraction.name}</Text>
                <Text style={styles.location}>{attraction.formatted_address}</Text>
                <View style={styles.ratingContainer}>
                    <Ionicons name="star" size={18} color="gold" />
                    <Ionicons name="star" size={18} color="gold" />
                    <Ionicons name="star" size={18} color="gold" />
                    <Ionicons name="star" size={18} color="gold" />
                    <Ionicons name="star-half" size={18} color="gold" />
                    <Text style={styles.ratingText}>{attraction.rating}</Text>

                    <TouchableOpacity onPress={() => alert("Redirect to review page!")}>
                        <Text style={styles.reviewText}>10 reviews</Text>
                    </TouchableOpacity>
                </View>

                {/* Ranking & Category */}
                <Text style={styles.hashtag}>{attraction.formatted_address.split(",")[0]}</Text>
                <Text style={styles.priceCategory}>{attraction.rating}</Text>

                {/* Open & Close Time */}
                <Text style={styles.openTimeLabel}>Open Now:</Text>
                <Text style={styles.openTime}>{attraction.opening_hours?.open_now}</Text>

                {/* About Section */}
                <Text style={styles.sectionTitle}>About</Text>
                <Text style={styles.description}>{attraction.name}</Text>

                {/* Address */}
                <Text style={styles.sectionTitle}>Address</Text>
                <TouchableOpacity onPress={() => Linking.openURL(attraction.formatted_address)}>
                    <Text style={styles.linkText}>{attraction.formatted_address}</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
    },
    iconButton: {
        padding: 8,
    },
    rightIcons: { 
        flexDirection: "row", gap: 15 
    },
    mainImage: {
        width: "100%",
        height: 250,
    },
    infoContainer: {
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 8,
    },
    location: {
        fontSize: 16,
        color: "gray",
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 8,
    },
    ratingText: {
        marginLeft: 4,
        fontSize: 16,
        fontWeight: "bold",
    },
    reviewText: {
        fontSize: 14,
        color: "blue",
        textDecorationLine: "underline", // Makes the text underlined
        marginLeft: 10, // Adds some spacing
    },
    hashtag: {
        fontSize: 14,
        color: "gray",
        marginTop: 4,
    },
    priceCategory: {
        fontSize: 16,
        fontWeight: "bold",
        marginVertical: 4,
    },
    openTimeLabel: {
        fontSize: 14,
        color: "gray",
        marginTop: 4,
    },
    openTime: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 12,
    },
    description: {
        fontSize: 16,
        color: "gray",
        marginVertical: 8,
    },
    linkText: {
        fontSize: 16,
        color: "blue",
        textDecorationLine: "underline",
        marginTop: 4,
    },
});
