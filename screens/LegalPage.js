import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Switch, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const LegalPage = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

 


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
          <Text style={styles.headerTitle}>Properties informations</Text>
        </View>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.text}>Made by Capston Team 4:</Text>
        <Text style={styles.names}>Caleb Paradis, Ben Morris, Abilaash Uthayachandran, Zain Salman, Joseph El-Nouni, Steven Li</Text>
        
      </View>
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
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4', // Light grey background
  },
  inputContainer: {
    backgroundColor: '#ffffff', // White background for input fields
    borderRadius: 8,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    shadowColor: '#000', // Shadow for a subtle elevation effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Elevation for Android
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333', // Dark grey color for text
    marginBottom: 5,
  },
  input: {
    fontSize: 14,
    color: '#666', // Medium grey for input text
    paddingVertical: 8,
    borderBottomWidth: 1, // Underline effect for the input
    borderBottomColor: '#ddd', // Light grey for the underline
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  toggleLabel: {
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#1E90FF', // Blue color for the button
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3, // Elevation for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#ffffff', // White color for button text
    fontSize: 16,
    fontWeight: 'bold',
  },
  
});

export default LegalPage;
