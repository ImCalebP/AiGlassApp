import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const ConversationHistoryScreen = () => {
  const [conversationData, setConversationData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const conversationRef = firestore().collection('conversations').doc('conversationId1');
        const messagesSnapshot = await conversationRef.collection('messages').orderBy('timestamp').get();

        const messagesData = [];
        messagesSnapshot.forEach(doc => {
          messagesData.push({ id: doc.id, ...doc.data() });
        });

        setConversationData(messagesData);
      } catch (error) {
        console.error('Error fetching conversation data: ', error);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Cleanup if necessary
    };
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={conversationData}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text>{item.content}</Text>
            <Text>Sender: {item.sender}</Text>
            <Text>Timestamp: {item.timestamp.toDate().toString()}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  messageContainer: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
});

export default ConversationHistoryScreen;
