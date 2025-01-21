import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {setCustomText} from 'react-native-global-props'; // Set global font
import Navigation from './navigations';
// Set global font for text
const customTextProps = {
  style: {
    fontFamily: 'Poppins-Regular', // Global font
  },
};

// Simulate font loading
const loadFonts = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true); // Simulate font loading success
    }, 2000);
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    // Load fonts asynchronously
    loadFonts().then(() => {
      setFontsLoaded(true);
      setCustomText(customTextProps); // Apply global font style
    });
  }, []);

  if (!fontsLoaded) {
    return null; // Show a loading screen until fonts are loaded
  }

  return (
    <SafeAreaProvider>
      <View>
        <Navigation />
        <StatusBar barStyle="dark-content" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});
