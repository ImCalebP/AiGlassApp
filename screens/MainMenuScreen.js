import React from 'react';
import { StyleSheet, View, TouchableOpacity, ImageBackground, Image, Text } from 'react-native';
import { Video } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'; 


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
          {}
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
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => navigation.navigate('ConversationHistory')} // Add navigation to ConversationHistory screen
          >
            <Image
              source={require('../assets/images/time-manager.png')}
              style={styles.menuImage}
              resizeMode="contain"
            />
            <Text style={styles.menuItemText}>Conversation History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('LiveFeed')}>
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
    width: 50, 
    marginRight: 10, 
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  videoContainer: {
    width: 600, 
    height: 200, 
    position: 'relative',
    alignSelf: 'center',
    marginTop: -5, 
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
    height: 20, 
  },
  menuContainer: {
    width: '90%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20, 
  },
  menuItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: '45%',
    height: 200, 
    justifyContent: 'center', 
    alignItems: 'center', 
    margin: 4,
    borderRadius: 35,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    paddingBottom: 10,
  },
  menuImage: {
    width: 100, 
    height: 100,
    marginBottom: 30, 
  },
  menuItemText: {
    color: '#474747', 
    fontSize: 14, 
    fontWeight: 'bold', 
    textAlign: 'center', 
  },
  helloText: {
    color: 'gray',
    fontSize: 16, 
  },
  userNameText: {
    fontSize: 30, 
    fontWeight: 'bold',
  },
  signOutButton: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.4)', 
    elevation: 2, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25, 
    shadowRadius: 3.84, 
  },
  signOutText: {
    color: '#0000FF', 
    fontSize: 12, 
  },
  
});

export default MainMenuScreen;
