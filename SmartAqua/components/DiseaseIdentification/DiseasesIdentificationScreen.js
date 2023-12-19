import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  Text,
  View,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  TouchableHighlight,
} from "react-native";

import * as ImagePicker from "expo-image-picker";

import { predictImage } from "./DiseasesAPI";
import { useState, useEffect } from "react";
import styles from "./Styles";
import { renderDiseaseInfo, renderTreatmentInfo } from "./DiseaseData";
import DiseaseInfoModal from "./DiseaseInfoModal";
import TreatmentModal from "./TreatmentModal";
import AIModal from "./AIModel";

function DiseasesIdentificationScreen() {
  const [responseText, setResponseText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTile, setSelectedTile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  //selecting image
  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0]);
    }
  };

  let predictionAttempts = 0; // Add this variable to keep track of attempts

  //handle prediction
  const handlePredict = async () => {
    if (selectedImage && predictionAttempts < 3) {
      // Check if attempts are less than 3
      setIsLoading(true);

      const prediction = await predictImage(selectedImage);
      const predictionResult = prediction && prediction["model-prediction"];

      if (predictionResult) {
        const disease = predictionResult.split("Disease : ")[1];
        setResponseText(disease);
        predictionAttempts = 0; // Reset attempts on success
      } else {
        // setResponseText("Pres Predict AA");
        setResponseText("");
        predictionAttempts++; // Increment attempts on failure
        handlePredict();
      }
      // Hide the loader once the results are available
      setIsLoading(false);
    } else {
      setResponseText("Please select an image first.");
    }
  };

  const handleTilePress = (tileName) => {
    setSelectedTile(tileName);
    setModalVisible(true);
  };

  //placeholder main 2 images
  function PlaceholderImage() {
    return (
      <View style={styles.placeholderContainer}>
        <Image
          source={require("../../assets/fishcare.png")}
          style={styles.placeholderImage}
        />

        <Image
          source={require("../../assets/fish4.gif")}
          style={[styles.backgroundImage2]}
        />

        <Text style={styles.placeholderText}>Disease Care</Text>
      </View>
    );
  }

  //take picture from camera
  const takePictureFromCamera = async () => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();

      if (status !== "granted") {
        console.log("Camera permission denied");
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setSelectedImage(result.assets[0]);
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const diseaseDescriptions = {
    Healthy: "Your fish is healthy and no disease has been identified.",
    Whitespot: "Whitespot disease has been identified in your fish.",
    Redspot: "Redspot disease has been identified in your fish.",
    Tailrot: "Tailrot disease has been identified in your fish .",
  };

  const diseaseDescription = diseaseDescriptions[responseText] || "";

  //render component
  return (
    <View style={styles.container}>
      <View style={styles.mainImageContainer}>
        {!selectedImage ? (
          <PlaceholderImage />
        ) : (
          <View style={styles.imageContainer}>
            <Image source={{ uri: selectedImage.uri }} style={styles.image} />
          </View>
        )}
      </View>

      <View style={styles.mainButtonContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={selectImage} style={styles.button}>
            <Text style={styles.buttonText}>Select Image</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleTilePress("AI")}
            style={styles.buttonAI}
          >
            <Text style={styles.buttonText}>AI Chat</Text>
          </TouchableOpacity>

          {/* Add a new button to capture an image from the camera */}
          <TouchableOpacity
            onPress={takePictureFromCamera}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Take Picture</Text>
          </TouchableOpacity>
        </View>

        <Image
          source={require("../../assets/doc.png")}
          style={styles.imageStyleHero}
          resizeMode="cover" // Adjust the resizeMode based on your preference
        />
        <View style={styles.predictButtonContainer}>
          <TouchableOpacity
            onPress={handlePredict}
            style={[
              styles.predictButton,
              !selectedImage && styles.disabledButton,
            ]}
            disabled={!selectedImage}
          >
            <Text style={styles.buttonText}>Predict Disease</Text>
          </TouchableOpacity>
        </View>
      </View>
      {!responseText ? (
        <View>
          <Image
            source={require("../../assets/searching.png")}
            style={styles.imageStyleHero2}
            resizeMode="cover" // Adjust the resizeMode based on your preference
          />
          {selectedImage ? (
            <Text style={styles.placeholderText2}>Press Prediction Button</Text>
          ) : (
            <Text style={styles.placeholderTextHero}>
              Select or Take an Image to Start
            </Text>
          )}
        </View>
      ) : null}
      {isLoading ? (
        // Show the loader
        <View style={styles.loaderContainer}>
          {/* Replace the Text with the Image component */}
          <Image
            source={require("../../assets/loading2.gif")}
            style={styles.loaderImage}
          />
        </View>
      ) : responseText ? (
        // Show the results
        <ScrollView contentContainerStyle={styles.infoContainer}>
          {/* Render the disease description based on responseText */}
          <Text style={styles.diseaseHeaderText}>{diseaseDescription}</Text>

          {/* Show tiles only if responseText is not "healthy" */}
          {responseText !== "Healthy" && (
            <View style={styles.tilesContainer}>
              <TouchableHighlight
                style={styles.tile}
                onPress={() => handleTilePress("information")}
              >
                <Text style={styles.tileText}>Disease Information</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.tile}
                onPress={() => handleTilePress("treatment")}
              >
                <Text style={styles.tileText}>Treatment Methods</Text>
              </TouchableHighlight>
            </View>
          )}
        </ScrollView>
      ) : null}

      {/* Use the DiseaseInfoModal component */}
      <DiseaseInfoModal
        selectedTile={selectedTile}
        responseText={responseText}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

      {/* Use the TreatmentModal component */}
      <TreatmentModal
        selectedTile={selectedTile}
        responseText={responseText}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

      {/* Use the AIModal component */}
      <AIModal
        selectedTile={selectedTile}
        responseText={responseText}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}

export default DiseasesIdentificationScreen;
