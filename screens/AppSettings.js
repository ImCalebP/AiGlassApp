import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Switch, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const AppSettings = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

 


  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header */}
      <View style={styles.headerBar}>
        <TouchableOpacity onPress={() => navigation.navigate('MainMenu')} style={styles.backButton}>
          <Image
            source={require('../assets/images/fleche-gauche.png')} 
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
          <Text style={styles.headerTitle}>App Settings</Text>
        </View>
      </View>
      
      {/* Name Change */}
      <View style={styles.inputContainer2}>
        <Text style={styles.inputLabel}>Set New Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          onChangeText={(text) => setName(text)} 
          value={name} 
        />
      </View>
  
      {/* Password Change */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Set New Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter new password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)} 
          value={password}
        />
      </View>
<View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Confirm New Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm new password "
          secureTextEntry={true}
          onChangeText={(text) => setPassword1(text)} 
          value={password1}
        />
      </View>
  
  
      {/* Notifications Toggle */}
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleLabel}>Notifications:</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={notificationsEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(newValue) => setNotificationsEnabled(newValue)} 
          value={notificationsEnabled}
        />
      </View>
      <View style={styles.buttonContainer}>
  <TouchableOpacity
    onPress={() => navigation.navigate('MainMenu')}  // Adjust Password sent to database and name here , button handling is here
    style={styles.confirmButton}
  >
    <Text style={styles.confirmButtonText}>Confirm</Text>
  </TouchableOpacity>
</View>
  
      {/* Navigate to Legal Page Button */}
      <View style={styles.buttonContainer}>
        <Button
          title="Legal"
          onPress={() => navigation.navigate('LegalPage')}
          color="#1E90FF"
        />
      </View>
   

    </SafeAreaView>
  );
  
};

const styles = StyleSheet.create({
    buttonContainer: {
        marginHorizontal: 20,
        marginTop: 20,
      },
      confirmButton: {
        backgroundColor: '#ad42f5', 
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 25, // Rounded corners
        shadowColor: 'rgba(0, 0, 0, 0.1)', 
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 3, 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
      },
      confirmButtonText: {
        color: '#FFFFFF', 
        fontSize: 16,
        fontWeight: 'bold',
      },
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
    justifyContent: 'center', 
    padding: 0,
    position: 'relative', 
  },
  backButton: {
    position: 'absolute', 
    left: 10,
    top: '50%', 
    transform: [{ translateY: -12 }], 
    zIndex: 1,
  },
  backButtonText: {
    
    fontSize: 14,
  },
  headerContent: {
    alignItems: 'center', 
    justifyContent: 'center', 
    flexDirection: 'column', 
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
    width: 25, 
    height: 25, 
  },
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  inputContainer: {
    backgroundColor: '#ffffff', 
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, 
    marginTop:20
  },
  inputContainer2: {
    backgroundColor: '#ffffff', 
    borderRadius: 8,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, 
    marginTop:70
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333', 
    marginBottom: 5,
  },
  input: {
    fontSize: 14,
    color: '#666', 
    paddingVertical: 8,
    borderBottomWidth: 1, 
    borderBottomColor: '#ddd', 
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
    backgroundColor: '#1E90FF',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#ffffff', 
    fontSize: 16,
    fontWeight: 'bold',
  },
  
});

export default AppSettings;
