import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, Linking } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router"; // Import useRouter


export default function HotelDetail() {
  const router = useRouter(); // Initialize router

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Header Buttons */}
        <View style={styles.header}>
          {/* Back Button */}
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


       {/* Hotel Image */}
       <Image source={{ uri: "https://source.unsplash.com/800x400/?hotel" }} style={styles.mainImage} />


       {/* Hotel Name & Location */}
       <Text style={styles.title}>Grand Hyatt</Text>
       <Text style={styles.location}>Kuala Lumpur, Malaysia</Text>


       {/* Ratings */}
       <View style={styles.ratingContainer}>
         <View style={styles.starContainer}>
           {Array(5).fill().map((_, i) => (
             <Ionicons key={i} name="star" size={18} color="#FFD700" />
           ))}
         </View>
         <Text style={styles.ratingText}>4.5</Text>
       </View>


       {/* Hashtag */}
       <Text style={styles.hashtag}>#3 of 151 Hotels in Kuala Lumpur</Text>


       {/* Visit Website, Call, Reviews */}
       <View style={styles.linkContainer}>
         <TouchableOpacity onPress={() => Linking.openURL("https://www.hyatt.com")}>
           <Text style={styles.linkText}>Visit Website</Text>
         </TouchableOpacity>
         <Text style={styles.linkSeparator}>|</Text>
         <TouchableOpacity onPress={() => Linking.openURL("tel:+60321821234")}>
           <Text style={styles.linkText}>Call</Text>
         </TouchableOpacity>
         <Text style={styles.linkSeparator}>|</Text>
         <TouchableOpacity>
           <Text style={styles.linkText}>Reviews</Text>
         </TouchableOpacity>
       </View>


       {/* View Deal Button */}
       <TouchableOpacity style={styles.viewDealButton}>
         <Text style={styles.viewDealText}>View Deal</Text>
       </TouchableOpacity>


       {/* About Section */}
       <Text style={styles.sectionTitle}>About</Text>
       <Text style={styles.description}>
         Grand Hyatt Kuala Lumpur offers luxurious accommodations with breathtaking city views, top-tier amenities, and world-class dining.
       </Text>


       {/* Amenities */}
       <Text style={styles.sectionTitle}>Amenities</Text>
       <Text style={styles.description}>Free WiFi, Swimming Pool, Spa, Gym, Restaurant, Bar, Business Center</Text>


       {/* Address */}
       <Text style={styles.sectionTitle}>Address</Text>
       <TouchableOpacity onPress={() => Linking.openURL("https://goo.gl/maps/Xyz")}>
         <Text style={styles.linkText}>12, Jalan Pinang, 50450 Kuala Lumpur, Malaysia</Text>
       </TouchableOpacity>


       {/* Restaurants Nearby */}
       <Text style={styles.sectionTitle}>Restaurants Nearby</Text>
       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
         <TouchableOpacity style={styles.nearbyCard}>
           <Image source={{ uri: "https://source.unsplash.com/100x100/?restaurant" }} style={styles.nearbyImage} />
           <Text style={styles.nearbyText}>Tamarind Hill</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.nearbyCard}>
           <Image source={{ uri: "https://source.unsplash.com/100x100/?food" }} style={styles.nearbyImage} />
           <Text style={styles.nearbyText}>Nobu KL</Text>
         </TouchableOpacity>
       </ScrollView>


       {/* Attractions Nearby */}
       <Text style={styles.sectionTitle}>Attractions Nearby</Text>
       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
         <TouchableOpacity style={styles.nearbyCard}>
           <Image source={{ uri: "https://source.unsplash.com/100x100/?tower" }} style={styles.nearbyImage} />
           <Text style={styles.nearbyText}>Petronas Towers</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.nearbyCard}>
           <Image source={{ uri: "https://source.unsplash.com/100x100/?park" }} style={styles.nearbyImage} />
           <Text style={styles.nearbyText}>KLCC Park</Text>
         </TouchableOpacity>
       </ScrollView>


       {/* Hotel Images */}
       <Text style={styles.sectionTitle}>Photos</Text>
       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
         <Image source={{ uri: "https://source.unsplash.com/200x200/?hotel-room" }} style={styles.hotelImage} />
         <Image source={{ uri: "https://source.unsplash.com/200x200/?pool" }} style={styles.hotelImage} />
         <Image source={{ uri: "https://source.unsplash.com/200x200/?lobby" }} style={styles.hotelImage} />
       </ScrollView>
     </View>
   </ScrollView>
 );
}


/* Styles */
const styles = StyleSheet.create({
 scrollContainer: { flex: 1, backgroundColor: "#fff" },
 container: { padding: 20 },
 header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 },
 iconButton: { padding: 5 },
 rightIcons: { flexDirection: "row", gap: 15 },


 mainImage: { width: "100%", height: 200, borderRadius: 10, marginBottom: 10 },
 title: { fontSize: 22, fontWeight: "bold" },
 location: { fontSize: 16, color: "gray", marginBottom: 5 },


 ratingContainer: { flexDirection: "row", alignItems: "center", marginBottom: 5 },
 starContainer: { flexDirection: "row", marginRight: 5 },
 ratingText: { fontSize: 16, fontWeight: "bold" },


 hashtag: { fontSize: 14, color: "gray", marginBottom: 10 },


 linkContainer: { flexDirection: "row", justifyContent: "flex-start", marginBottom: 15, gap: 10 },
 linkText: { fontSize: 14, color: "blue", textDecorationLine: "underline" },
 linkSeparator: { fontSize: 14, color: "gray", marginHorizontal: 5 },


 viewDealButton: { backgroundColor: "#E3F0FE", padding: 10, borderRadius: 5, alignItems: "center", marginBottom: 15 },
 viewDealText: { fontSize: 16, fontWeight: "bold" },


 sectionTitle: { fontSize: 18, fontWeight: "bold", marginTop: 15 },
 description: { fontSize: 14, color: "gray", marginBottom: 10 },


 nearbyCard: { marginRight: 15, alignItems: "center" },
 nearbyImage: { width: 100, height: 100, borderRadius: 10 },
 nearbyText: { fontSize: 12, marginTop: 5 },


 hotelImage: { width: 200, height: 200, borderRadius: 10, marginRight: 15 },
});
