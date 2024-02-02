import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground,Image } from 'react-native';
import {Video} from 'expo-av';
const MainMenuScreen = () => {
  return (
    <ImageBackground 
      source={require('../assets/images/abstract-blur-pink-blue-gradient-background-design_53876-169254.png')} 
      style={styles.backgroundImage}
      resizeMode="cover"
    ><View style={styles.container}>
        <Video
          source={require('../assets/images/glasses.mov')} // Replace with your video path
          style={styles.videoLargeWithOpacity}
          resizeMode="contain"
          shouldPlay
          isLooping
        />
        <View style={styles.header}>
          
        </View>
      
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem}>
            {/* Replace the Text component with an Image component */}
            <Image
              source={require('../assets/images/virtual-reality.png')} // Make sure this path is correct
              style={styles.menuImage}
              resizeMode="contain" // This ensures the image fits within the button
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            {/* Replace the Text component with an Image component */}
            <Image
              source={require('../assets/images/time-manager.png')} // Make sure this path is correct
              style={styles.menuImage}
              resizeMode="contain" // This ensures the image fits within the button
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            {/* Replace the Text component with an Image component */}
            <Image
              source={require('../assets/images/message.png')} // Make sure this path is correct
              style={styles.menuImage}
              resizeMode="contain" // This ensures the image fits within the button
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            {/* Replace the Text component with an Image component */}
            <Image
              source={require('../assets/images/setting.png')} // Make sure this path is correct
              style={styles.menuImage}
              resizeMode="contain" // This ensures the image fits within the button
            />
          </TouchableOpacity>
          {/* ... other buttons */}
        </View>
      </View>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  logo: {
    height: 100, // Adjust the height as needed
    width: 100, // Adjust the width as needed
    alignSelf: 'center', // Center the logo
    marginTop: 20, // Adjust the margin as needed
  },
  headerVideo: {
    height: 50, // Adjust the height as needed
    width: '100%', // Set the width as needed
    marginBottom: 30,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  menuImage: {
    width: 100, // Adjust the size as needed
    height: 100, // Adjust the size as needed
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  header: {
    marginBottom: 30,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center', // This will center the text
    width: '100%', // Ensure the text has full width to allow centering
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 20,
    color: '#aaa',
  },
  menuContainer: {
    width: '90%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  menuItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)', // Adjust the last number for opacity
    width: '40%', // You will need to adjust this to fit your design
    height: 200, // You will need to adjust this to fit your design
    justifyContent: 'center',
    alignItems: 'center',
    margin: 7,
    borderRadius: 40,
    elevation: 2, // Only works on Android
    shadowColor: '#000', // Only works on iOS
    shadowOffset: { width: 0, height: 2 }, // Only works on iOS
    shadowOpacity: 0.25, // Only works on iOS
    shadowRadius: 3.84, // Only works on iOS
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
  headerVideo: {
    height: 50, // Adjust height as needed
    width: '100%', // Adjust width as needed
  },
  videoLargeWithOpacity: {
    width: 300, // Adjust width as needed
    height: 200, // Adjust height as needed
    opacity: 0.5, // Adjust opacity as needed
    alignSelf: 'center',
  },
});


export default MainMenuScreen;
