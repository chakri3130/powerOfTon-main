import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';


const QRCodeScanner = (props: any) => {
    const [hasPermission, setHasPermission] = useState(null as any);
    const [scanned, setScanned] = useState(false);
    useEffect(() => {
        console.log('useEffect', scanned);
        (async () => {
            const status: any = await BarCodeScanner.requestPermissionsAsync();
            if (status.status === 'granted') {
                setHasPermission(true);
            }
            console.log(hasPermission);
        })();

    }, []);
    const handleBarCodeScanned = ({ type, data }: any) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);

    };

    const renderCamera = () => {
        return (
            <View style={styles.cameraContainer}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={styles.camera}
                />
            </View>
        );
    };

    if (hasPermission === null) {
        return <View />;
    }

    if (hasPermission === false) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Camera permission not granted</Text>
            </View>
        );
    }
    const updateScannerState = () => {
        console.log('before updateScannerState', scanned);
        setScanned(false);
        console.log('after updateScannerState', scanned);

    };

    return (
        <View style={styles.container}>

            {renderCamera()}
            <TouchableOpacity
                style={styles.button}
                onPress={updateScannerState}

            >
                <Text style={styles.buttonText}>Try Again</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 40,
    },
    cameraContainer: {
        width: '80%',
        aspectRatio: 1,
        overflow: 'hidden',
        borderRadius: 10,
        marginBottom: 40,
    },
    camera: {
        flex: 1,
    },
    button: {
        backgroundColor: 'blue',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    text: {
        fontSize: 16,
        marginBottom: 40,

    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default QRCodeScanner;
