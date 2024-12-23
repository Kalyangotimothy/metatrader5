import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, Platform, Image, TouchableOpacity } from 'react-native';
import { useApi } from '../../hooks/useApi';
import Summary from '../../component/Summary';

const TradingHistoryScreen = () => {

  const { data, error, isLoading } = useApi<any>({
    endpoint: '/getHistory',
    queryOptions: {
      enabled: true,
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      refetchInterval: 5000,
    },
  });

  const navigation = useNavigation<any>();

  

 

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {Platform.OS === 'ios' && <View style={{ height: StatusBar.currentHeight || 40 }} />}
      <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('HistoryDaysScreen')}>
        <Image
          source={require('../../assets/header_history.jpeg')}
          style={styles.headerImage}
        />

      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Transaction Data */}
        {data?.data?.map((item, index) => (
          <View key={index} style={styles.row}>
            <View style={styles.rowHeader}>
              <Text style={[styles.text, { color: '#000' }]}>
                {item.pairs} {' '}
                {item.pairs !== 'Balance' && (
                  <Text style={{ color: item.type === 'buy' ? '#0D71F3' : '#DE4949' }}>{item?.type} {item?.volume}</Text>

                )}
              </Text>
              <Text
                style={[
                  styles.profit,
                  { color: item.profit < 0 ? '#DE4949' : '#0D71F3' }
                ]}
              >
                {parseFloat(item?.profit?.toFixed(2))}
              </Text>
            </View>
            <View style={styles.rowFooter}>
              <Text style={styles.subText}>{item?.price_range}</Text>
              <Text style={styles.subText}>{item?.time}</Text>
            </View>
          </View>
        ))}

        {/* Summary */}
        <Summary/>
        {/* summary */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headerImage: {
    width: '100%',
    height: 80,
    resizeMode: 'contain',
  },
  scrollView: {
    paddingHorizontal: 5,
    paddingBottom: 20,
  },
  row: {
    marginBottom: 8,
    paddingVertical: 5,
  },
  rowHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowFooter: {
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 15.5,
    fontWeight: '700',
    fontFamily: "RobotoCondensed-SemiBold",
    transform: [{ scaleY: 1.3 }]
  },
  profit: {
    fontSize: 14.5,
    fontWeight: 'bold',
    // letterSpacing: 1.2,
    fontFamily: "RobotoCondensed-SemiBold",
    transform: [{ scaleY: 1.4 }],
  },
  subText: {
    fontSize: 12,
    color: 'gray',
    // fontFamily: "trebuc",
    fontFamily: "RobotoCondensed-SemiBold",
    transform: [{ scaleY: 1.2 }],
  },
  summary: {
    marginTop: 5,
    paddingVertical: 5,
    // alignItems: 'center',
    // backgroundColor: '#f8f8f8',
  },
  centeredText: {
    flexDirection: 'row',
    fontSize: 14,
    fontWeight: '400',
    color: '#000',
    fontFamily: "trebuc",
    // textAlign: 'center',
    justifyContent: "space-between",
    marginBottom: 6,
  },
  label:{
    fontSize: 16,
    // fontWeight: 'bold',
    color: '#000',
    // fontFamily: "trebuc",
    fontFamily: "RobotoCondensed-SemiBold",
    transform: [{ scaleY: 1.2 }],
  },
  value: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    // fontFamily: "trebuc",
    fontFamily: "RobotoCondensed-SemiBold",
    transform: [{ scaleY: 1.2 }],
  },
});

export default TradingHistoryScreen;
