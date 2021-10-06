import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WhosTurnItIs({ whosTurn }) {
  return (
    <View style={styles.turnContainer}>
      <Text style={styles.turnText}>IT's {whosTurn} TURN.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  turnContainer: {
    alignSelf: 'center',
    marginBottom: 40,
  },
  turnText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#1100ff',
  },
});
