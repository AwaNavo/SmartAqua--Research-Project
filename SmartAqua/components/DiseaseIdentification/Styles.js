import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2e3047",
    paddingTop: 0,
  },
  mainImageContainer: {
    alignItems: "center",
    backgroundColor: "#2e3047",
  },
  imageContainer: {
    alignItems: "center",
  },
  mainButtonContainer: {
    backgroundColor: "#4A4B69",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 13,
  },
  buttonAI: {
    backgroundColor: "#2E3047",
    paddingVertical: 10,
    borderRadius: 1,
    width: "25%",
    borderWidth: 2, // Add border width
    borderColor: "#707793", // Add border color
    borderRadius: 50,
    marginRight: 10,
    alignItems: "center",
    borderWidth: 2, // Add border width
    justifyContent: "center", // Center content vertically and horizontally
    textAlign: "center",
  },
  button: {
    backgroundColor: "#4A4B69",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 1,
    width: "25%",
    borderWidth: 2, // Add border width
    borderColor: "#707793", // Add border color
  },
  imageStyleHero: {
    width: "100%",
    height: 100, // Adjust the height as needed
    marginBottom: 0,
    marginTop: -25,
  },
  imageStyleHero2: {
    width: "100%",
    height: "55%", // Adjust the height as needed
    marginBottom: 10,
  },
  predictButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  predictButton: {
    backgroundColor: "#2E3047",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: "92%",
    marginBottom: 10,
    borderWidth: 2, // Add border width
    borderColor: "#707793", // Add border color
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  infoContainer: {
    borderWidth: 4, // Add border width
    borderColor: "#2e3047", // Add border color
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 2.5,
    resizeMode: "cover",
  },
  diseaseHeaderText: {
    // fontFamily: "monospace",
    fontSize: 18,
    paddingHorizontal: 20,
    color: "#2e3047",
    backgroundColor: "#F9F9F9",
    borderRadius: 50,
    paddingVertical: 10,
    marginTop: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  diseaseInfoText: {
    // fontFamily: "monospace",
    fontSize: 16,
    paddingHorizontal: 10,
    color: "black",
    borderRadius: 5,
    paddingVertical: 10,
    marginBottom: 10,
  },
  tilesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  tile: {
    // backgroundColor: "#294962",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
    borderWidth: 2, // Add border width
    borderColor: "#707793", // Add border color
  },
  tileText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
    width: "90%",
    height: "90%",
  },
  modalHeaderText: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#2e3047",
  },
  modalText: {
    fontSize: 12,
    textAlign: "center",
  },
  placeholderContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    aspectRatio: 4 / 2.5,

    // borderWidth: 2,
    // borderColor: "#ccc",
    borderRadius: 8,
    // backgroundColor: "#f0f0f0",
  },
  placeholderText: {
    marginTop: 2,
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    // fontFamily: "serif",
    marginTop: 190,
  },
  placeholderText2: {
    marginTop: 2,
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    // fontFamily: "monospace",
    textAlign: "center",
    marginTop: -50,
  },
  placeholderTextHero: {
    marginTop: 2,
    fontSize: 14,
    // fontFamily: "monospace",
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginTop: -50,
  },
  placeholderImage: {
    width: "80%",
    height: "80%",
    resizeMode: "cover",
    marginBottom: 20,
    display: "none",
  },
  backgroundImage: {
    position: "absolute",
    width: "30%",
    height: "50%",
    top: 0,
    left: 0,
    zIndex: -2,
    resizeMode: "contain",
    transform: [{ rotate: "130deg" }],
  },
  backgroundImage2: {
    position: "absolute",
    width: "100%",
    height: "100%",
    bottom: 0,
    right: 0,
    zIndex: 4,
    resizeMode: "cover",
  },
  backgroundImage3: {
    position: "absolute",
    width: "30%",
    height: "50%",
    top: 0,
    right: 0,
    zIndex: -2,
    resizeMode: "contain",
    transform: [{ rotate: "30deg" }],
  },
  numberedList: {
    marginLeft: 20, // Adjust this value to control the indentation of the numbered list
  },
  imageStyleHead: {
    width: "100%",
    height: 100, // Adjust the height as needed
    marginBottom: 10,
    marginTop: -30,
  },
  imageStyle: {
    width: "100%",
    height: 250, // Adjust the height as needed
    marginBottom: 10,
    marginTop: 10,
  },
  topicHeader: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
    // fontFamily: "monospace",
    textAlign: "center",
  },
  imageStyleBody: {
    width: "100%",
    height: 50, // Adjust the height as needed
    marginBottom: 0,
    marginTop: 0,
  },
  topicImage: {
    width: "100%",
    height: 350, // Adjust the height as needed
    marginBottom: 10,
    marginTop: 10,
  },
  topicHeaderContainer: {
    marginTop: 15,
  },
  expandText: {
    marginTop: 20,
    textAlign: "center",
  },
  treatmentExpandText: {
    marginTop: 20,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#2e3047",
  },
  topicText: {
    marginHorizontal: 5,
    marginTop: 10,
    textAlign: "center",

    // fontFamily: "monospace",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loaderImage: {
    width: "100%",
    height: 250,
  },

  treatmentTopicHeader: {
    fontWeight: "bold",
    fontSize: 20,
    // fontFamily: "monospace",
    textAlign: "center",
    color: "#2e3047",
    marginTop: 10,
  },
  treatmeentTopicText: {
    fontWeight: "bold",
    fontSize: 14,
    // fontFamily: "monospace",
    textAlign: "center",
    color: "black",
    marginTop: 5,
  },
  pickerContainer: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#2e3047",
    borderRadius: 5,
    paddingHorizontal: 5,
    backgroundColor: "white",
  },

  picker: {
    height: "auto",
    width: "70%",
    alignSelf: "center",
  },

  treatmentPlanText: {
    marginTop: 30,
    // textAlign: "center",
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: "#4A4B69",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "flex-end",
    marginTop: 20,
    width: "100%",
  },
  closeButtonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  TreatmentButton: {
    backgroundColor: "#2e3047",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "flex-end",
    marginTop: 20,
    width: "100%",
  },
  TreatmentButtonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  boldText: {
    fontWeight: "bold",
  },
  stepText: {
    color: "#2e3047",
    // Add any additional styling you want for the "Step" text
  },
  stepNumber: {
    color: "#2e3047",

    // Add any additional styling you want for the step number
  },
  loadingGif: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 10,
    resizeMode: "contain",
    backgroundColor: "white",
  },
  disabledButton: {
    backgroundColor: "gray",
  },
});

export default styles;
