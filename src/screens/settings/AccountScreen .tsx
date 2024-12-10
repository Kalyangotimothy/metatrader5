import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AccountScreen = () => {
    const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
              {Platform.OS === 'ios' && (
        <View style={{ height: StatusBar.currentHeight || 40 }} />
      )}
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      {/* Header */}
      <View style={styles.header}>
        <Icon name="chevron-back" size={24} color="#0D71F3" onPress={()=>navigation.goBack()} />
        <Text style={styles.headerTitle}>Accounts</Text>
        <Icon name="add" size={24} color="#0D71F3" />
      </View>

      {/* Account Item */}
      <TouchableOpacity style={styles.accountItem} activeOpacity={1} onPress={()=>navigation.navigate("AccountDetailsScreen")}>
        {/* Image */}
        <Image
          source={{ uri: 'https://d33vw3iu5hs0zi.cloudfront.net/media/sm_Exness_Rebrand_Blog_Thumbnail_f465cad43d.jpg?w=1200' }} // Dummy online image
          style={styles.accountImage}
        />
        {/* Account Info */}
        <View style={styles.accountInfo}>
          <Text style={styles.accountName}>Giant Hunter AI Robot</Text>
          <Text style={styles.accountDetails}>
            187744963 - Exness-MT5Real27
          </Text>
          <Text style={styles.accountDetails}>0.00 USD, Hedge</Text>
        </View>
        {/* Right Arrow Icon */}
        <Icon name="chevron-forward" size={24} color="gray" />
      </TouchableOpacity>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  accountItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  accountImage: {
    width: 50,
    height: 50,
    // borderRadius: 8,
    marginRight: 12,
  },
  accountInfo: {
    flex: 1,
  },
  accountName: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: 'black',
  },
  accountDetails: {
    fontSize: 14,
    color: 'gray',
  },
});

export default AccountScreen;
