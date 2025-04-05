import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import TabNavigators from './navigators/TabNavigators';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native';
import SidebarImage from './assets/sidebar.jpeg';
import QRImage from "./assets/qr.jpeg";
import BellImage from "./assets/bell.jpeg";
import { useApi } from './hooks/useApi';
import AccountDetails from './screens/drawer/AccountDetails';

const Drawer = createDrawerNavigator();

// Placeholder components for each screen
const PlaceholderScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Coming Soon</Text>
    </View>
);



// Custom Drawer Header Component
// Update the navigation in DrawerHeader
const DrawerHeader = ({ accountData, navigation }: any) => {
    return (
        <TouchableOpacity
            style={styles.headerContainer}
            activeOpacity={1}
            onPress={() => {
                navigation.closeDrawer();
                navigation.navigate('Trader', {
                    screen: 'Trade',
                    params: { 
                        screen: 'ManageAccount',
                        params: { data: accountData }
                    }
                });
            }}
        >
            <View style={styles.accountBox}>
                <View style={styles.accountRow}>
                    <Image
                        source={{ uri: accountData?.image }}
                        style={styles.accountImage}
                        resizeMode="contain"
                    />
                    <View style={styles.accountInfo}>
                        <Text style={styles.accountName}>{accountData?.name || 'Loading...'}</Text>
                        <Text style={styles.accountNumber}>{accountData?.broker || 'Loading...'}</Text>
                        <Text style={styles.manageLink}>
                            Manage accounts
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.separator} />
        </TouchableOpacity>
    )
};


const BaseScreen = () => {
    const { data, error, isLoading } = useApi<any>({
        endpoint: '/getAccount',
        queryOptions: {
            enabled: true,
            refetchOnWindowFocus: true,
            refetchOnMount: true,
            refetchInterval: 5000,
        },
    });

    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Trader"
                screenOptions={{
                    headerShown: false,
                    drawerLabelStyle: {
                        fontSize: 16,
                    },
                    drawerStyle: {
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                    }
                }}
                drawerContent={(props) => (
                    <View style={{ flex: 1 }}>
                        <DrawerHeader
                            accountData={data?.data?.[0]}

                            navigation={props.navigation}
                            
                        />
                        <Image
                            source={SidebarImage}
                            style={styles.sidebarImage}
                            resizeMode="contain"
                        />
                    </View>
                )}
            >
                <Drawer.Screen name="Trader" component={TabNavigators} />
                <Drawer.Screen name="News" component={PlaceholderScreen} />
                <Drawer.Screen name="Mailbox" component={PlaceholderScreen} />
                <Drawer.Screen name="Journal" component={PlaceholderScreen} />
                <Drawer.Screen name="Settings" component={PlaceholderScreen} />
                <Drawer.Screen name="Economic calendar" component={PlaceholderScreen} />
                <Drawer.Screen name="Traders Community" component={PlaceholderScreen} />
                <Drawer.Screen name="MQL5 Algo Trading" component={PlaceholderScreen} />
                <Drawer.Screen name="User guide" component={PlaceholderScreen} />
                <Drawer.Screen name="About" component={PlaceholderScreen} />
              

            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default BaseScreen;
// Update these specific styles
const styles = StyleSheet.create({
    headerContainer: {
        padding: 16,
        paddingTop: 45,
        backgroundColor: 'white',
    },
    accountBox: {
        marginBottom: 10,
    },
    accountRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    accountInfo: {
        //   marginLeft: 12,
        flex: 1,
        marginLeft: 30
    },
    accountImage: {
        width: 32,
        height: 32,
        backgroundColor: '#FFD700',
        marginBottom: 30
    },
    accountName: {
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 4,
        color: '#333',
    },
    accountNumber: {
        fontSize: 13,
        color: '#666',
    },
    manageLink: {
        color: '#007AFF',
        fontSize: 13,
        //   marginTop: 6,
        marginTop: 20,
    },
    separator: {
        height: 1,
        backgroundColor: '#E5E5E5',
        marginTop: 10,
        marginBottom: 5,
    },
    sidebarImage: {
        width: '100%',
        height: undefined,
          aspectRatio: 0.85,
        // flex: 1,
        resizeMode: 'contain',
        // marginTop: -50,
    },
    imageContainer: {
        marginBottom: 40,
    },
    // accountImage: {
    //   width: 40,
    //   height: 40,
    //   borderRadius: 5,
    // },
});

