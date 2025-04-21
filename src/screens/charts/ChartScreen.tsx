
import { StyleSheet, View } from 'react-native'
import React from 'react';
import { WebView } from 'react-native-webview';
import { useApi } from '../../hooks/useApi';

export default function ChartScreen() {
    const { data, error, isLoading } = useApi<any>({
        endpoint: '/video',
        queryOptions: {
            enabled: true,
            refetchOnWindowFocus: true,
            refetchOnMount: true,
            refetchInterval: 5000,
        },
    });

    const videoUrl = data?.data?.url || '';

    return (
        <View style={styles.container}>
            <WebView 
                source={{ 
                    html: `
                        <video 
                            style="width: 100%; height: 100%; object-fit: cover;" 
                            controls 
                            autoplay
                            playsinline
                            src="${videoUrl}"
                        ></video>
                    `
                }}
                style={styles.webview}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    webview: {
        flex: 1,
    },
});