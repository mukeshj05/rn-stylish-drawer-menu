import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../common/Button';
import {useNavigation} from '@react-navigation/native';

const divideNumber = 2;

function SingleCard() {
  const navigation = useNavigation();

  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        style={styles.cardBackground}
        imageStyle={styles.cardBackgroundImage}
        source={require('../../assets/cardbg1.jpeg')}>
        <View style={styles.cardContentContainer}>
          <View style={styles.welcomeMessageContainer}>
            <Text style={styles.cardTitle}>Wedding Invitation</Text>
            <Text style={styles.welcomeMessage}>
              You are invited to the wedding of
            </Text>
          </View>
          <View style={styles.coupleNameContainer}>
            <Text style={styles.coupleName}>John Smith</Text>
            <Text style={styles.coupleAnd}>&</Text>
            <Text style={styles.coupleName}>Jane Doe</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.address}>
              Venue: Beautiful Garden, 123 Main St.
            </Text>
            <Text style={styles.rsvpDate}>Please RSVP by October 1st</Text>
            <Text style={styles.contactNote}>
              For inquiries, contact us at:
            </Text>
            <Text style={styles.email}>johnandjane@example.com</Text>
            <Text style={styles.phone}>{'(123) 456-7890'}</Text>
          </View>
          <View style={styles.dateTimeContainer}>
            <Text style={styles.date}>Date: October 20, 2023</Text>
            <Text style={styles.time}>Time: 2:00 PM</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.actionContainer}>
        <Button
          onPress={() =>
            navigation.navigate('HomeNav', {screen: 'CardScreen'})
          }>
          Edit this card
        </Button>
        <Icon name="share" style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexBasis: '50%',
    padding: 10,
    maxWidth: '50%',
  },
  cardBackgroundImage: {
    width: 158,
    height: 220,
    resizeMode: 'contain',
  },
  cardBackground: {
    width: 157,
    height: 220,
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
    color: '#9a2143',
    // marginLeft: 5,
  },
  cardContentContainer: {
    height: '100%',
    paddingTop: 20 / divideNumber,
    paddingBottom: 10 / divideNumber,
    justifyContent: 'space-between',
  },
  welcomeMessageContainer: {
    alignItems: 'center',
  },
  cardTitle: {
    color: '#222',
    fontSize: 16 / divideNumber,
    marginBottom: 5 / divideNumber,
  },
  welcomeMessage: {
    color: '#222',
    fontSize: 14 / divideNumber,
  },
  coupleNameContainer: {
    alignItems: 'center',
  },
  coupleName: {
    color: '#222',
    fontSize: 20 / divideNumber,
    fontWeight: '800',
  },
  coupleAnd: {
    color: '#222',
    fontSize: 16 / divideNumber,
    fontWeight: '800',
  },
  detailsContainer: {
    alignItems: 'center',
  },
  address: {
    color: '#222',
    fontSize: 14 / divideNumber,
    marginBottom: 5 / divideNumber,
    maxWidth: '70%',
    textAlign: 'center',
  },
  rsvpDate: {
    color: '#222',
    fontSize: 14 / divideNumber,
    marginBottom: 5 / divideNumber,
  },
  contactNote: {
    color: '#222',
    fontSize: 14 / divideNumber,
  },
  email: {
    color: '#222',
    fontSize: 14 / divideNumber,
  },
  phone: {
    color: '#222',
    fontSize: 14 / divideNumber,
  },
  dateTimeContainer: {
    marginHorizontal: 20 / divideNumber,
  },
  date: {
    color: '#222',
    fontSize: 14 / divideNumber,
  },
  time: {
    color: '#222',
    fontSize: 14 / divideNumber,
  },
});

export default SingleCard;
