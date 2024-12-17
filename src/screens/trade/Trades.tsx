import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, Platform, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CalendarImage from "../../assets/calendar.png";
import { useApi } from '../../hooks/useApi';

const Trades = () => {
    const { data, error, isLoading } = useApi<any>({
      endpoint: '/getTrades',
      queryOptions: {
        enabled: true,
        refetchOnWindowFocus: true,
        refetchOnMount: true,
        refetchInterval: 5000,
      },
    });
  
    console.log("=====account===========")
    console.log(data?.data)
    console.log("=====account===========")
    
  const [balance, setBalance] = useState(1000); // Initial balance
  const [equity, setEquity] = useState(0);
  const [freeMargin, setFreeMargin] = useState(0);
  const [marginLevel, setMarginLevel] = useState(0);
  const [positions, setPositions] = useState([
    { id: '1', symbol: 'BTCUSDm', type: 'sell', lot: 0.01, open: 99901.89, close: 99943.34, profit: -0.41 },
    { id: '2', symbol: 'BTCUSDm', type: 'buy', lot: 0.01, open: 99921.30, close: 99923.94, profit: 0.03 },
    { id: '3', symbol: 'BTCUSDm', type: 'buy', lot: 0.01, open: 99924.69, close: 99923.94, profit: -0.01 },
    { id: '4', symbol: 'BTCUSDm', type: 'sell', lot: 0.01, open: 99901.89, close: 99943.34, profit: -0.41 },
    { id: '5', symbol: 'BTCUSDm', type: 'buy', lot: 0.01, open: 99921.30, close: 99923.94, profit: 0.03 },
    { id: '6', symbol: 'BTCUSDm', type: 'buy', lot: 0.01, open: 99924.69, close: 99923.94, profit: -0.01 },
    { id: '7', symbol: 'BTCUSDm', type: 'sell', lot: 0.01, open: 99901.89, close: 99943.34, profit: -0.41 },
    { id: '8', symbol: 'BTCUSDm', type: 'buy', lot: 0.01, open: 99921.30, close: 99923.94, profit: 0.03 },
    { id: '9', symbol: 'BTCUSDm', type: 'buy', lot: 0.01, open: 99924.69, close: 99923.94, profit: -0.01 },
    { id: '10', symbol: 'BTCUSDm', type: 'sell', lot: 0.01, open: 99901.89, close: 99943.34, profit: -0.41 },
    { id: '11', symbol: 'BTCUSDm', type: 'buy', lot: 0.01, open: 99921.30, close: 99923.94, profit: 0.03 },
    { id: '12', symbol: 'BTCUSDm', type: 'buy', lot: 0.01, open: 99924.69, close: 99923.94, profit: -0.01 },
    { id: '13', symbol: 'BTCUSDm', type: 'sell', lot: 0.01, open: 99901.89, close: 99943.34, profit: -0.41 },
    { id: '14', symbol: 'BTCUSDm', type: 'buy', lot: 0.01, open: 99921.30, close: 99923.94, profit: 0.03 },
    { id: '15', symbol: 'BTCUSDm', type: 'buy', lot: 0.01, open: 99924.69, close: 99923.94, profit: -0.01 },
  ]);

  const margin = 1000; // Fixed margin for simplicity

  // Function to generate random number within a range
  const getRandomNumber = (min, max) => (Math.random() * (max - min) + min).toFixed(2);

  // Function to update positions with random values
  const updatePositions = () => {
    setPositions((prevPositions) =>
      prevPositions.map((pos) => ({
        ...pos,
        open: parseFloat(getRandomNumber(99900, 100000)),
        close: parseFloat(getRandomNumber(99900, 100000)),
        profit: parseFloat(getRandomNumber(-5, 5)),
      }))
    );
  };

  // Update positions at regular intervals
  useEffect(() => {
    const interval = setInterval(updatePositions, 2000); // Update every 2 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Recalculate financial metrics when positions update
  useEffect(() => {
    const totalProfit = positions.reduce((acc, pos) => acc + pos.profit, 0);
    const updatedEquity = balance + totalProfit;
    const updatedFreeMargin = updatedEquity - margin;
    const updatedMarginLevel = margin > 0 ? (updatedEquity / margin) * 100 : 0;

    setEquity(updatedEquity);
    setFreeMargin(updatedFreeMargin);
    setMarginLevel(updatedMarginLevel);
  }, [positions]);

  const renderPositionItem = (item) => (
    <View key={item.id} style={styles.positionRow}>
      <View style={styles.positionDetails}>
        <Text style={styles.positionSymbol}>
          {item.symbol}{" "}
          <Text style={{ color: item.type === 'buy' ? '#0D71F3' : '#DE4949' }}>
            {item.type}
          </Text>{" "}
          {item.lot}
        </Text>
        <Text style={styles.positionPrice}>
          {item.open} → {item.close}
        </Text>
      </View>
      <Text
        style={[
          styles.positionProfit,
          item.profit > 0 ? styles.profitPositive : styles.profitNegative,
        ]}
      >
        {item.profit.toFixed(2)}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {Platform.OS === 'ios' && <View style={{ height: StatusBar.currentHeight || 40 }} />}

      {/* Fixed Header */}
      <View style={styles.header}>
        <Image source={CalendarImage} style={styles.icon} />
        <Text style={styles.headerTitle}>USD</Text>
        <Icon name="add-outline" size={24} style={styles.icon} />
      </View>

      {/* Scrollable Content */}
      <ScrollView stickyHeaderIndices={[1]} contentContainerStyle={{ paddingBottom: 16 }}>
        {/* Non-scrollable Info Section */}
        <View style={styles.infoSection}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Balance:</Text>
            <Text style={styles.infoValue}>{balance.toFixed(2)}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Equity:</Text>
            <Text style={styles.infoValue}>{equity.toFixed(2)}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Free Margin:</Text>
            <Text style={styles.infoValue}>{freeMargin.toFixed(2)}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Margin Level (%):</Text>
            <Text style={styles.infoValue}>{marginLevel.toFixed(2)}</Text>
          </View>
        </View>

        {/* Fixed "Positions" Header */}
        <View style={styles.fixedSectionTitle}>
          <Text style={styles.sectionTitle}>Positions</Text>
        </View>

        {/* Scrollable Positions Section */}
        <View>
          {positions.map((position) => renderPositionItem(position))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',
    elevation: 2,
    zIndex: 1,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontFamily: "trebuc",
    fontSize: 14.5,
  },
  icon: {
    resizeMode: 'contain',
    width: 24,
    height: 24,
  },
  infoSection: {
    paddingVertical: 12,
    paddingHorizontal: 5,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  infoLabel: {
    color: '#333',
    fontSize: 14.5,
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
  },
  fixedSectionTitle: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 3,
    zIndex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: "trebuc",
    fontSize: 14.5,
  },
  positionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  positionDetails: {
    flex: 1,
  },
  positionSymbol: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
  },
  positionPrice: {
    color: '#555',
    fontSize: 14.5,
  },
  positionProfit: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'right',
    minWidth: 50,
  },
  profitPositive: {
    color: '#0D71F3',
    fontFamily: "trebuc",
    fontSize: 14.5,
  },
  profitNegative: {
    color: '#DE4949',
    fontFamily: "trebuc",
    fontSize: 14.5,
  },
});

export default Trades;
