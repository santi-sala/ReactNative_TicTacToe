import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function Horizontal() {
  return <View style={styles.horizontal}></View>;
}
const styles = StyleSheet.create({
  horizontal: {
    borderBottomWidth: 2,
    margin: 3,
    borderColor: 'green',
    width: 100,
    borderStyle: 'solid',
  },
});
