import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Button, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

//const SERVER_URL = 'https://1b5e-112-134-174-14.ngrok-free.app/goldfishAgeDetection';
const SERVER_URL = 'https://82b6-2402-4000-1245-87e7-50d3-ec00-9421-c2b7.ngrok-free.app/goldfishAgeDetection';

function GrowthPredictionScreen(){
  const [image, setImage] = useState(null);
  const [age, setAge] = useState(null);
  const [details, setDetails] = useState(null);

  const data = {
    "1 month": {
      length: "0.9–1 inch",
      weight: "0.107 ounces",
      plan: "Start with finely crushed or powdered high-quality commercial fish food formulated for young fish. Feed them small amounts 3-4 times a day.",
      foods: "Infusoria, powdered fry food"
    },
    "2 month": {
      length: "1–1.3 inch",
      weight: "0.19 ounces",
      plan: "Continue with finely crushed or small pellets of high-quality commercial fish food. Feed them 3-4 times a day, adjusting the portion size as they grow.",
      foods: "Small pellets, infusoria."
    },
    "3 month": {
      length: "1.2–1.5 inch",
      weight: "0.26 ounces",
      plan: "Introduce slightly larger pellets of commercial fish food. You can also start offering small amounts of live or frozen foods like brine shrimp and daphnia a couple of times a week.",
      foods: "Small pellets, brine shrimp, daphnia."
    },
    "4 month": {
      length: "1.4–1.7 inch",
      weight: "0.301 ounces",
      plan: "Provide a mix of commercial pellets, live or frozen foods, and some finely chopped blanched vegetables like peas or spinach. Feed them 2-3 times a day.",
      foods: "Pellets, brine shrimp, daphnia, blanched peas/spinach"
    },
    "5 month": {
      length: "1.6–1.8 inch",
      weight: "0.37 ounces",
      plan: "Keep offering a varied diet, including commercial pellets, live or frozen foods, and vegetables. Begin to reduce the frequency of feedings to 2 times a day.",
      foods: "Pellets, brine shrimp, bloodworms, blanched vegetables."
    },
    "6 month": {
      length: "1.5–2 inch",
      weight: "0.4 ounces",
      plan: "Continue with the diverse diet, but you can start focusing more on high-quality commercial pellets as their main food source. Feed them once or twice a day.",
      foods: "Pellets, bloodworms, daphnia, blanched vegetables."
    }
  }

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      uploadImage(result.uri);
    }
  };

  const uploadImage = async (uri) => {
    const formData = new FormData();
    formData.append('image', {
      uri,
      name: 'image.jpg',
      type: 'image/jpeg',
    });

    try {
      const response = await axios.post(SERVER_URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Image uploaded successfully');
      
      if(response.data) {
        setDetails(data[response.data.prediction]);
        setAge(response.data.prediction);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.insLabel}>Upload Goldfish Image</Text>
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Select an Image</Text>
      </TouchableOpacity>
      {image && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
          {age?<Text style={styles.imageLabel}>{age}</Text>:<Text style={styles.imageLabel}>Image Preview</Text>}
          {details?<Text style={styles.detailsLabel}>Length: {details.length}</Text>:<Text style={styles.detailsLabel}>--</Text>}
          {details?<Text style={styles.detailsLabel}>Weight: {details.weight}</Text>:<Text style={styles.detailsLabel}>--</Text>}
          {details?<Text style={styles.detailsLabel}>Foods: {details.foods}</Text>:<Text style={styles.detailsLabel}>--</Text>}
          {details?<Text style={styles.detailspa}>{details.plan}</Text>:<Text style={styles.detailspa}>--</Text>}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#003455',
    minHeight: '100%'
  },
  button: {
    backgroundColor: 'tomato', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white', 
    fontSize: 16,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
    // backgroundColor: '#003455'
  },
  image: {
    width: 300,
    height: 300,
    borderWidth: 10,
    borderColor: 'tomato',
    resizeMode: 'contain',
    borderRadius: 15
  },
  insLabel: {
    marginTop: 10,
    marginBottom:15,
    fontSize: 18,
    color: 'white'
  },
  imageLabel: {
    marginTop: 10,
    marginBottom:15,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  detailsLabel: {
    fontSize: 15,
    color: 'white'
  },
  detailspa: {
    fontSize: 15,
    color: 'white',
    textAlign: 'left',
    padding: 10,
  },
});

export default GrowthPredictionScreen;