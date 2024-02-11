import React from 'react';
import { StyleSheet, View, TouchableOpacity, ImageBackground, Image, Text } from 'react-native';
import { Video } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'; // Make sure to import useNavigation


const MainMenuScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground 
    source={require('../assets/images/abstract-blur-pink-blue-gradient-background-design_53876-169254.png')} 
    style={styles.backgroundImage}
    resizeMode="cover"
  >
    <View style={styles.container}>
      {/* Header with text and logo */}
      <View style={styles.headerContainer}>
      <Image
          source={require('../assets/images/logo.png')} // Replace with your logo image file
          style={styles.logo}
          resizeMode="contain"
        />
        <View>
          <Text style={styles.helloText}>Hello</Text>
          <Text style={styles.userNameText}>AI user</Text>
        </View>
        
      </View>

        <View style={styles.videoContainer}>
          <Video
            source={require('../assets/images/glasses.mov')}
            style={styles.videoLargeWithOpacity}
            resizeMode="contain"
            shouldPlay
            isLooping
          />
          <LinearGradient
            colors={['#dddddd', '#ebe8e8']}
            style={styles.videoBorderBottom}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          />
          {/* You can add LinearGradient components for left and right borders if needed */}
        </View>

        {/* Menu items */}
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('../assets/images/virtual-reality.png')}
              style={styles.menuImage}
              resizeMode="contain"
            />
            <Text style={styles.menuItemText}>Device Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('../assets/images/time-manager.png')}
              style={styles.menuImage}
              resizeMode="contain"
            />
            <Text style={styles.menuItemText}>Conversation History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('../assets/images/message.png')}
              style={styles.menuImage}
              resizeMode="contain"
            />
            <Text style={styles.menuItemText}>Live Feed</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('../assets/images/setting.png')}
              style={styles.menuImage}
              resizeMode="contain"
            />
            <Text style={styles.menuItemText}>App Settings</Text>
          </TouchableOpacity>
          {/* Add more buttons as needed */}
        </View>
        {/* Sign Out Button */}
        <TouchableOpacity
          style={styles.signOutButton}
          onPress={() => navigation.navigate('Login')} // Navigate to LoginScreen
        >
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
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
  headerContainer: {
    alignSelf: 'flex-start',
    marginTop: 40,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50, // Set the width of the logo
    height: 50, // Set the height of the logo
    marginRight: 10, // Add some margin between logo and text
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  videoContainer: {
    width: 600, // Adjust as needed
    height: 200, // Adjust as needed
    position: 'relative',
    alignSelf: 'center',
    marginTop: -5, // Add some space from the top elements
  },
  videoLargeWithOpacity: {
    width: '100%',
    height: '100%',
    opacity: 0.8,
  },
  videoBorderBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 20, // Adjust the height for border size
  },
  menuContainer: {
    width: '90%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20, // Add some space from the video elements
  },
  menuItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: '45%',
    height: 200, // You may need to adjust this to fit the text
    justifyContent: 'center', // Aligns children (Image and Text) in the center vertically
    alignItems: 'center', // Aligns children (Image and Text) in the center horizontally
    margin: 4,
    borderRadius: 35,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Add padding at the bottom if necessary to avoid text being cut off
    paddingBottom: 10,
  },
  menuImage: {
    width: 100, // Adjust as needed
    height: 100, // Adjust as needed
    marginBottom: 30, // Add some space between the image and the text
  },
  menuItemText: {
    color: '#474747', // Black text color
    fontSize: 14, // Small font size for the text
    fontWeight: 'bold', // Bold text weight
    textAlign: 'center', // Center the text
  },
  helloText: {
    color: 'gray',
    fontSize: 16, // Smaller font size for 'Hello'
  },
  userNameText: {
    fontSize: 30, // Larger font size for 'Charmie'
    fontWeight: 'bold',
  },
  signOutButton: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.4)', // Semi-transparent white background
    elevation: 2, // Only works on Android for drop shadow
    shadowColor: '#000', // Only works on iOS for drop shadow
    shadowOffset: { width: 0, height: 2 }, // Only works on iOS for drop shadow
    shadowOpacity: 0.25, // Only works on iOS for drop shadow
    shadowRadius: 3.84, // Only works on iOS for drop shadow
  },
  signOutText: {
    color: '#0000FF', // Black text color
    fontSize: 12, // Small font size for the text
  },
  // Add any other styles you need here
});

export default MainMenuScreen;
