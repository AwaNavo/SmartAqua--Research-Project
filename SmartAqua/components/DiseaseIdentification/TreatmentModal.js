import React, { useState, useEffect } from "react";
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
import { Questions } from "./TreatmentData";
import { RedspotMapping, WhiteMapping, TailrotMapping } from "./TreatmentData";
import { Picker } from "@react-native-picker/picker";
import loadingGif from "../../assets/loading2.gif";

const TreatmentModal = ({
  selectedTile,
  responseText,
  modalVisible,
  setModalVisible,
}) => {
  const [topicVisibility, setTopicVisibility] = useState({});
  // const [showImage, setShowImage] = useState(true);
  const [selectedValues, setSelectedValues] = useState({}); // New state variable
  const [showTreatmentPlan, setShowTreatmentPlan] = useState(false);
  const [loading, setLoading] = useState(false); // Add this line
  const [scrollY, setScrollY] = useState(0);
  const maxScrollPositionToShowProduce = 600; // Adjust this value as needed
  const shouldShowProduceButton = scrollY >= maxScrollPositionToShowProduce;

  useEffect(() => {
    // Initialize topicVisibility state when component mounts
    if (selectedTile === "treatment" && responseText) {
      const topics = Questions[responseText] || Questions.default;
      const initialTopicVisibility = topics.reduce(
        (acc, topic) => ({ ...acc, [topic.name]: true }),
        {}
      );
      setTopicVisibility(initialTopicVisibility);

      // Initialize selectedValues for each topic with default values if options exist
      const initialSelectedValues = topics.reduce((acc, topic) => {
        if (topic.options && topic.options.length > 0) {
          return { ...acc, [topic.name]: topic.options[0] };
        }
        return acc;
      }, {});
      setSelectedValues(initialSelectedValues);
    }
  }, [selectedTile, responseText]);

  // Choose the appropriate optionDisplayMapping based on responseText
  let selectedOptionDisplayMapping;
  if (responseText === "Redspot") {
    selectedOptionDisplayMapping = RedspotMapping;
  } else if (responseText === "Whitespot") {
    selectedOptionDisplayMapping = WhiteMapping;
  } else if (responseText === "Tailrot") {
    selectedOptionDisplayMapping = TailrotMapping;
  } else {
    selectedOptionDisplayMapping = {}; // Default mapping or handle as needed
  }

  const imageMapping = {
    Redspot: require("../../assets/down.gif"),
    Whitespot: require("../../assets/down.gif"),
    Tailrot: require("../../assets/down.gif"),
    Healthy: require("../../assets/down.gif"),
    default: require("../../assets/icon.png"), // Default image source
  };

  if (selectedTile === "treatment" && responseText) {
    const topics = Questions[responseText] || Questions.default;

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeaderText}>
              {showTreatmentPlan
                ? "Customized Treatment Plan for Your Fish"
                : `Treatment Methods for ${responseText}`}
            </Text>
            {showTreatmentPlan ? null : (
              <ScrollView
                style={styles.scrollTreatament}
                onScroll={(event) => {
                  const offsetY = event.nativeEvent.contentOffset.y;
                  setScrollY(offsetY);
                }}
              >
                <Image
                  source={require("../../assets/fish.gif")}
                  style={styles.imageStyleHead}
                  resizeMode="contain"
                />
                <Text style={styles.modalText}>
                  {renderDiseaseInfo(responseText)}
                </Text>

                <Text style={styles.treatmentExpandText}>
                  Answer Follwing Questions to Create a Custom Treatment Plan
                </Text>
                <Text style={styles.expandText}>[Press 🔻 To Expand]</Text>
                <Image
                  source={imageMapping[responseText] || imageMapping.default}
                  style={styles.imageStyleBody}
                  resizeMode="cover"
                />
                {/* Collapsible Subtopics */}
                {topics.map((topic, index) => (
                  <View key={index} style={styles.pickerContainer}>
                    <Text style={styles.treatmentTopicHeader}>
                      {topic.name}
                    </Text>
                    {topicVisibility[topic.name] && (
                      <>
                        <Text style={styles.treatmeentTopicText}>
                          {topic.question}
                        </Text>
                        <Picker
                          style={styles.picker}
                          selectedValue={selectedValues[topic.name] || ""}
                          onValueChange={(itemValue, itemIndex) => {
                            setSelectedValues((prevValues) => ({
                              ...prevValues,
                              [topic.name]: itemValue,
                            }));
                          }}
                        >
                          {topic.options &&
                            topic.options.map((option, optionIndex) => (
                              <Picker.Item
                                key={optionIndex}
                                label={option}
                                value={option}
                              />
                            ))}
                        </Picker>
                      </>
                    )}
                  </View>
                ))}
              </ScrollView>
            )}

            {/* Display treatment plan based on showTreatmentPlan state */}
            {showTreatmentPlan && (
              <>
                <ScrollView>
                  {Object.keys(selectedValues).map((topicName, index) => (
                    <Text style={styles.treatmentPlanText} key={index}>
                      <Text style={[styles.boldText, styles.stepText]}>
                        Step
                      </Text>{" "}
                      <Text style={[styles.boldText, styles.stepNumber]}>
                        {index + 1}
                      </Text>
                      :{" "}
                      {selectedOptionDisplayMapping[
                        selectedValues[topicName]
                      ] || selectedValues[topicName]}
                    </Text>
                  ))}
                </ScrollView>
                <TouchableHighlight
                  style={styles.closeButton}
                  onPress={() => {
                    setShowTreatmentPlan(false);
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableHighlight>
              </>
            )}
            {!shouldShowProduceButton && (
              <TouchableHighlight
                style={styles.closeButton}
                onPress={() => {
                  setShowTreatmentPlan(false);
                  setModalVisible(false);
                }}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableHighlight>
            )}

            {shouldShowProduceButton && !showTreatmentPlan && (
              <TouchableHighlight
                style={styles.TreatmentButton}
                onPress={() => {
                  setShowTreatmentPlan(false);

                  // Display the loading animation
                  setLoading(true);

                  setTimeout(() => {
                    setShowTreatmentPlan(true);
                    setLoading(false); // Hide the loading animation
                  }, 3000); // 2000 milliseconds (2 seconds) delay
                }}
              >
                {loading ? (
                  <View style={styles.loaderContainer}>
                    {/* Replace the Text with the Image component */}
                    <Image
                      source={require("../../assets/loading2.gif")}
                      style={styles.loaderImage}
                    />
                  </View>
                ) : (
                  <Text style={styles.TreatmentButtonText}>
                    Produce a Treatment Plan
                  </Text>
                )}
              </TouchableHighlight>
            )}
          </View>
        </View>
      </Modal>
    );
  }

  return null;
};

export default TreatmentModal;
