import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const PageHeading = ({preview, previewHandler}) => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.headingContainer}>
        <Pressable
          onPress={() => navigation.goBack()}
          unstable_pressDelay={150}>
          <Icon style={styles.icon} name="arrow-left" />
        </Pressable>
        {!preview && (
          <Pressable onPress={() => previewHandler()} unstable_pressDelay={150}>
            <Icon style={styles.icon} name="eye" />
          </Pressable>
        )}
        {preview && (
          <Pressable onPress={() => previewHandler()} unstable_pressDelay={150}>
            <Icon style={styles.icon} name="eye-off" />
          </Pressable>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    padding: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fbf8f2',
  },

  icon: {
    fontSize: 20,
    color: '#9a2143',
    // marginLeft: 5,
  },
});

export default PageHeading;
