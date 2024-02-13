import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, FlatList,SafeAreaView  } from 'react-native';
import { Video } from 'expo-av';
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
const LiveFeedScreen = () => {
    const navigation = useNavigation();
    const [visibleMessages, setVisibleMessages] = useState([]);
  
    useEffect(() => {
      // This function simulates real-time message sending by adding messages to the visibleMessages array
      const addMessage = (message) => {
        setVisibleMessages((currentMessages) => [message, ...currentMessages]);
      };
  
      // Start a timer that adds messages every few seconds
      const messageInterval = setInterval(() => {
        if (messages.length > visibleMessages.length) {
          addMessage(messages[visibleMessages.length]);
        } else {
          clearInterval(messageInterval);
        }
      }, 2000); // Adjust time as needed
  
      return () => clearInterval(messageInterval);
    }, [visibleMessages.length]);
  
    const renderMessageItem = ({ item }) => {
      return (
        <View
          style={[
            styles.messageItem,
            item.isIncoming ? styles.incomingMessage : styles.outgoingMessage,
          ]}
        >
          <Text style={styles.messageText}>{item.text}</Text>
        </View>
      );
    };
  
    return (
        <SafeAreaView style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity 
          onPress={() => navigation.navigate('MainMenu')} 
          style={styles.backButton}
        >
          <Image
            source={require('../assets/images/fleche-gauche.png')}
            style={styles.backButtonImage}
            resizeMode="contain"
          />
        </TouchableOpacity>

        {/* Header: Adjusted to include the video on the right */}
        <View style={styles.fullWidthHeader}>
          <View style={styles.headerContainer}>
            <Image
              source={require('../assets/images/logo.png')} 
              style={styles.logo}
              resizeMode="contain"
            />
            <View>
              <Text style={styles.helloText}>Live</Text>
              <Text style={styles.userNameText}>Feed</Text>
            </View>
          </View>

          {/* Video Container aligned to the right */}
          <View style={styles.videoContainer}>
            <Video
              source={require('../assets/images/glasses.mov')}
              style={styles.video}
              resizeMode="contain"
              shouldPlay
              isLooping
            />
          </View>
        </View>
        {/* Fullscreen Video under the header */}
        <Video
          source={require('../assets/images/livefeed.mp4')}
          style={styles.fullscreenVideo}
          resizeMode="cover"
          shouldPlay
          isLooping
          rate={1.0}
          volume={1.0}
          isMuted={false}
        />
  
        {/* Animated Messages */}
        <FlatList
          data={visibleMessages}
          renderItem={renderMessageItem}
          keyExtractor={(item) => item.id}
          style={styles.messagesList}
          inverted
        />
      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  fullWidthHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  helloText: {
    color: 'gray',
    fontSize: 16,
  },
  userNameText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  videoContainer: {
    
    width: 130, 
    height: 100, 
    borderRadius: 150, 
    overflow: 'hidden', 
  },
  
  video: {
    width: '100%',
    height: '100%',
    opacity: 0.8,
    borderRadius: 150,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  backButtonImage: {
    width: 30,
    height: 30,
  },
  fullscreenVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.15, 
  },
  messagesList: {
    position: 'absolute',
    top: 120, 
    width: '100%',
    paddingHorizontal: 20,
  },
  messageItem: {
    backgroundColor: '#ffffff90', 
    padding: 10,
    borderRadius: 15,
    marginVertical: 5,
    maxWidth: '80%',
    alignSelf: 'flex-start',
  },
  incomingMessage: {
    backgroundColor: '#dddddd90', 
    marginLeft: 20,
  },
  outgoingMessage: {
    alignSelf: 'flex-end',
    marginRight: 20,
    backgroundColor: '#e197f090'
   
  },
  messageText: {
    color: 'black',
  },
  

});

export default LiveFeedScreen;
