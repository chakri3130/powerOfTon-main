import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, Alert } from "react-native";
import * as Location from 'expo-location';
import axios from 'axios';
import * as Animatable from 'react-native-animatable';
import { postMetodWithAccessToken } from "../API's/Service";

export default function Help(props: any) {
    const [location, setLocation] = useState(null);

    const getUserLocation = async () => {
        try {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permission Denied', 'Please enable location services.');
                return;
            }

            const userLocation = await Location.getCurrentPositionAsync({});
            setLocation(userLocation as any);
            sendSOSRequest(userLocation.coords.latitude, userLocation.coords.longitude, "userID123");
        } catch (error) {
            console.error(error);
        }
    };

    const sendSOSRequest = async (latitude: any, longitude: any, userId: any) => {
        try {
            const body = {
                "latitude": latitude,
                "longitude": longitude,
                "userId": userId
            }
            postMetodWithAccessToken('', body).then((response) => {
                console.log(response);
            })



            // Handle the response here (e.g., send notifications to nearby users)

        } catch (error) {
            console.error('SOS Request failed:', error);
        }
    };

    return (
        <View style={styles.container}>
            {/* Wave Animation (Outer Circle) */}
            <Animatable.View animation="pulse" iterationCount="infinite" style={styles.outerWave}>
                <TouchableOpacity style={styles.sos} onPress={getUserLocation}>
                    <Text style={[styles.text, { fontSize: 30 }]}>SOS</Text>
                </TouchableOpacity>
            </Animatable.View>
            <Text style={[styles.text, { color: 'black' }]}>I am in an emergency/pandemic situation. Please help me.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0', // Background color
    },
    outerWave: {
        backgroundColor: 'transparent',
        borderWidth: 3,
        borderColor: '#FF5733', // Outer wave color
        borderRadius: 150,
        height: 170,
        width: 170,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sos: {
        backgroundColor: 'red',
        borderRadius: 100,
        height: 150,
        width: 150,
        textAlign: 'center',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        margin: 20,
        fontWeight: 'bold',
        color: 'white',
    },
});
