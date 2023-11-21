import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable, Alert, ActivityIndicator } from "react-native";
import Input from "../Components/Input";
import colors from "../assets/colors";
import APIEndPoints from "../API's/Constants";
import postMetodWithoutAccessToken, { displayActivityIndicator } from "../API's/Service";
import Globalstyle from "../assets/Global";
export default function ForgotPassword(props: any) {
    const [email, setEmail] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);
    const handlepassword = (text: any) => {
        setEmail(text);
    };
    const submit = () => {
        setIsLoading(true);
        if (email != "") {
            postMetodWithoutAccessToken(APIEndPoints.forgotPassword, JSON.stringify({
                "email_or_mobile": email,
            })).then((response) => {
                setIsLoading(false);
                console.log(response);
                props.navigation.navigate('verifyOtp', { email: email });
            }).catch((error: any) => {
                setIsLoading(false);
                alert(error);
            }).finally(() => {
                setIsLoading(false);
                setEmail("");
            });

        } else {
            setIsLoading(false);
            Alert.alert("Please enter email");
        }
    }
    return <View style={styles.container}>
        {isLoading && (
            displayActivityIndicator()
        )}
        <View style={styles.card}>
            <Image source={require('../assets/images/logo.png')} style={styles.input} />
            <Input childeren="Email" onChangeText={handlepassword} />
            <Pressable style={styles.button} onPress={submit}>
                <Text style={styles.text}>Submit</Text>
            </Pressable>
        </View>

    </View>
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