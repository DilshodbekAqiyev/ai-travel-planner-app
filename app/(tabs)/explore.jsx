import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router"; // Import useRouter from expo-router

export default function Explore() {
  const router = useRouter(); // Initialize router

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.letsTravelBox}>
          <Text style={styles.letsTravelText}>Let's Travel</Text>
        </View>

        {/* 2x2 Grid Layout */}
        <View style={styles.buttonGrid}>
          {[
            { name: "Hotels", icon: "bed-outline", route: "/hotels/hotel-search" }, 
            { name: "Foods", icon: "restaurant-outline", route: "/foods/food-search" },
            { name: "Attractions", icon: "map-outline", route: "/attractions/att-search" },
            { name: "Reviews", icon: "chatbubble-ellipses-outline", route: "/reviews/review-list" },
          ].map((item, index) => (
            <TouchableOpacity key={index} style={styles.button} onPress={() => router.push(item.route)}>
              <Ionicons name={item.icon} size={20} color="white" />
              <Text style={styles.buttonText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* #BBDDFD Strip */}
        <View style={styles.blueStrip} />

        {/* Ads Section */}
        <View style={styles.adsContainer}>
          <Image
            source={{ uri: "https://media.istockphoto.com/id/466842820/photo/petronas-towers.jpg?s=612x612&w=0&k=20&c=X_Kl-W_ulJEzjvaaT8gRNTQWHboyLKaedXol5EPhGdI=" }}
            style={styles.image}
          />
          <Image
            source={{ uri: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/cca71160275449.5a46380807b12.jpg" }}
            style={styles.image}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: { flex: 1, backgroundColor: "#E3F0FE" },
  container: { width: "100%", alignItems: "center", padding: 20 },
  letsTravelBox: { backgroundColor: "#BBDDFD", paddingVertical: 20, paddingHorizontal: 80, borderRadius: 15, marginTop: 50, marginBottom: 30, alignItems: "center" },
  letsTravelText: { fontSize: 32, color: "black", fontFamily: "outfit-bold" },
  buttonGrid: { width: "100%", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly", alignItems: "center" },
  button: { width: 129, height: 65, backgroundColor: "#204E81", justifyContent: "center", alignItems: "center", borderRadius: 10, marginBottom: 15, marginHorizontal: 10 },
  buttonText: { color: "white", fontWeight: "bold", fontSize: 12, marginTop: 3 },
  blueStrip: { width: "100%", height: 20, backgroundColor: "#BBDDFD", marginTop: 10 },
  adsContainer: { backgroundColor: "white", width: "100%", alignItems: "center", paddingVertical: 20 },
  image: { width: "90%", height: 150, marginBottom: 15, borderRadius: 10 },
});
