import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import BaseScreen from './src/BaseScreen'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
        <BaseScreen/>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});