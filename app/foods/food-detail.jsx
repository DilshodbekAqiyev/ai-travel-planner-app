import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function FoodDetail() {
    const params = useLocalSearchParams();
    const router = useRouter();

    const restaurants = {
        1: { name: "Jogoya", location: "Kuala Lumpur, Malaysia", image: "https://funntaste.com/wp-content/uploads/2021/04/90d0e592-58a6-4729-918f-39d4928aed1e-1024x728.jpg" },
        2: { name: "Nobu Kuala Lumpur", location: "Kuala Lumpur, Malaysia", image: "https://media.timeout.com/images/105239239/750/422/image.jpg" },
        3: { name: "Dewakan", location: "Kuala Lumpur, Malaysia", image: "https://www.theworlds50best.com/discovery/filestore/jpg/Dewakan-Kuala-Lumpar-1.jpg" },
        4: { name: "Marini's on 57", location: "Kuala Lumpur, Malaysia", image: "https://marinisgroup.com/wp-content/uploads/2022/07/Marinison57_Bar-scaled-2.jpg" },
        5: { name: "Bijan Bar & Restaurant", location: "Kuala Lumpur, Malaysia", image: "https://res.klook.com/image/upload/c_fill,w_750,h_563/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/gnogqce5g9rtqa9fuzwk.jpg" },
        6: { name: "Fuego at Troika Sky Dining", location: "Kuala Lumpur, Malaysia", image: "https://www.theyumlist.net/wp-content/uploads/2024/12/Fuego-Troika-Sky-Dining-1.jpeg" },
        7: { name: "Tamarind Hill", location: "Kuala Lumpur, Malaysia", image: "https://foodforthought.com.my/wp-content/uploads/Tamarind-Hill-Exterior-Tamarind-Hill-Food-For-Thought.jpg" },
    };

    const restaurant = restaurants[params.id] || restaurants[1]; // Default to Jogoya if ID is invalid

    const nearbyAttractions = [
        { name: "Petronas Towers", image: "https://source.unsplash.com/150x150/?building" },
        { name: "KL Tower", image: "https://source.unsplash.com/150x150/?city" },
    ];

    const nearbyRestaurants = [
        { name: "Nobu KL", image: "https://source.unsplash.com/150x150/?dining" },
        { name: "Tamarind Hill", image: "https://source.unsplash.com/150x150/?restaurant" },
    ];

    const restaurantPhotos = [
        "https://source.unsplash.com/300x200/?japanese-food",
        "https://source.unsplash.com/300x200/?sushi",
    ];

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={true}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconButton} onPress={() => router.back("/food/food-search")}>
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
            <Image source={{ uri: restaurant.image || "https://source.unsplash.com/600x400/?sushi" }} style={styles.mainImage} />

            {/* Restaurant Info */}
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{restaurant.name}</Text>
                <Text style={styles.location}>{restaurant.location}</Text>
                <View style={styles.ratingContainer}>
                    <Ionicons name="star" size={18} color="gold" />
                    <Ionicons name="star" size={18} color="gold" />
                    <Ionicons name="star" size={18} color="gold" />
                    <Ionicons name="star" size={18} color="gold" />
                    <Ionicons name="star-half" size={18} color="gold" />
                    <Text style={styles.ratingText}>4.5</Text>
                </View>

                {/* Price Range & Category */}
                <Text style={styles.hashtag}>#1 of 300 Japanese Restaurants in KL</Text>
                <Text style={styles.priceCategory}>RM200 - RM400 • Japanese Food</Text>

                {/* Action Links */}
                <View style={styles.linksContainer}>
                    <TouchableOpacity><Text style={styles.linkText}>Visit Website</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.linkText}>Call</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.linkText}>Review</Text></TouchableOpacity>
                </View>

                {/* Open & Close Time */}
                <Text style={styles.openTimeLabel}>Open From</Text>
                <Text style={styles.openTime}>5:30pm - 10:30pm</Text>

                {/* About Section */}
                <Text style={styles.sectionTitle}>About</Text>
                <Text style={styles.description}>
                    Jogoya is a famous Japanese buffet restaurant serving high-quality sushi, sashimi, and a variety of Japanese delicacies.
                </Text>

                {/* Address */}
                <Text style={styles.sectionTitle}>Address</Text>
                <TouchableOpacity>
                    <Text style={styles.linkText}>Starhill Gallery, Kuala Lumpur, Malaysia</Text>
                </TouchableOpacity>

                {/* Nearby Attractions */}
                <Text style={styles.sectionTitle}>Attractions Nearby</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                    {nearbyAttractions.map((item, index) => (
                        <TouchableOpacity key={index} style={styles.nearbyCard}>
                            <Image source={{ uri: item.image }} style={styles.nearbyImage} />
                            <Text style={styles.nearbyText}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Nearby Restaurants */}
                <Text style={styles.sectionTitle}>Restaurants Nearby</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                    {nearbyRestaurants.map((item, index) => (
                        <TouchableOpacity key={index} style={styles.nearbyCard}>
                            <Image source={{ uri: item.image }} style={styles.nearbyImage} />
                            <Text style={styles.nearbyText}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* More Photos */}
                <Text style={styles.sectionTitle}>More Photos</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                    {restaurantPhotos.map((image, index) => (
                        <Image key={index} source={{ uri: image }} style={styles.morePhotos} />
                    ))}
                </ScrollView>
            </View>
        </ScrollView>
    );
}

/* Styles */
const styles = StyleSheet.create({
 container: { flex: 1, backgroundColor: "#fff", paddingBottom: 20 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20 },
 rightIcons: { flexDirection: "row" },
 iconButton: { marginHorizontal: 5 },

 mainImage: { width: "100%", height: 250 },

 infoContainer: { padding: 20 },
 title: { fontSize: 24, fontWeight: "bold" },
 location: { fontSize: 16, color: "gray" },

 ratingContainer: { flexDirection: "row", alignItems: "center", marginVertical: 5 },
 ratingText: { marginLeft: 5, fontSize: 16 },

 hashtag: { fontSize: 14, color: "gray", marginBottom: 5 },
 priceCategory: { fontSize: 16, fontWeight: "bold" },

 linksContainer: { flexDirection: "row", marginVertical: 10 },
 linkText: { fontSize: 14, color: "#007BFF", marginRight: 20, textDecorationLine: "underline" },


 openTimeLabel: { fontSize: 16, fontWeight: "bold", marginTop: 15 },
 openTime: { fontSize: 16, color: "gray", marginBottom: 15 },


 sectionTitle: { fontSize: 18, fontWeight: "bold", marginTop: 20, marginBottom: 10 },
 description: { fontSize: 14, color: "gray" },


 horizontalScroll: { flexDirection: "row", marginBottom: 10 },


 nearbyCard: { alignItems: "center", marginRight: 15 },
 nearbyImage: { width: 80, height: 80, borderRadius: 8 },
 nearbyText: { fontSize: 14, textAlign: "center", marginTop: 5 },


 morePhotos: { width: 150, height: 100, borderRadius: 8, marginRight: 10 },
});
