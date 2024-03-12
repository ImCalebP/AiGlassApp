import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Switch, Button, StyleSheet, Image, TouchableOpacity,Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DeviceSettings = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [glassTextSize, setGlassTextSize] = useState('1');

  const [isPickerVisible, setPickerVisible] = useState(false);
  const [displayTextSize, setDisplayTextSize] = useState('1');
const [isDisplayPickerVisible, setDisplayPickerVisible] = useState(false);

  const showPicker = () => {
    setPickerVisible(true);
  };
  const showDisplayPicker = () => {
    setDisplayPickerVisible(true);
  };
 


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
          <Text style={styles.headerTitle}>Device Settings</Text>
        </View>
      </View>
      
      {/* Name Change */}
      <View style={styles.inputContainer2}>
        <Text style={styles.inputLabel}>Set Displayed Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          onChangeText={(text) => setName(text)} 
          value={name} 
        />
      </View>
  
      {/* Trigger Button for Glass Text Size */}
      <TouchableOpacity style={styles.button} onPress={showPicker}>
      <Text style={styles.buttonText}>Select Glasses Text Size</Text>
      <Icon name="arrow-drop-down" size={24} color="black" />
      </TouchableOpacity>

<TouchableOpacity style={styles.button} onPress={showDisplayPicker}>
 <Text style={styles.buttonText}>Select Display Text Size</Text>
 <Icon name="arrow-drop-down" size={24} color="black" />
 </TouchableOpacity>

<Modal
  visible={isPickerVisible}
  animationType="slide"
  transparent={true}
  onRequestClose={() => setPickerVisible(false)}>
  <View style={styles.centeredModalView}>
    <View style={styles.modalView}>
      <Text style={styles.modalText}>Glass Text Size:</Text>
      <Picker
        selectedValue={glassTextSize}
        onValueChange={(itemValue) => setGlassTextSize(itemValue)}
        style={{ width: 250, height: 150 }}>
        {Array.from({ length: 10 }, (_, i) => `${i + 1}`).map((value) => (
          <Picker.Item label={value} value={value} key={`glass-size-${value}`} />
        ))}
      </Picker>
      <TouchableOpacity style={styles.modalButton} onPress={() => setPickerVisible(false)}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>
<Modal
  visible={isDisplayPickerVisible}
  animationType="slide"
  transparent={true}
  onRequestClose={() => setDisplayPickerVisible(false)}>
  <View style={styles.centeredModalView}>
    <View style={styles.modalView}>
      <Text style={styles.modalText}>Display Text Size:</Text>
      <Picker
        selectedValue={displayTextSize}
        onValueChange={(itemValue) => setDisplayTextSize(itemValue)}
        style={{ width: 250, height: 150 }}>
        {Array.from({ length: 10 }, (_, i) => `${i + 1}`).map((value) => (
          <Picker.Item label={value} value={value} key={`display-size-${value}`} />
        ))}
      </Picker>
      <TouchableOpacity style={styles.modalButton} onPress={() => setDisplayPickerVisible(false)}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>

<View style={styles.buttonContainer}>
  <TouchableOpacity
    onPress={() => navigation.navigate('MainMenu')}  // Adjust Password sent to database and name here , button handling is here
    style={styles.confirmButton}
  >
    <Text style={styles.confirmButtonText}>Confirm</Text>
  </TouchableOpacity>
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
        marginTop: 170,
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
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between', 
      backgroundColor: 'white', // Purple background
      borderRadius: 0,
      paddingVertical: 12,
      paddingHorizontal: 40,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 8,
      marginTop: 30, 
      marginBottom: 30,
      
    },
    buttonText: {
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
    },

 
  centeredModalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: for a semi-transparent background
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 16,
  },
  modalButton: {
    marginTop: 20,
    backgroundColor: '#ad42f5',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  
});

export default DeviceSettings;
