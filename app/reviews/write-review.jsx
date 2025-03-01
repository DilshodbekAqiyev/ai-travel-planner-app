import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  Modal,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

const WriteReview = () => {
  const router = useRouter();
  const [topic, setTopic] = useState("");
  const [reviewContent, setReviewContent] = useState("");
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [taggedPlace, setTaggedPlace] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const pickImage = async () => {
    setIsLoading(true);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
    setIsLoading(false);
  };

  const handleSubmit = () => {
    if (!topic || !reviewContent || rating === 0) {
      Alert.alert("Incomplete Review", "Please fill in all fields and give a rating before submitting.");
      return;
    }

    console.log("Review submitted:", { topic, reviewContent, rating, image, taggedPlace });
    router.back();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <FontAwesome name="arrow-left" size={24} color="#204E81" />
      </TouchableOpacity>

      <Text style={styles.title}>Write a Review</Text>

      <TextInput
        style={styles.input}
        placeholder="Review Topic"
        value={topic}
        onChangeText={setTopic}
      />

      <TextInput
        style={[styles.input, styles.reviewContent]}
        placeholder="Write your review..."
        value={reviewContent}
        onChangeText={(text) => setReviewContent(text.slice(0, 300))}
        multiline
      />
      <Text style={styles.charCount}>{reviewContent.length}/300</Text>

      {/* Tag a Place Button */}
      <TouchableOpacity style={styles.tagButton} onPress={() => setModalVisible(true)}>
        <FontAwesome name="map-marker" size={20} color="white" />
        <Text style={styles.tagButtonText}>
          {taggedPlace ? `Tagged: ${taggedPlace}` : "Tag a Place"}
        </Text>
      </TouchableOpacity>

      {/* Rating Section */}
      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => setRating(star)}>
            <FontAwesome
              name="star"
              size={35}
              color={star <= rating ? "#FFD700" : "#C0C0C0"}
              style={styles.star}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Image Upload */}
      <TouchableOpacity style={styles.uploadBox} onPress={pickImage}>
        {isLoading ? (
          <ActivityIndicator size="small" color="#204E81" />
        ) : image ? (
          <Image source={{ uri: image }} style={styles.uploadedImage} />
        ) : (
          <View style={styles.uploadPlaceholder}>
            <FontAwesome name="camera" size={30} color="#204E81" />
            <Text style={styles.uploadText}>Upload Photo</Text>
          </View>
        )}
      </TouchableOpacity>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit Review</Text>
      </TouchableOpacity>

      {/* Tag a Place Modal */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select a Place</Text>
            <TouchableOpacity onPress={() => { setTaggedPlace("KL Tower, Kuala Lumpur"); setModalVisible(false); }}>
              <Text style={styles.modalItem}>KL Tower, Kuala Lumpur</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setTaggedPlace("Petronas Towers, Kuala Lumpur"); setModalVisible(false); }}>
              <Text style={styles.modalItem}>Petronas Towers, Kuala Lumpur</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.modalCancel}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#204E81",
    textAlign: "center",
    marginVertical: 20,
  },
  input: {
    height: 50,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginTop: 15,
  },
  reviewContent: {
    height: 120,
    textAlignVertical: "top",
    paddingTop: 15,
  },
  charCount: {
    alignSelf: "flex-end",
    color: "gray",
    fontSize: 12,
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  star: {
    marginHorizontal: 12, // 1.5 cm spacing
  },
  uploadBox: {
    width: "100%",
    height: 180,
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    overflow: "hidden",
  },
  uploadedImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  uploadPlaceholder: {
    alignItems: "center",
  },
  uploadText: {
    marginTop: 5,
    color: "#204E81",
    fontSize: 14,
  },
  tagButton: {
    flexDirection: "row",
    backgroundColor: "#204E81",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  tagButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  submitButton: {
    backgroundColor: "#204E81",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 60,
  },
  submitButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  modalItem: {
    paddingVertical: 10,
    fontSize: 16,
  },
  modalCancel: {
    color: "red",
    textAlign: "center",
    marginTop: 15,
  },
});

export default WriteReview;
