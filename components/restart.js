import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

export default function RestartGame({ restartGame }) {
  return (
    <View style={styles.buttonContainer}>
      <Button title="Restart Game" onPress={restartGame} />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 40,
  },
});
