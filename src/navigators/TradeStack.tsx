import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Trades from '../screens/trade/Trades';

const Stack = createNativeStackNavigator();

export default function TradeStack() {
  return (
    <Stack.Navigator
    initialRouteName="TradesScreen"
    screenOptions={{
        headerShown: true,
    }}

>
    <Stack.Screen
        name="TradesScreen"
        component={Trades}
        options={{
            animation: 'slide_from_bottom',
            headerShown: false,
        }}
    />
    </Stack.Navigator>
  )
}

