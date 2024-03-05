
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import MainMenu from './screens/MainMenuScreen';
import ConversationHistoryScreen from './screens/ConversationHistoryScreen';
import LiveFeedScreen from './screens/LiveFeedScreen';
import LegalPage from './screens/LegalPage';
import AppSettings from './screens/AppSettings';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="MainMenu" component={MainMenu} />
        <Stack.Screen name="ConversationHistory" component={ConversationHistoryScreen} />
        <Stack.Screen name="LiveFeed" component={LiveFeedScreen} />
        <Stack.Screen name="LegalPage" component={LegalPage} />
        <Stack.Screen name="AppSettings" component={AppSettings} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;