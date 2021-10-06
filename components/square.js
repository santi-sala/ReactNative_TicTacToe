import React from 'react';
import { View, TouchableWithoutFeedback, Text, StyleSheet } from 'react-native';

export default function Square({ position, turnHandler }) {
  return (
    <View>
      <TouchableWithoutFeedback onPress={turnHandler}>
        <View style={styles.myButton}>
          <Text style={styles.buttonText}>{position}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  myButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'coral',
    width: 100,
    height: 100,
    borderRadius: 30,
    margin: 5,
  },
  buttonText: {
    fontSize: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 10,
  },
});
