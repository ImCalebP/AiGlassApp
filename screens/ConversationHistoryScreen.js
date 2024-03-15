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

 async function getAllMessages() {
  const allMessages = [];
  try {
    // console.log("Getting all messages...");
    const db = FIREBASE_DB;
    const conversationsRef = collection(db, "conversations");

    const querySnapshot = await getDocs(conversationsRef);

    
    for (const conversationDoc of querySnapshot.docs) {
      const conversationId = conversationDoc.id;
      const conversationData = conversationDoc.data();
      
      // console.log("Conversation ID:", conversationId);
      // console.log("Conversation Data:", conversationData);

      const messagesRef = collection(conversationDoc.ref, "messages");
      const messageSnapshot = await getDocs(messagesRef);

      for (const messageDoc of messageSnapshot.docs) {
        const messageId = messageDoc.id;
        const messageData = messageDoc.data().content;
        const messageSender = messageDoc.data().sender;
        const messageRecord = {}
        const messageIncoming = messageDoc.data().isIncoming;
        
      //  console.log("Message ID:", messageId);
      //  console.log("Message Data:", messageData);
      
      messageRecord["id"] = messageId
      messageRecord["text"] = messageData
      messageRecord["sender"] = messageSender
      messageRecord["timestamp"] = new Date(1000 * messageDoc.data()["date"]["seconds"])
      if (messageIncoming == true) {
        messageRecord["isIncoming"] = true;
      } else {
        messageRecord["isIncoming"] = false;
      }
      allMessages.push(messageRecord);
      }
    }

    
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error; // Re-throw the error for further handling
  }
 
  // console.log("All messages:", allMessages);

  return allMessages;
}

const sampleMessages = [
  { id: '1', text: 'Yo Abi is great', timestamp: new Date(), isIncoming: true },
  { id: '2', text: 'Yeah dude he works well', timestamp: new Date(), isIncoming: false },
  { id: '3', text: 'We have the best capstone project I hope we get a good mark', timestamp: new Date(), isIncoming: true },
];

/**
 * Uploads sample messages to the database.
 * TODO: When uploaded, conversations are not saved in the database. The documents do not exist, they will not appear in queries or snapshots.
 */
function uploadSampleMessages() {

  const db = FIREBASE_DB;
  const rootCollectionRef = collection(db, "conversations");
  const newConversationRef = doc(rootCollectionRef);
  const messagesRef = collection(newConversationRef, "messages");
  const navigation = useNavigation();

  sampleMessages.forEach((message) => {
    setDoc(doc(messagesRef), message)
      .then(() => {
        console.log("Message successfully written!");
      })
      .catch((error) => {
        console.error("Error writing message: ", error);
      });
  }); 
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