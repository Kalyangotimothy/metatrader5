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
  
    // Function to format numbers with spaces as separators
  const formatBalance = (value) => {
    return new Intl.NumberFormat('en-US', {
      useGrouping: true,
    })
      .format(value)
      .replace(/,/g, ' '); // Replace commas with spaces
  };

    
  const [balance, setBalance] = useState(1000);
  const [equity, setEquity] = useState(0);
  const [freeMargin, setFreeMargin] = useState(0);
  const [marginLevel, setMarginLevel] = useState(0);

  const [minOpen, setMinOpen] = useState(99900);
  const [maxOpen , setMaxOpen] = useState(100000);

  const [minClose, setMinClose] = useState(99900);
  const [maxClose, setMaxClose] = useState(100000);

  const [minProfit, setMinProfit] = useState(-5);
  const [maxProfit, setMaxProfit] = useState(5);

  const [margin, setMargin] = useState(1000);

  const [minTotal, setMinTotal] = useState(100);
  const [maxTotal, setMaxTotal] = useState(1000);

  const [currency, setCurrency] = useState('USD');

  //more settings
   const [minEquity, setMinEquity] = useState(100);
  const [maxEquity, setMaxEquity] = useState(1000);

   const [minFreeMargin, setMinFreeMargin] = useState(100);
  const [maxFreeMargin, setMaxFreeMargin] = useState(1000);

   const [minMarginLevel, setMinMarginLevel] = useState(100);
   const  [maxMarginLevel, setMaxMarginLevel] = useState(1000);
  //more settings

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

  useEffect(() => {
    if (data?.data) {
      setPositions(data.data);
    }
  }, [data]);



  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch('https://metatrader.giantpips.com/api/getTradingSettings');
        const data = await response.json();
    

        setMinOpen(parseInt(data?.data?.min_open));
        setMaxOpen(parseInt(data?.data?.max_open));
        setMinClose(parseInt(data?.data?.min_close));
        setMaxClose(parseInt(data?.data?.max_close));
        setMinProfit(parseInt(data?.data?.min_profit));
         setMaxProfit(parseInt(data?.data?.max_profit));
         setBalance(parseFloat(data?.data?.balance));
         setMargin(parseFloat(data?.data?.margin));
         setCurrency(data?.data?.currency);
        setMinTotal(parseInt(data?.data?.min_total));
        setMaxTotal(parseInt(data?.data?.max_total));
      } catch (error) {
      }
    };

    // Fetch settings immediately and then every 2 seconds
    fetchSettings();
    const interval = setInterval(fetchSettings, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Function to generate random number within a range
  const getRandomNumber = (min: number, max: number) => (Math.random() * (max - min) + min)?.toFixed(2);

  // Function to update positions with random values
  const updatePositions = () => {
    setPositions((prevPositions) =>
      prevPositions.map((pos) => ({
        ...pos,
        open: parseFloat(getRandomNumber(minOpen, maxOpen)),
        close: parseFloat(getRandomNumber(minClose, maxClose)),
        profit: parseFloat(getRandomNumber(minProfit, maxProfit)),
      }))
    );
  };

  // Update positions at regular intervals
  useEffect(() => {
    const interval = setInterval(updatePositions, 1000); // Update every 2 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [minClose, maxClose, minOpen, maxOpen, minProfit, maxProfit]);

  // Recalculate financial metrics when positions update
  useEffect(() => {
    const totalProfit = positions?.reduce((acc, pos) => acc + pos?.profit, 0);
    const updatedEquity = balance + totalProfit;
    const updatedFreeMargin = parseFloat(updatedEquity) - parseFloat(margin);
    const updatedMarginLevel = parseInt(margin) > 0 ? (updatedEquity / margin) * 100 : 0;

    setEquity(updatedEquity);
    setFreeMargin(updatedFreeMargin);
    setMarginLevel(updatedMarginLevel);
  }, [positions]);

  const renderPositionItem = (item) => (
    <View key={item.id} style={styles.positionRow}>
      <View style={styles.positionDetails}>
        <Text style={styles.positionSymbol}>
          {item.symbol}{" "}
          <Text style={{ color: item.type === 'buy' ? '#0D71F3' : '#DE4949', fontFamily: "RobotoCondensed-SemiBold",transform: [{ scaleY: 1.2 }], }}>
            {item.type} {item.lot}
          </Text>
          {/* {item.lot} */}
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
        <Text style={styles.headerTitle}>{getRandomNumber(minTotal, maxTotal)} {currency}</Text>
        <Icon name="add-outline" size={24} style={styles.icon} />
      </View>

      {/* Scrollable Content */}
      <ScrollView 
      stickyHeaderIndices={[1]} contentContainerStyle={{ paddingBottom: 16 }}
      showsVerticalScrollIndicator={false}
      >
        {/* Non-scrollable Info Section */}
        <View style={styles.infoSection}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Balance:</Text>
            <Text style={styles.infoValue}>{formatBalance(parseFloat(balance))}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Equity:</Text>
            <Text style={styles.infoValue}>{formatBalance(getRandomNumber(minEquity, maxEquity))}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Margin:</Text>
            <Text style={styles.infoValue}>{formatBalance(margin?.toFixed(2))}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Free Margin:</Text>
            <Text style={styles.infoValue}>{formatBalance(getRandomNumber(minFreeMargin, maxFreeMargin))}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Margin Level (%):</Text>
            <Text style={styles.infoValue}>{formatBalance(getRandomNumber(minMarginLevel, maxMarginLevel))}</Text>
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
    marginTop: 10
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color:"#0D71F3",
    fontFamily: "RobotoCondensed-SemiBold",
    transform: [{ scaleY: 1.2 }],
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
    marginVertical: 2,
  },
  infoLabel: {
    color: '#000',
    fontSize: 14.5,
    //  fontFamily: "RobotoCondensed-SemiBold",
    transform: [{ scaleY: 1.2 }],
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    // fontFamily: "RobotoCondensed-SemiBold",
     transform: [{ scaleY: 1.2 }],
  },
  fixedSectionTitle: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 3,
    zIndex: 1,
    fontFamily: "RobotoCondensed-SemiBold",
    transform: [{ scaleY: 1.2 }],
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: "RobotoCondensed-SemiBold",
    transform: [{ scaleY: 1.2 }],
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
    fontFamily: "RobotoCondensed-SemiBold",
    transform: [{ scaleY: 1.3 }],
  },
  positionPrice: {
    color: '#000',
    fontSize: 14.5,
    // fontFamily: "RobotoCondensed-SemiBold",
    // transform: [{ scaleY: 1.3 }],
  },
  positionProfit: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'right',
    minWidth: 50,
    fontFamily: "RobotoCondensed-SemiBold",
    transform: [{ scaleY: 1.3 }],
  },
  profitPositive: {
    color: '#0D71F3',
    fontSize: 20,
    fontFamily: "RobotoCondensed-SemiBold",
    transform: [{ scaleY: 1.3 }],
  },
  profitNegative: {
    color: '#DE4949',
    fontSize: 20,
    fontFamily: "RobotoCondensed-SemiBold",
    transform: [{ scaleY: 1.3 }],
  },
});

export default Trades;
