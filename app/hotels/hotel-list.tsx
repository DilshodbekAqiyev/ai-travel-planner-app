import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { SearchHotelDetailsProps } from "./props";
// import { sampleHotelsString } from "./data";
import sampleHotels from "./details.json";
// import { sampleHotels } from "./data";


export default function HotelList() {
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

    // const hotels = [
    //     { id: 1, name: "Mandarin Oriental", location: "Kuala Lumpur, Malaysia", image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/598529543.jpg?k=5249fcfb36b282ac198bf35326f83c8df95863aea50bf2a692af1a07f7f30c4a&o=&hp=1" },
    //     { id: 2, name: "The Ritz-Carlton", location: "Kuala Lumpur, Malaysia", image: "https://images.squarespace-cdn.com/content/v1/60f6e1f964b5840aafc88a2b/7b8ede32-e1aa-4fb4-a472-917364f4b9ca/IMG_4882.jpeg" },
    //     { id: 3, name: "Four Seasons", location: "Kuala Lumpur, Malaysia", image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/164125773.jpg?k=e8f95c24677104135121de711f0a74914b698c14cf670d0cd9f2438a36b27081&o=&hp=1" },
    //     { id: 4, name: "Shangri-La Hotel", location: "Kuala Lumpur, Malaysia", image: "https://pix10.agoda.net/hotelImages/10426/0/07582a1e5b7efa819396edc3a68df4df.jpg?ca=7&ce=1&s=414x232" },
    // ];

    // const nearbyHotels = [
    //     { id: 5, name: "Grand Hyatt", location: "Kuala Lumpur, Malaysia", image: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/10/02/1412/Grand-Hyatt-Kuala-Lumpur-P255-Exterior.jpg/Grand-Hyatt-Kuala-Lumpur-P255-Exterior.4x3.jpg" },
    //     { id: 6, name: "St. Regis", location: "Kuala Lumpur, Malaysia", image: "https://cache.marriott.com/content/dam/marriott-renditions/KULXR/kulxr-crystal-9320-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=750px:*" },
    //     { id: 7, name: "The Westin", location: "Kuala Lumpur, Malaysia", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/b5/2c/7e/the-hotel--v3742831.jpg?w=700&h=-1&s=1" },
    // ];

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
                }}>Hotels</Text>
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
