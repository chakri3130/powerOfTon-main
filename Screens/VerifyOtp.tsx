import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable, ActivityIndicator } from "react-native";
import colors from "../assets/colors";
import Input from "../Components/Input";
import postMetodWithoutAccessToken from "../API's/Service";
import APIEndPoints from "../API's/Constants";
import Globalstyle from "../assets/Global";
export default function Verifyotp({ props, route }: any) {
    const [isLoading, setIsLoading] = useState(false);
    const [otp, setOtp] = useState("");
    const verifyOtp = () => {
        setIsLoading(true);
        if (otp == '' || otp == undefined || otp == null) {
            alert("Please enter OTP")
            setIsLoading(false);
        } else {
            postMetodWithoutAccessToken(APIEndPoints.verifyOtp, JSON.stringify({
                "email_or_mobile": route.params.email,
                "otp": otp,
            })).then((response) => {
                setOtp("");
                console.log(response);
                setIsLoading(false);
                props.navigation.navigate('Tabs');
            }).catch((error) => {
                setIsLoading(false);
                console.log(error);
            }).finally(() => {
                setOtp("");
                setIsLoading(false);
            });
        }
    }
    return (<View style={styles.container}>
        {isLoading && (
            <View style={Globalstyle.activityIndicatorContainer}>
                <ActivityIndicator size="large" color={colors.primpary_color.orange} />
            </View>
        )}
        <View style={styles.container}>
            <View style={styles.card}>
                <Image source={require('../assets/images/logo.png')} style={styles.input} />
                <Input childeren="OTP" onChangeText={(text: any) => {
                    setOtp(text);
                }} />
                <Pressable style={styles.button} onPress={verifyOtp}>
                    <Text style={styles.text}>Verify OTP</Text>
                </Pressable>
            </View>
        </View>
    </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 10

    },

    button: {
        marginTop: 20,
    },
    text: {
        color: colors.primpary_color.orange,
        fontWeight: "bold",
        fontSize: 18
    },

    input: {
        width: 150, height: 150, alignItems: 'center', margin: 50
    }
});