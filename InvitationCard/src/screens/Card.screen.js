import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import PageHeading from '../components/card/PageHeading';
import EditCard from '../components/card/EditCard';

const CardScreen = () => {
  const [preview, setPreview] = useState(false);

  const previewHandler = () => {
    setPreview(prevState => !prevState);
  };

  return (
    <>
      <View style={styles.screenLayout}>
        <PageHeading preview={preview} previewHandler={previewHandler} />
        {/* {preview && <EditCard preview={preview} />}
        {!preview && (
        )} */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <EditCard preview={preview} />
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screenLayout: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default CardScreen;
