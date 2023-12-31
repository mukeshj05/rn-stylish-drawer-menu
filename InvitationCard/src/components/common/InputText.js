import React, {useState, useEffect} from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import Button from './Button';

function InputText({
  label,
  value,
  onChangeText,
  onFocus = () => {},
  onBlur = () => {},
  placeholder = '',
  editable = true,
  multiline = true,
  numberOfLines = 1,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
  saveButton = false,
  icon,
  style,
  inputStyle,
}) {
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    if (saveButton) {
      setInputText(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const changeTextHandler = val => {
    if (saveButton) {
      setInputText(val);
    } else {
      onChangeText(val);
    }
  };

  const saveInputHandler = () => {
    onChangeText(inputText);
  };

  return (
    <View style={style}>
      {!!label && <Text style={styles.labelStyle}>{label}</Text>}
      <View
        style={
          editable
            ? styles.inputContainer
            : [styles.inputContainer, styles.disabled]
        }>
        {!!icon && icon}
        <TextInput
          value={saveButton ? inputText : value}
          onChangeText={changeTextHandler}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={placeholder}
          editable={editable}
          multiline={multiline}
          numberOfLines={numberOfLines}
          keyboardType={keyboardType}
          autoComplete={'off'}
          autoCapitalize={autoCapitalize}
          allowFontScaling={false}
          autoCorrect={false}
          style={
            editable
              ? [styles.inputField, inputStyle]
              : [styles.inputField, styles.disabled, inputStyle]
          }
        />
        {saveButton && editable && (
          <Button
            style={styles.button}
            textStyle={styles.buttonText}
            onPress={saveInputHandler}>
            Save
          </Button>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#666',
    borderWidth: 1,
    borderRadius: 10,
  },
  inputField: {
    flex: 1,
    color: '#222',
    fontSize: 16,
    textAlign: 'center',
  },
  disabled: {
    color: '#666',
    backgroundColor: '#e7e7e7',
  },
  button: {
    marginLeft: 10,
    paddingVertical: 5,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default InputText;
