import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import ProfileScreen from '../screens/Profile.Screen';
import {Image, Linking, StyleSheet, Text, View} from 'react-native';
import HomeNav from './HomeNav';

const Drawer = createDrawerNavigator();

function userAvatar() {
  return (
    <Image
      source={require('../assets/avatar-3.png')}
      style={styles.userAvatar}
    />
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        icon={userAvatar}
        label=""
        onPress={() => {
          /*Do Nothing */
        }}
        focused={false}
      />
      <DrawerItem
        label={() => (
          <View>
            <Text style={styles.userName}>Abhishek K.</Text>
            <Text style={styles.userPhone}>+91 99999-99999</Text>
          </View>
        )}
        onPress={() => {
          /*Do Nothing */
        }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={CustomDrawerContent}
        screenOptions={{
          headerShown: false,
          drawerType: 'slide',
          drawerStyle: {
            backgroundColor: '#9a2143',
            width: 200,
          },
          overlayColor: '#ffffff00',
          swipeEnabled: true,
          drawerLabelStyle: {fontSize: 16, color: '#fff'},
          drawerActiveBackgroundColor: '#ffffff00',
        }}>
        <Drawer.Screen
          name="HomeNav"
          component={HomeNav}
          options={{title: 'Home'}}
        />
        <Drawer.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{title: 'Profile'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  userAvatar: {
    width: 80,
    height: 80,
  },
  userName: {
    fontSize: 20,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 5,
  },
  userPhone: {
    fontSize: 14,
    color: '#fff',
  },
});

export default Navigation;
