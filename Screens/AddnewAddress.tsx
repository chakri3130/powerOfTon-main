import React, { useState } from "react";
import { StyleSheet, View, Image, Pressable, Text, Platform, KeyboardAvoidingView, ScrollView, ActivityIndicator, TouchableOpacity } from "react-native";
import Input from '../Components/Input';
import Colours from "../assets/colors";
export default function AddnewAddress() {
    const [isLoading, setIsLoading] = useState(false);
    const [firstName, setFirstName] = useState('')
    const [Area, setArea] = useState('');
    const [street, setsteert] = useState('');
    const [pincode, setPincode] = useState('');
    const [landmark, setlandmark] = useState('')

    const handleInputChange = (fieldName: any, text: any) => {
        // Use fieldName to determine which state variable to update
        switch (fieldName) {
            case "firstname":
                setFirstName(text);
                break;
            case "area":
                setArea(text);
                break;
            case "sreet":
                setsteert(text);
                break;
            case "pincode":
                setPincode(text);
                break;
            case "landmark":
                setlandmark(text);
                break;
            default:
                break;
        }
    };
    const submit = (() => {
        console.log("sumit");
    })
    return (
        <View style={styles.container}>
            {isLoading && (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator size="large" color={Colours.primpary_color.orange} />
                </View>
            )}
            <ScrollView>
                <KeyboardAvoidingView
                    style={styles.container}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -150}
                >
                    {/* <Image style={styles.image} source={require('../assets/images/logo.png')} /> */}
                    <View>
                        <Input childeren="First Name" value={firstName} onChangeText={(text: any) => handleInputChange("firstname", text)} />
                        <Input childeren="Area" value={Area} onChangeText={(text: any) => handleInputChange("area", text)} />
                        <Input childeren="Street" value={street} onChangeText={(text: any) => handleInputChange("sreet", text)} />
                        <Input childeren="pincode" value={pincode} onChangeText={(text: any) => handleInputChange("pincode", text)} />
                        <Input childeren="Near By Landmark" value={landmark} onChangeText={(text: any) => handleInputChange("landmark", text)} />

                    </View>
                    <TouchableOpacity style={styles.button} onPress={submit}>
                        <Text style={styles.text}>submit</Text>
                    </TouchableOpacity>

                </KeyboardAvoidingView>
            </ScrollView>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center", // Center content vertically
        padding: 16,
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 20, // Add some spacing
    },
    button: {
        marginTop: 20,
    },
    text: {
        color: Colours.primpary_color.orange,
        fontWeight: "bold",
        fontSize: 15,
    },
    accountText: {
        // fontWeight: "bold"
    },
    activityIndicatorContainer: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "f0f0f0",
        position: "absolute",

    },
});