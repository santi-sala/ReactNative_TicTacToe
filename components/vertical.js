import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Vertical() {
  return <View style={styles.vertical}></View>;
}
const styles = StyleSheet.create({
  vertical: {
    borderRightWidth: 2,
    margin: 3,
    borderColor: 'green',
    height: 100,
    borderStyle: 'solid',
  },
});
