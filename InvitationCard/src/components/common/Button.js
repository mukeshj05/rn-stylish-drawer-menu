import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';

const Button = props => {
  const buttonStyle = (pressed = false) => {
    let containerStyle = {};
    let textStyle = {};

    switch (props.type) {
      case 'text': {
        containerStyle = pressed
          ? [styles.container, {transform: [{scale: 0.95}]}, props.style]
          : [styles.container, props.style];
        textStyle = [styles.buttonText, {color: '#9a2143'}, props.textStyle];
        break;
      }
      case 'cancel': {
        containerStyle = pressed
          ? [
              styles.container,
              {
                transform: [{scale: 0.95}],
              },
              props.style,
            ]
          : [styles.container, props.style];
        textStyle = [styles.buttonText, {color: '#9a2143'}, props.textStyle];
        break;
      }
      default: {
        containerStyle = pressed
          ? [
              styles.container,
              {
                transform: [{scale: 0.95}],
              },
              props.style,
            ]
          : [styles.container, props.style];
        textStyle = [styles.buttonText, props.textStyle];
        break;
      }
    }

    return {containerStyle, textStyle};
  };

  return (
    <>
      {props.disabled ? (
        <View style={[buttonStyle().containerStyle]}>
          <Text style={buttonStyle().textStyle}>{props.children}</Text>
        </View>
      ) : (
        <Pressable
          onPress={props.onPress}
          style={({pressed}) => buttonStyle(pressed).containerStyle}
          unstable_pressDelay={150}>
          <Text style={buttonStyle().textStyle}>{props.children}</Text>
        </Pressable>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    // backgroundColor: Colors.button,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#9a2143',
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  buttonText: {
    color: '#9a2143',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Button;
