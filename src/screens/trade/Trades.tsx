import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, Platform, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CalendarImage from "../../assets/calendar.png";

const Trades = () => {
  const positions = [
    { id: '1', symbol: 'BTCUSDm', type: 'sell', lot: 0.01, open: 99901.89, close: 99943.34, profit: -0.41 },
    { id: '2', symbol: 'BTCUSDm', type: 'buy', lot: 0.01, open: 99921.30, close: 99923.94, profit: 0.03 },
    { id: '3', symbol: 'BTCUSDm', type: 'buy', lot: 0.01, open: 99924.69, close: 99923.94, profit: -0.01 },
    // Add more positions here...
  ];

  const renderPositionItem = ({ item }) => (
    <View style={styles.positionRow}>
      <View style={styles.positionDetails}>
        <Text style={styles.positionSymbol}>
          {item.symbol} {item.type} {item.lot}
        </Text>
        <Text style={styles.positionPrice}>
          {item.open} → {item.close}
        </Text>
      </View>
      <Text style={[styles.positionProfit, item.profit > 0 ? styles.profitPositive : styles.profitNegative]}>
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
      <FlatList
        ListHeaderComponent={
          <View style={styles.content}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Balance:</Text>
              <Text style={styles.infoValue}>0.00</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Equity:</Text>
              <Text style={styles.infoValue}>0.00</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Free Margin:</Text>
              <Text style={styles.infoValue}>0.00</Text>
            </View>
            <Text style={styles.sectionTitle}>Positions</Text>
          </View>
        }
        data={positions}
        renderItem={renderPositionItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.positionsList}
      />
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    resizeMode: 'contain',
    width: 24,
    height: 24,
  },
  content: {
    padding: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  infoLabel: {
    fontSize: 16,
    color: '#333',
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
  },
  sectionTitle: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  positionsList: {
    paddingBottom: 20,
  },
  positionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  positionDetails: {
    flex: 1,
  },
  positionSymbol: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  positionPrice: {
    fontSize: 14,
    color: '#555',
  },
  positionProfit: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
    minWidth: 50,
  },
  profitPositive: {
    color: 'green',
  },
  profitNegative: {
    color: 'red',
  },
});

export default Trades;
