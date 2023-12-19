import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  ScrollView,
  Modal,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";

import loadingGif from "../../assets/loading2.gif";

const AIModal = ({ selectedTile, modalVisible, setModalVisible }) => {
  const [scrollY, setScrollY] = useState(0);

  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const scrollViewRef = useRef();

  const addMessageToHistory = (text, type) => {
    const newMessage = { text, type };
    setChatHistory((prevHistory) => [...prevHistory, newMessage]);
  };

  const handleSend = async () => {
    if (userInput.trim() !== "") {
      // Add user input to the chat history
      addMessageToHistory(userInput, "user");

      try {
        setLoading(true);

        //https://aquaapi-fuav.onrender.com/chat
        const response = await fetch("https://smart-aapi.onrender.com/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ input: userInput }),
        });

        if (response.ok) {
          const data = await response.json();
          const aiResponse = data.reply;
          addMessageToHistory(aiResponse, "ai");
        } else {
          console.error("Error sending message to server");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
        scrollToBottom();
      }

      setUserInput("");
    }
  };

  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  useEffect(() => {
    if (modalVisible && chatHistory.length === 0) {
      // Add this conditional check
      addMessageToHistory("Hello, how can I assist you?", "ai");
    }
  }, [modalVisible, chatHistory]);

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.y;
    setScrollY(scrollPosition);
  };

  if (selectedTile === "AI") {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>AI Assistant</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              style={styles.chatContainer}
              onScroll={handleScroll}
              ref={scrollViewRef}
            >
              {chatHistory.map((item, index) => (
                <View
                  key={index}
                  style={[
                    styles.messageContainer,
                    item.type === "user"
                      ? styles.userMessage
                      : styles.aiMessage,
                  ]}
                >
                  <Text style={styles.messageText}>{item.text}</Text>
                </View>
              ))}
              {loading && (
                <View style={styles.loadingContainer}>
                  <ActivityIndicator size="large" color="#2E3047" />
                </View>
              )}
            </ScrollView>
            <KeyboardAvoidingView
              behavior="padding"
              style={styles.inputContainer}
            >
              <TextInput
                style={styles.input}
                placeholder="Type your message..."
                value={userInput}
                onChangeText={(text) => setUserInput(text)}
              />
              <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
                <Text style={styles.sendButtonText}>Send</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </View>
        </View>
      </Modal>
    );
  }
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  closeButton: {
    alignSelf: "flex-end",
    padding: 10,
  },
  closeButtonText: {
    color: "#2E3047",
    fontSize: 16,
  },
  chatContainer: {
    maxHeight: 320,
  },
  messageContainer: {
    padding: 10,
    borderRadius: 8,
    maxWidth: "70%",
    marginBottom: 10,
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#2CBE76",
    color: "#fff",
  },
  aiMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#2E3047",
    color: "#fff", // Change this to match the AI message text color
  },
  messageText: {
    fontSize: 16,
    lineHeight: 20,
    color: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "#2CBE76",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  sendButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  loadingContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: -15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AIModal;
