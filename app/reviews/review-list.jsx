import React, { useState } from "react";
import {
  View, Text, TextInput, ScrollView, TouchableOpacity,
  FlatList, Image, StyleSheet
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router"; // Changed from useNavigation to useRouter

const reviews = [
  { id: "1", name: "John Doe", city: "Kuala Lumpur", place: "KL Tower", rating: 5, topic: "KL Tower Visit", comment: "Amazing experience at KL Tower!", likes: 12, hasImage: true, image: "https://cdn-imgix.headout.com/media/images/9e254a5603f891679a9e69305f8c096b-card%20image.jpg" },
  { id: "2", name: "Sarah Lim", city: "Penang", place: "Street Food Market", rating: 4, topic: "Restaurant Experience", comment: "The food at this restaurant was great.", likes: 8, hasImage: false },
  { id: "3", name: "Ali Zafar", city: "Johor Bahru", place: "City Square Mall", rating: 3, topic: "Crowded Place", comment: "Too crowded for my liking.", likes: 4, hasImage: true, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Jb_city_square2.jpg/1200px-Jb_city_square2.jpg" },
  { id: "4", name: "Emma Wong", city: "Langkawi", place: "Pantai Cenang", rating: 5, topic: "Sunset View", comment: "The best sunset view I have ever seen!", likes: 15, hasImage: true, image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/dd/d0/62/photo0jpg.jpg?w=1400&h=1400&s=1" },
  { id: "5", name: "Kevin Chan", city: "Malacca", place: "A Famosa", rating: 4, topic: "Historical Sites", comment: "Love the historical sites here.", likes: 6, hasImage: false },
  { id: "6", name: "Nurul Aina", city: "Kota Kinabalu", place: "Mount Kinabalu", rating: 5, topic: "Nature Exploration", comment: "A must-visit place for nature lovers.", likes: 10, hasImage: false },
  { id: "7", name: "Samantha Lee", city: "Ipoh", place: "Old Town", rating: 4, topic: "Local Culture", comment: "Nice place with friendly locals.", likes: 9, hasImage: false },
];

const filters = ["All", "Kuala Lumpur", "Penang", "Johor Bahru", "Langkawi", "Malacca", "Kota Kinabalu", "Ipoh"];

const ReviewList = () => {
  const router = useRouter(); // Using useRouter instead of useNavigation
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchText, setSearchText] = useState("");

  const filteredReviews = selectedFilter === "All" ? reviews : reviews.filter(review => review.city === selectedFilter);

  return (
    <View style={styles.container}>
      {/* Back Button */}
      {/* <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <FontAwesome name="arrow-left" size={20} color="white" />
      </TouchableOpacity> */}
      <TouchableOpacity
        style={{
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          position: "absolute",
          top: 40,
          left: 15,
          // backgroundColor: "#3498db",
          padding: 10,
          borderRadius: 20,
          // zIndex: 10,
        }}
        onPress={() => { router.back() }}>
        <Ionicons name="arrow-back" size={28} color="black" />
      </TouchableOpacity>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="🔍 Search reviews..."
        value={searchText}
        onChangeText={setSearchText}
      />

      {/* Filter Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterContainer}>
        {filters.map((filter, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.filterButton, selectedFilter === filter && styles.filterButtonSelected]}
            onPress={() => setSelectedFilter(filter)}
          >
            <Text style={styles.filterText}>{filter}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Reviews List */}
      <FlatList
        data={filteredReviews}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.cityName}>
                {item.place}, {item.city}
              </Text>
            </View>
            <View style={styles.ratingContainer}>
              <FontAwesome name="star" size={16} color="gold" />
              <Text style={styles.ratingText}>{item.rating}.0</Text>
            </View>
            <Text style={styles.topicText}>{item.topic}</Text>
            <Text style={styles.comment}>{item.comment}</Text>
            {item.hasImage && <Image source={{ uri: item.image }} style={styles.reviewImage} />}
            <View style={styles.actions}>
              <TouchableOpacity style={styles.actionButton}>
                <FontAwesome name="thumbs-up" size={16} color="#3498db" />
                <Text style={styles.actionText}>{item.likes}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.actionButton, styles.commentButton]}>
                <FontAwesome name="comment" size={16} color="gray" />
                <Text style={styles.actionText}>Comment</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Floating Add Review Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push("/reviews/write-review")} // Changed navigation.navigate to router.push
      >
        <FontAwesome name="plus" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  actions: {
    flexDirection: "row", // Ensures buttons are in a row
    alignItems: "center", // Aligns items vertically
    justifyContent: "flex-start", // Aligns items to the left
    marginTop: 10,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "#E3F0FE",
  },
  commentButton: {
    marginLeft: 10, // Adds space between like and comment button
  },
  container: {
    flex: 1,
    backgroundColor: "#F8F9FB",
    paddingHorizontal: 10,
    paddingTop: 100, // Move
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 15,
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 20,
    zIndex: 10,
  },
  searchBar: {
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  filterContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  filterButton: {
    paddingVertical: 6,
    paddingHorizontal: 15,
    backgroundColor: "#E3F0FE",
    borderRadius: 20,
    marginRight: 8,
  },
  filterButtonSelected: {
    backgroundColor: "#3498db",
  },
  filterText: {
    fontSize: 14,
    color: "#333",
  },
  reviewCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  reviewHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cityName: {
    fontSize: 14,
    color: "gray",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  ratingText: {
    fontSize: 14,
    marginLeft: 5,
  },
  topicText: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
    color: "#2c3e50",
  },
  comment: {
    fontSize: 14,
    color: "#333",
  },
  reviewImage: {
    width: "100%",
    height: 160,
    borderRadius: 8,
    marginTop: 5,
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#3498db",
    padding: 18,
    borderRadius: 30,
    elevation: 5,
  },
});

export default ReviewList;
