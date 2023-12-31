import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ContentModal from '../common/ContentModal';

const PageHeading = () => {
  const navigation = useNavigation();
  const [showFilterModal, setShowFilterModal] = useState(false);

  const onHideHandler = () => {
    setShowFilterModal(false);
  };

  return (
    <>
      <ContentModal
        title={'Filter'}
        showModal={showFilterModal}
        onHide={onHideHandler}
      />
      <View style={styles.headingContainer}>
        <Text style={styles.appName}>Invitation Card App</Text>
        <View style={styles.icons}>
          <Pressable
            onPress={() => setShowFilterModal(true)}
            unstable_pressDelay={150}>
            <Icon style={[styles.icon, {marginRight: 15}]} name="filter" />
          </Pressable>
          <Pressable
            onPress={() => navigation.openDrawer()}
            unstable_pressDelay={150}>
            <Icon style={styles.icon} name="menu" />
          </Pressable>
        </View>
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
  appName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#9a2143',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
    color: '#9a2143',
    // marginLeft: 5,
  },
});

export default PageHeading;
