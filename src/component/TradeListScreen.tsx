import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useApi } from '../hooks/useApi';

const TradeListScreen = ({data}:any) => {
  

    // const { data, error, isLoading } = useApi<any>({
    //   endpoint: '/getHistory',
    //   queryOptions: {
    //     enabled: true,
    //     refetchOnWindowFocus: true,
    //     refetchOnMount: true,
    //     refetchInterval: 5000,
    //   },
    // });



  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data?.map((item, index) => (
        <View key={index} style={[
          styles.row,
          index === 0 && styles.firstRow
        ]}>
          <View style={styles.leftSection}>
          <Text style={[styles.pair, { color: '#000' }]}>
                {item.pairs} {' '}
                {item.pairs !== 'Balance' && (
                  <Text style={{
                     color: item.type === 'buy' ? '#0D71F3' : '#EE0000' ,
                      fontSize:13 ,
                       fontWeight:"100"

                  }}>{item?.type} {item?.volume}</Text>

                )}
              </Text>
            <Text style={[styles.prices,item.pairs=='Balance'&&{    fontSize: 10,
    color: '#666',}  ]}>
              {item?.price_range}
            </Text>
          </View>
          <View style={styles.rightSection}>
            <Text style={styles.time}>{item?.time}</Text>
            <Text 
            style={[
                styles.profit,
                 item?.type === 'sell' && styles.sell,
                 { color: item.profit < 0 ? '#DE4949' : '#0D71F3' }

            ]}
            >
                {item?.profit}
                </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 8,
  },
  leftSection: {
    flex: 2,
  },
  pair: {
    fontSize: 14.5,
    color: '#000',
    fontWeight: 'bold',
    fontFamily: "RobotoCondensed-SemiBold",
    transform: [{ scaleY: 1.3 }],
  },
  type: {
    color: '#0D71F3',
    fontFamily: "RobotoCondensed-SemiBold",
    transform: [{ scaleY: 1.3 }],
  },
  sell: {
    color: '#DE4949',
    fontFamily: "trebuc",
  },
  prices: {
    fontSize: 13,
    color: '#666',
    fontFamily: "RobotoCondensed-SemiBold",
    transform: [{ scaleY: 1.1 }],
  },
  rightSection: {
    alignItems: 'flex-end',
    flex: 1,
    // paddingBottom:2
  },
  time: {
    fontSize: 12,
    color: '#666',
    fontFamily: "RobotoCondensed-SemiBold",
    transform: [{ scaleY: 1.3 }],
  },
  profit: {
    fontSize: 12,
    color: '#000',
    fontWeight: 'bold',
    fontFamily: "RobotoCondensed-SemiBold",
    transform: [{ scaleY: 1.3 }],
    paddingTop:2
  },
  firstRow: {
      borderTopWidth: 1,
      borderTopColor: '#ddd',
    },
});

export default TradeListScreen;
