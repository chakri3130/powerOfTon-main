import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import colors from '../assets/colors';

export default function Slider(props: any) {
    const handleButton = () => {
        props.navigation.push('login');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <Image source={require('../assets/images/logo.png')} style={styles.image} />
                <View style={styles.cardText}>
                    <Text style={styles.name}>Synerygy India Foundation</Text>
                    <Text style={styles.name}>Power Of Ten</Text>
                    <Text style={[styles.description]} numberOfLines={3}>
                        Empowering Swaeroes through Power Of Ten
                    </Text>
                </View>

                <TouchableOpacity
                    onPress={handleButton}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primpary_color.greeen,
    },
    cardText: {
        marginTop: 20,
        alignItems: 'center',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        color: colors.primpary_color.greeen,
    },
    description: {
        padding: 10,
        fontSize: 14,
        width: '80%',
        textAlign: 'center',
        marginTop: 30,

    },
    button: {
        backgroundColor: colors.primpary_color.orange,
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: colors.primpary_color.white,
        fontSize: 20,
        fontWeight: 'bold',
    },
    card: {
        width: '90%',
        height: '80%',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        ...Platform.select({
            ios: {
                shadowColor: 'grey',
                shadowOffset: { width: 4, height: 4 },
                shadowOpacity: 0.4,
                shadowRadius: 9,
            },
            android: {
                elevation: 2,
            },
        }),
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 20,
    },
});
