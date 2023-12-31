import React, {useState} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import InputText from '../common/InputText';

function EditCard({preview}) {
  const [groomName, setGroomName] = useState('John Smith');
  const [brideName, setBrideName] = useState('Jane Doe');
  const [address, setAddress] = useState('Beautiful Garden, 123 Main St.');
  const [email, setEmail] = useState('johnandjane@example.com');
  const [phone, setPhone] = useState('(123) 456-7890');
  const [date, setDate] = useState('October 20, 2023');
  const [time, setTime] = useState('2:00 PM');

  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        style={preview ? styles.cardBackgroundPreview : styles.cardBackground}
        imageStyle={
          preview
            ? styles.cardBackgroundImagePreview
            : styles.cardBackgroundImage
        }
        source={require('../../assets/cardbg1.jpeg')}>
        <View style={styles.cardContentContainer}>
          <View style={styles.welcomeMessageContainer}>
            <Text style={styles.cardTitle}>Wedding Invitation</Text>
            <Text style={styles.welcomeMessage}>
              You are invited to the wedding of
            </Text>
          </View>
          <View style={styles.coupleNameContainer}>
            {!preview && (
              <InputText
                label="Groom Name"
                value={groomName}
                onChangeText={val => setGroomName(val)}
                style={{marginTop: 15}}
              />
            )}
            {preview && <Text style={styles.coupleName}>{groomName}</Text>}
            <Text style={styles.coupleAnd}>&</Text>
            {!preview && (
              <InputText
                label="Bride Name"
                value={brideName}
                onChangeText={val => setBrideName(val)}
              />
            )}
            {preview && <Text style={styles.coupleName}>{brideName}</Text>}
          </View>
          <View style={styles.detailsContainer}>
            {!preview && (
              <InputText
                label="Venue"
                value={address}
                onChangeText={val => setAddress(val)}
                style={{marginBottom: 15}}
              />
            )}
            {preview && <Text style={styles.address}>Venue: {address}</Text>}
            <Text style={styles.rsvpDate}>Please RSVP by October 1st</Text>
            <Text style={styles.contactNote}>
              For inquiries, contact us at:
            </Text>
            {!preview && (
              <InputText
                label="Email"
                value={email}
                onChangeText={val => setEmail(val)}
                style={{marginTop: 15}}
              />
            )}
            {!preview && (
              <InputText
                label="Phone"
                value={phone}
                onChangeText={val => setPhone(val)}
                style={{marginBottom: 15}}
              />
            )}
            {preview && <Text style={styles.email}>{email}</Text>}
            {preview && <Text style={styles.phone}>{phone}</Text>}
          </View>
          <View style={styles.dateTimeContainer}>
            {!preview && (
              <InputText
                label="Date"
                value={date}
                onChangeText={val => setDate(val)}
              />
            )}
            {!preview && (
              <InputText
                label="Time"
                value={time}
                onChangeText={val => setTime(val)}
              />
            )}
            {preview && <Text style={styles.date}>Date: {date}</Text>}
            {preview && <Text style={styles.time}>Time: {time}</Text>}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    margin: 10,
  },
  cardBackgroundImage: {
    resizeMode: 'cover',
  },
  cardBackgroundImagePreview: {
    width: 321,
    height: 450,
    resizeMode: 'contain',
  },
  cardBackground: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardBackgroundPreview: {
    width: 321,
    height: 450,
    borderRadius: 10,
    overflow: 'hidden',
    alignSelf: 'center',
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
    paddingTop: 35,
    paddingBottom: 10,
    justifyContent: 'space-between',
  },
  welcomeMessageContainer: {
    alignItems: 'center',
  },
  cardTitle: {
    color: '#222',
    fontSize: 16,
    marginBottom: 5,
  },
  welcomeMessage: {
    color: '#222',
    fontSize: 14,
  },
  coupleNameContainer: {
    width: '70%',
    alignSelf: 'center',
  },
  coupleName: {
    color: '#222',
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
  },
  coupleAnd: {
    color: '#222',
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
  },
  detailsContainer: {
    width: '70%',
    alignSelf: 'center',
  },
  address: {
    color: '#222',
    fontSize: 14,
    marginBottom: 5,
    textAlign: 'center',
  },
  rsvpDate: {
    color: '#222',
    fontSize: 14,
    marginBottom: 5,
    textAlign: 'center',
  },
  contactNote: {
    color: '#222',
    fontSize: 14,
    textAlign: 'center',
  },
  email: {
    color: '#222',
    fontSize: 14,
    textAlign: 'center',
  },
  phone: {
    color: '#222',
    fontSize: 14,
    textAlign: 'center',
  },
  dateTimeContainer: {
    marginHorizontal: 15,
    width: '70%',
  },
  date: {
    color: '#222',
    fontSize: 14,
  },
  time: {
    color: '#222',
    fontSize: 14,
  },
});

export default EditCard;
