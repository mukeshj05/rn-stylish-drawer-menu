import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Modal from 'react-native-modal';

function ContentModal({showModal, onHide, title, infoText}) {
  return (
    <Modal
      isVisible={showModal}
      backdropOpacity={0.5}
      backdropTransitionOutTiming={0}
      onBackButtonPress={onHide}
      onBackdropPress={onHide}
      coverScreen={true}
      hideModalContentWhileAnimating={true}
      style={[styles.modalStyle]}
      backdropColor={'#1A1A22'}
      statusBarTranslucent>
      {!!title && <Text style={styles.heading}>{title}</Text>}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.description}>
          Here you will get data for filter.
        </Text>
      </ScrollView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalStyle: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    maxHeight: 570,
    margin: 0,
    padding: 20,
    paddingTop: 5,
    backgroundColor: '#FFFFFF',
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
    color: '#111',
  },
  description: {
    fontSize: 16,
    marginBottom: 40,
    color: '#222',
  },
});

export default ContentModal;
