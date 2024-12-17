
import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { WebView } from 'react-native-webview';

export default function ChartScreen() {


    const html = `<!-- TradingView Widget BEGIN -->
    <div class="tradingview-widget-container" style="height:100%;width:100%">
      <div class="tradingview-widget-container__widget" style="height:calc(100% - 32px);width:100%"></div>
      <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text"></span></a></div>
      <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js" async>
      {
  "symbol": "NASDAQ:AAPL",
  "interval": "D",
  "timezone": "Etc/UTC",
  "theme": "light",
  "style": "1",
  "locale": "en",
  "backgroundColor": "rgba(255, 255, 255, 1)",
  "gridColor": "rgba(203, 203, 203, 0.06)",
  "hide_top_toolbar": true,
  "hide_legend": true,
  "allow_symbol_change": false,
  "save_image": false,
  "calendar": false,
  "hide_volume": true,
  "support_host": "https://www.tradingview.com"
}
      </script>
    </div>
    <!-- TradingView Widget END -->
          `;

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <WebView source={{uri:"https://gianthunterai.com/mt5.php" }}  />
        </View>
    )
}

const styles = StyleSheet.create({})