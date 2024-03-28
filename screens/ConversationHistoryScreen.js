import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_DB } from '../config/firebase';
import { 
  collection, 
  getDocs,
  doc, 
  setDoc,
} from '@firebase/firestore';
import { query, orderBy } from '@firebase/firestore';

async function getAllMessages() {
  const allMessages = [];
  try {
    const db = FIREBASE_DB;
    // Reference to the 'messages' collection
    const messagesRef = collection(db, "messages");
    // Create a query against the collection, ordered by timestamp
    const messagesQuery = query(messagesRef, orderBy("timestamp", "desc"));

    // Execute the query
    const querySnapshot = await getDocs(messagesQuery);

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      let timestamp;
      // Check if the timestamp exists and is a Firestore Timestamp
      if (data.timestamp && typeof data.timestamp.toDate === 'function') {
        timestamp = data.timestamp.toDate(); // Firestore Timestamp object
      } else {
        // Handle cases where timestamp may not be a Firestore Timestamp object
        // For example, if it's a string:
        timestamp = new Date(data.timestamp || Date.now()); // Fallback to current time if timestamp is missing
      }
      allMessages.push({
        id: doc.id,
        text: data.content,
        timestamp: timestamp,
        isIncoming: data.isIncoming,
      });
    });
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error;
  }

  return allMessages;
}

const ConversationHistoryScreen = () => {

const [messages, setMessages] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);
const [selectedMessageId, setSelectedMessageId] = useState(null);
 
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const fetchedMessages = await getAllMessages();
        setMessages(fetchedMessages);
      } catch (error) {
        console.error("Error fetching messages:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData()
  }, [messages]);

  const renderMessageItem = ({ item }) => {
    const messageDate = item.timestamp.toLocaleDateString();
    const messageTime = item.timestamp.toLocaleTimeString();
    const isMessageSelected = selectedMessageId === item.id;
    console.log("attempting to render message item...")
    return (
      <TouchableOpacity
        onPress={() => setSelectedMessageId(isMessageSelected ? null : item.id)}
        style={[
          styles.messageItem,
          item.isIncoming ? styles.incomingMessage : styles.outgoingMessage,
        ]}
      >
        <Text style={styles.messageText}>{item.text}</Text>
        {isMessageSelected && (
          <View style={styles.timestampContainer}>
            <Text style={styles.timestamp}>{`${messageDate} at ${messageTime}`}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  console.log("Messages:", messages); 
  return ( 
      <SafeAreaView style={styles.container}>
      {/* Custom Header */}
      <View style={styles.headerBar}>
      <TouchableOpacity onPress={() => navigation.navigate('MainMenu')} style={styles.backButton}>
          <Image
            source={require('../assets/images/fleche-gauche.png')} // Adjust path as needed
            style={styles.backButtonImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Image
            source={require('../assets/images/logo.png')} 
            style={styles.headerLogo}
            resizeMode="contain"
          />
          <Text style={styles.headerTitle}>Conversation History</Text>
          
        </View>
      </View> 
      
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id} 
        renderItem={renderMessageItem} 
        inverted
      />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  messageItem: {
    margin: 10,
    padding: 10,
    borderRadius: 20,
    maxWidth: '75%',
  },
  incomingMessage: {
    backgroundColor: '#ddd',
    alignSelf: 'flex-start',
  },
  outgoingMessage: {
    backgroundColor: '#e197f0',
    alignSelf: 'flex-end',
  },
  messageText: {
    color: 'black',
  },
  timestampContainer: {
    marginTop: 5,
  },
  timestamp: {
    color: 'grey',
    fontSize: 12,
    fontStyle: 'italic',
  },
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center items horizontally
    padding: 0,
    position: 'relative', // Ensure the headerBar has a positioning context
  },
  backButton: {
    position: 'absolute', // Keep backButton absolutely positioned
    left: 10, // Adjust based on your layout needs
    top: '50%', // Adjust based on your layout needs
    transform: [{ translateY: -12 }], // Center the button vertically relative to its height
    zIndex: 1,
  },
  backButtonText: {
    
    fontSize: 14,
  },
  headerContent: {
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center', // Center items vertically
    flexDirection: 'column', // Stack items vertically
  },
  headerLogo: {
    width: 50, 
    height: 50, 
    marginVertical: 0,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 3, 
  },
  backButtonImage: {
    width: 25, // Adjust width as needed
    height: 25, // Adjust height as needed
  },
  //
  
});

export default ConversationHistoryScreen;