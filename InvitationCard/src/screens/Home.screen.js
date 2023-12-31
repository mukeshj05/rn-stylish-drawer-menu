import {useDrawerStatus} from '@react-navigation/drawer';
import React, {useEffect, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Animated,
  Easing,
  ScrollView,
} from 'react-native';
import PageHeading from '../components/home/PageHeading';
import SingleCard from '../components/home/SingleCard';

const HomeScreen = () => {
  const drawerStatus = useDrawerStatus();
  const isDrawerOpen = drawerStatus === 'open';

  console.log(drawerStatus);

  const scaleValue = useRef(new Animated.Value(0)).current;

  const cardScale = scaleValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0.9, 0.8],
  });

  const radius = scaleValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 5, 10],
  });

  const reduceHeight = () => {
    scaleValue.setValue(0);
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 250,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const increateHeight = () => {
    scaleValue.setValue(1);
    Animated.timing(scaleValue, {
      toValue: 0,
      duration: 250,
      easing: Easing.linear,
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
              : [
                  styles.screenContent,
                  {borderRadius: radius, transform: [{scale: cardScale}]},
                ]
          }>
          <PageHeading />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.contentContainer}>
              <SingleCard />
              <SingleCard />
              <SingleCard />
            </View>
          </ScrollView>
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
    backgroundColor: '#ffffff',
    overflow: 'hidden',
  },
  contentContainer: {
    // padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  // contentMessage: {
  //   fontSize: 36,
  //   fontWeight: '800',
  //   textAlign: 'center',
  //   color: '#111',
  // },
});

export default HomeScreen;
