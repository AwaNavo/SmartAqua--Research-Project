import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  Modal,
  TouchableHighlight,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "./Styles";
import { renderDiseaseInfo, renderTreatmentInfo } from "./DiseaseData";
import { topicMapping } from "./DiseaseData";

const DiseaseInfoModal = ({
  selectedTile,
  responseText,
  modalVisible,
  setModalVisible,
}) => {
  const [topicVisibility, setTopicVisibility] = useState({});
  const [showImage, setShowImage] = useState(true); // Set initial value to true to show the image

  // Define a mapping between responseText and image sources
  const imageMapping = {
    Redspot: require("../../assets/down.gif"),
    Whitespot: require("../../assets/down.gif"),
    Tailrot: require("../../assets/down.gif"),
    Healthy: require("../../assets/down.gif"),
    default: require("../../assets/icon.png"), // Default image source
  };

  // Define a new mapping between responseText and topics

  if (selectedTile === "information" && responseText) {
    const topics = topicMapping[responseText] || topicMapping.default;

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeaderText}>Disease Information</Text>
            <ScrollView>
              <Image
                source={require("../../assets/fish.gif")}
                style={styles.imageStyleHead}
                resizeMode="contain" // Adjust the resizeMode based on your preference
              />
              <Text style={styles.modalText}>
                {renderDiseaseInfo(responseText)}
              </Text>
              <Image
                source={imageMapping[responseText] || imageMapping.default}
                style={styles.imageStyleBody}
                resizeMode="cover" // Adjust the resizeMode based on your preference
              />
              <Text style={styles.expandText}>[Press + To Expand]</Text>

              {/* Collapsible Subtopics */}
              {topics.map((topic, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.topicHeaderContainer}
                  onPress={() =>
                    setTopicVisibility({
                      ...topicVisibility,
                      [topic.name]: !topicVisibility[topic.name],
                    })
                  }
                >
                  <Text style={styles.topicHeader}>{topic.name}</Text>
                  {topicVisibility[topic.name] && (
                    <>
                      <Text style={styles.topicText}>{topic.content}</Text>
                      {topic.imageContent && (
                        <Image
                          source={topic.imageContent}
                          style={styles.topicImage}
                          resizeMode="contain"
                        />
                      )}
                    </>
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>

            <TouchableHighlight
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    );
  }
  // If no valid selectedTile or responseText, return null
  return null;
};

export default DiseaseInfoModal;
