import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const messages = [
  { id: '1', text: 'Yo Abi is great', timestamp: new Date(), isIncoming: true },
  { id: '2', text: 'Yeah dude he works well', timestamp: new Date(), isIncoming: false },
  { id: '3', text: 'We have the best capstone project I hope we get a good mark', timestamp: new Date(), isIncoming: true },
  { id: '4', text: 'Yeah hopefully TAs will like it', timestamp: new Date(), isIncoming: false },
  { id: '5', text: 'Cheers,Caleb', timestamp: new Date(), isIncoming: true },
  { id: '6', text: 'Miley Cyrus', timestamp: new Date(), isIncoming: false },
  { id: '7', text: 'Zain pro VHDL', timestamp: new Date(), isIncoming: true },
  { id: '8', text: 'Ben the goat', timestamp: new Date(), isIncoming: false },
  { id: '9', text: 'CLICK ON MESSAGE TO SEE DATE/TIME IT WAS SENT ( TAKEN FROM ACTUAL LIVE DATE )', timestamp: new Date(), isIncoming: true },
  { id: '10', text: 'Ok this is boring now im tireds of writing random stuff', timestamp: new Date(), isIncoming: false },
  { id: '11', text: 'Caleb interface lol', timestamp: new Date(), isIncoming: true },
  { id: '12', text: 'Hope yall like the front end', timestamp: new Date(), isIncoming: false },
  { id: '13', text: 'Or I will cry', timestamp: new Date(), isIncoming: true },
  { id: '14', text: 'You can just use these message ID to load the text message from the data base I made it easy for you Steven and Abi', timestamp: new Date(), isIncoming: false },
  { id: '15', text: 'We could use the same style interface for live feed, maybe a live feed from camera aswell and live detection? or just text?', timestamp: new Date(), isIncoming: true },
  { id: '16', text: 'idk you tell me', timestamp: new Date(), isIncoming: false },
  
  // ... more messages
];

const ConversationHistoryScreen = () => {
  const navigation = useNavigation();
  const [selectedMessageId, setSelectedMessageId] = useState(null);

  const renderMessageItem = ({ item }) => {
    const messageDate = item.timestamp.toLocaleDateString();
    const messageTime = item.timestamp.toLocaleTimeString();
    const isMessageSelected = selectedMessageId === item.id;

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
