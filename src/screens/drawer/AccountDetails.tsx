import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import QRImage from "../../assets/qr.png";
import BellImage from "../../assets/bell.png";
import BottomBarImage from "../../assets/bottom.jpeg"

const AccountDetails = ({route}:any) => {
    const navigation = useNavigation();
    const { data } = route.params;

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <TouchableOpacity activeOpacity={1}>
                <Image
                    source={require('../../assets/manage.jpeg')}
                    style={styles.headerImage}
                />
            </TouchableOpacity>

            {/* Account Details Section */}
            <View style={styles.detailsContainer}>
                <View style={styles.header}>
                    <View style={styles.logoContainer}>
                        <Image 
                            source={{ uri: data?.image }}
                            style={styles.logo}
                        />
                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={styles.name}>{data?.name}</Text>
                    <Text style={styles.company}>{data?.company_name}</Text>
                    <Text style={styles.accountNumber}>{data?.broker}</Text>
                    <Text style={styles.accessPoint}>{data?.access_point}, Hedge</Text>
                    <Text style={styles.balance}>{data?.amount}</Text>
                </View>
                <View style={styles.qrContainer}>
                    <TouchableOpacity style={styles.qrBox}>
                        <Image 
                            source={QRImage}
                            style={styles.qrCode}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bellContainer}>
                        <Image 
                            source={BellImage}
                            style={styles.bellIcon}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <Image
            source={BottomBarImage}
            style={styles.bottomBar}
            resizeMode="contain"
        />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerImage: {
        width: '100%',
        height: 130,
        resizeMode: 'contain',
        marginTop: -40,
    },
    scrollView: {
        paddingHorizontal: 15,
        paddingBottom: 20,
    },
    detailsContainer: {
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        // paddingTop: 40,
        marginTop:-35
    },
    header: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:20
    },
    logoContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        backgroundColor: '#f2f2f2',
    },
    
    content: {
        marginTop: 10,
        alignItems: 'center',
    },
    name: {
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 3,
        color: '#333', // Black text color for the name
    },
    company: {
        fontSize: 16,
        color: '#007AFF',
        marginBottom: 10,
    },
    accountNumber: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    accessPoint: {
        fontSize: 14,
        color: '#666',
        marginBottom: 20,
    },
    balance: {
        fontSize: 20,
        // fontWeight: '600',
        marginBottom: 10,
    },
    qrContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal:30,
        marginTop: -20,
        paddingBottom: 10, // Add padding to the bottom of the container
    },
    qrBox: {
        width: 35,
        height: 35,
    },
    qrCode: {
        width: 24,
        height: 24,
    },
    bellContainer: {
        padding: 5,
    },
    bellIcon: {
        width: 24,
        height: 24,
    },
    bottomBar: {
        width: '100%',
        height: 70,
        position: 'absolute',
        bottom: 0,
    },
});
export default AccountDetails