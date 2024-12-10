import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TradingHistoryScreen from '../screens/history/TradingHistoryScreen';
import HistoryScreen from '../screens/history/HistoryScreen';

const Stack = createNativeStackNavigator();

export default function HistoryStack() {
  return (
    <Stack.Navigator
      initialRouteName="HistoryScreen"
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        name="HistoryScreen"
        component={TradingHistoryScreen}
        options={{
          animation: 'slide_from_right',
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="HistoryDaysScreen"
        component={HistoryScreen}
        options={{
          animation: 'slide_from_right',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
