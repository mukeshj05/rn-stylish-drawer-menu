import {useNavigation} from '@react-navigation/native';
import {useDrawerStatus} from '@react-navigation/drawer';
import React, {useEffect, useRef} from 'react';
import {
  Text,
  Pressable,
  View,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const drawerStatus = useDrawerStatus();
  const isDrawerOpen = drawerStatus === 'open';

  const contentHeight = useRef(new Animated.Value(0)).current;

  const cardScale = contentHeight.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0.9, 0.8],
  });

  const radius = contentHeight.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 5, 10],
  });

  const reduceHeight = () => {
    contentHeight.setValue(0);
    Animated.timing(contentHeight, {
      toValue: 1,
      duration: 500,
      // easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const increateHeight = () => {
    contentHeight.setValue(1);
    Animated.timing(contentHeight, {
      toValue: 0,
      duration: 500,
      // easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (isDrawerOpen) {
      reduceHeight();
    } else {
      increateHeight();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDrawerOpen]);

  return (
    <>
      <View style={styles.screenLayout}>
        <Animated.View
          style={
            isDrawerOpen
              ? [
                  styles.screenContent,
                  {borderRadius: radius, transform: [{scale: cardScale}]},
                ]
              : [styles.screenContent, {transform: [{scale: cardScale}]}]
          }>
          <Pressable onPress={() => navigation.openDrawer()}>
            <Text style={styles.button}>
              {isDrawerOpen ? 'Close' : 'Open'} Drawer
            </Text>
          </Pressable>
        </Animated.View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screenLayout: {
    flex: 1,
    backgroundColor: '#9a2143',
    justifyContent: 'center',
  },
  screenContent: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff',
  },
  button: {
    backgroundColor: '#145DA0',
    color: '#fff',
    padding: 10,
  },
});

export default ProfileScreen;
