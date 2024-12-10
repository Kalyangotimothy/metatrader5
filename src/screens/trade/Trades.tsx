import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, Platform, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CalendarImage from "../../assets/calendar.png";

const Trades = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {Platform.OS === 'ios' && <View style={{ height: StatusBar.currentHeight || 40 }} />}
      {/* Header */}
      <View style={styles.header}>
        {/* <Icon name="menu-outline" size={24} style={styles.icon} />
         */}
         {/* <TradeImage style={styles.icon} /> */}
         <Image source={CalendarImage} style={styles.icon} />
        <Text style={styles.headerTitle}>USD</Text>
        <Icon name="add-outline" size={24} style={styles.icon} />
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.content}>
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

        {/* Empty State Icon */}
        <View style={styles.emptyState}>
          <Icon name="trending-up-outline" size={100} color="#ddd" />
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
    // backgroundColor: '#f8f8f8',
    elevation: 2,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    color: '#333',
    resizeMode: 'contain',
    width: 24,
    height: 24,
  },
  content: {
    flexGrow: 1,
    padding: 16,
    alignItems: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
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
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
});

export default Trades;
