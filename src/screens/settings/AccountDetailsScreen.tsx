import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AccountDetailsScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && (
        <View style={{ height: StatusBar.currentHeight || 40 }} />
      )}
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      {/* Header */}
      <View style={styles.header}>
        <Icon
          name="chevron-back"
          size={24}
          color="#0D71F3"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Accounts</Text>
        <View style={{ width: 24 }} /> {/* Placeholder for alignment */}
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Account Header */}
        <View style={[styles.accountHeader, {borderTopColor: '#DDD', borderBottomColor: '#DDD',  borderTopWidth: 1, borderBottomWidth: 1}]}>
          <Image
            source={{
              uri: 'https://d33vw3iu5hs0zi.cloudfront.net/media/sm_Exness_Rebrand_Blog_Thumbnail_f465cad43d.jpg?w=1200',
            }}
            style={styles.accountImage}
          />
          <Text style={styles.accountName}>Giant Hunter AI Robot</Text>
          <Text style={styles.accountDetails}>
            187744963 - Exness-MT5Real27
          </Text>
          <Text style={styles.accountDetails}>0.00 USD</Text>
          <Text style={styles.accountDetails}>Hedge</Text>
        </View>

        {/* Divider */}
        {/* <View style={styles.divider} /> */}

        {/* Company Info */}
        <View style={[styles.infoRow, {marginVertical:20,marginBottom:30, borderTopColor: '#DDD', borderBottomColor: '#DDD',  borderTopWidth: 1, borderBottomWidth: 1}]}>
          <Text style={styles.infoLabel}>Company</Text>
          <Text style={[styles.infoValue, {color:"#000", marginRight:-100, fontWeight:"bold"}]}>Exness Technologies Ltd</Text>
          <Icon name="chevron-forward" size={20} color="gray" />
        </View>

        {/* Divider */}
        {/* <View style={styles.divider} /> */}

        {/* Actions */}
        <TouchableOpacity style={[styles.actionRow, {borderTopColor: '#DDD', borderBottomColor: '#DDD',  borderTopWidth: 1}]}>
          <Text style={[styles.actionText, {color:"#0D71F3"}]}>Deposit</Text>
          <Icon name="chevron-forward" size={20} color="gray" />
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={[styles.actionRow, { borderBottomColor: '#DDD',  borderBottomWidth: 1}]}>
          <Text style={[styles.actionText,{color:"#0D71F3"}]}>Withdrawal</Text>
          <Icon name="chevron-forward" size={20} color="gray" />
        </TouchableOpacity>
        {/* <View style={styles.divider} /> */}

        {/* Account Info */}
        <View style={{ marginVertical: 30, borderTopColor: '#DDD', borderBottomColor: '#DDD',  borderTopWidth: 1, borderBottomWidth: 1 }}>
          {[
            { label: 'Name', value: 'Giant Hunter AI Robot' },
            { label: 'Email', value: 'a69f2b0cda5247c9ab18a561539a14d2@e...' },
            { label: 'Phone', value: '' },
            { label: 'Login', value: '187744963' },
            { label: 'Server', value: 'Exness-MT5Real27' },
            { label: 'Connected', value: 'Access Point #3' },
          ].map((item, index) => (
            <React.Fragment key={index}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>{item.label}</Text>
                <Text style={styles.infoValue}>{item.value}</Text>
              </View>
              {index < 5 && <View style={styles.divider} />}
            </React.Fragment>
          ))}
        </View>
        <View style={styles.divider} />

        {/* Additional Actions */}
        <TouchableOpacity style={styles.actionRow}>
          <Text style={styles.actionText}>Connect from another device</Text>
          <Icon name="chevron-forward" size={20} color="gray" />
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.actionRow}>
          <Text style={styles.actionText}>Change Password</Text>
          <Icon name="chevron-forward" size={20} color="gray" />
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={[styles.deleteRow, {borderBottomColor: '#DDD',  borderBottomWidth: 1}]}>
          <Text style={styles.deleteText}>Delete Account</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 18,
    color: '#0D71F3',
  },
  content: {},
  accountHeader: {
    alignItems: 'center',
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#fff',
  },
  accountImage: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  accountName: {
    fontSize: 18,
    color: 'black',
  },
  accountDetails: {
    fontSize: 14,
    color: 'gray',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginHorizontal: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    backgroundColor: '#fff',
    padding: 16,
  },
  infoLabel: {
    fontSize: 16,
    color: 'black',
  },
  infoValue: {
    fontSize: 14,
    color: 'gray',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#fff',
    padding: 16,
  },
  actionText: {
    fontSize: 16,
    color: '#000',
  },
  deleteRow: {
    paddingVertical: 12,
    padding: 16,
    backgroundColor: '#fff',
    // alignItems: 'center',
  },
  deleteText: {
    fontSize: 16,
    color: 'red',
  },
});

export default AccountDetailsScreen;
