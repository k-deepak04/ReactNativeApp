import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Spacing from '../constants/Spacing';
import FontSize from '../constants/FontSize';
import Colors from '../constants/color';
import Font from '../constants/Font';

const {height} = Dimensions.get('window');

const WelcomeScreen = ({navigation: {navigate}}) => {
  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          style={{
            height: height / 2.5,
          }}
          resizeMode="contain"
          source={require('../assets/images/welcome.png')}
        />
        <View
          style={{
            paddingHorizontal: Spacing * 4,
            paddingTop: Spacing * 4,
          }}>
          <Text
            style={{
              fontSize: FontSize.xxLarge,
              color: Colors.primary,
              fontFamily: Font['poppins-bold'],
              textAlign: 'center',
            }}>
            Discover Your Dream Course here
          </Text>

          <Text
            style={{
              fontSize: FontSize.small,
              color: Colors.text,
              fontFamily: Font['poppins-regular'],
              textAlign: 'center',
              marginTop: Spacing * 2,
            }}>
            Explore all the existing Courses based on your interest and study
            major
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: Spacing * 2,
            paddingTop: Spacing * 6,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => navigate('Login')}
            style={{
              backgroundColor: Colors.primary,
              paddingVertical: Spacing * 1.5,
              paddingHorizontal: Spacing * 2,
              width: '48%',
              borderRadius: Spacing,
              shadowColor: Colors.primary,
              shadowOffset: {
                width: 0,
                height: Spacing,
              },
              shadowOpacity: 0.3,
              shadowRadius: Spacing,
            }}>
            <Text
              style={{
                fontFamily: Font['poppins-bold'],
                color: Colors.onPrimary,
                fontSize: FontSize.large,
                textAlign: 'center',
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
