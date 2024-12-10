import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  StatusBar,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const HistoryScreen = () => {
  const [selectedOption, setSelectedOption] = useState('Last week');

  const navigation = useNavigation<any>();

  const options = [
    'Today',
    'Last week',
    'Last month',
    'Last 3 months',
    'Last 6 months',
    'Last year',
    'Custom',
  ];

  const renderOption = ({item}) => (
    <TouchableOpacity
      style={styles.option}
       activeOpacity={1}
       onPress={()=>navigation.goBack()}
    //   onPress={() => setSelectedOption(item)}
      >
      <Text style={styles.optionText}>{item}</Text>
      {selectedOption === item && (
        <Icon name="checkmark" size={20} color="#007AFF" />
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {Platform.OS === 'ios' && (
        <View style={{height: StatusBar.currentHeight || 40}} />
      )}
      {/* Header */}
      <View style={styles.header}>
        <Entypo name="chevron-small-left" size={30} color="#0D71F3"  onPress={()=>navigation.goBack()}/>
        <Text style={styles.headerTitle}>History</Text>
        <View style={{width: 24}} /> {/* Placeholder for alignment */}
      </View>

      {/* Symbol Selector */}
      <TouchableOpacity style={styles.symbolSelector} activeOpacity={1}>
        <Text style={styles.symbolLabel}>Symbol:</Text>
        <Text style={styles.symbolValue}>All symbols</Text>
      </TouchableOpacity>

      {/* Options List */}
      <FlatList
        data={options}
        keyExtractor={item => item}
        renderItem={renderOption}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  symbolSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    marginTop: 10,
    marginBottom: 20
  },
  symbolLabel: {
    fontSize: 16,
    color: '#000',
  },
  symbolValue: {
    fontSize: 16,
    color: '#0D71F3',
  },
  list: {
    backgroundColor: '#FFFFFF',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
});

export default HistoryScreen;
