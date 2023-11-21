// Signup.tsx
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Pressable, Text, Platform, KeyboardAvoidingView, ScrollView, ActivityIndicator } from "react-native";
import Input from '../Components/Input';
import Colours from "../assets/colors";
import postMetodWithoutAccessToken from "../API's/Service";
import APIEndPoints from "../API's/Constants";

export default function Signup(props: any) {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [emailError, setEmailError] = useState(false)
    const [phoneError, setPhoneError] = useState(false);
    const [passError, setPassError] = useState(false);
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    const phoneRegex = /^\d{10}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    const navigateToLogin = () => {
        props.navigation.goBack('login');
    };
    const createBody = () => {
        const body = {
            "first_name": firstName,
            "last_name": lastName,
            "email": email,
            "mobile_no": phone,
            "password": password,
            "device_type": Platform.OS,
            "status": true,
            "role": "customer"
        }
        return body;
    }

    const submit = () => {
        setIsLoading(true);
        console.log("First Name: " + firstName, "Last Name: " + lastName, "Email: " + email, "Phone: " + phone, "Password: " + password);
        if (firstName == "" || lastName == "" || email == "" || phone == "" || password == "") {
            alert("Please fill all the fields");
            setIsLoading(false);
            return;
        }
        else if (emailError && phoneError) {
            alert("Please enter valid email and phone number");
            setIsLoading(false);
            return;
        } else {
            postMetodWithoutAccessToken(APIEndPoints.Signup, JSON.stringify(createBody())).then((response) => {
                console.log(response);
                setEmail("");
                setPassword("");
                setPhone("");
                setFirstName("");
                setLastName("");
                setIsLoading(false);
                props.navigation.navigate('login');
            }).catch((error) => {
                setIsLoading(false);
                console.log(error);
            });
        }

    }

    const handleInputChange = (fieldName: any, text: any) => {
        // Use fieldName to determine which state variable to update
        switch (fieldName) {
            case "firstname":
                setFirstName(text);
                break;
            case "lastname":
                setLastName(text);
                break;
            case "email":
                setEmail(text);
                break;
            case "phone":
                setPhone(text);
                break;
            case "password":
                setPassword(text);
                break;
            default:
                break;
        }
    };
    const validateEmail = (text: string) => {
        if (emailRegex.test(text)) {
            setEmailError(false);
        } else {
            setEmailError(true);
        }
        setEmail(text);
    };

    const validatePhone = (text: string) => {
        if (phoneRegex.test(text)) {
            setPhoneError(false);
        } else {
            setPhoneError(true);
        }
        setPhone(text);
    };

    const validatePassword = (text: string) => {
        if (passwordRegex.test(text)) {
            setPassError(false);
        } else {
            setPassError(true);
        }
    };

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
                    <Image style={styles.image} source={require('../assets/images/logo.png')} />
                    <View>
                        <Input childeren="First Name" value={firstName} onChangeText={(text: any) => handleInputChange("firstname", text)} />
                        <Input childeren="Last Name" value={lastName} onChangeText={(text: any) => handleInputChange("lastname", text)} />
                        <Input childeren="Email" value={email} onChangeText={(text: any) => validateEmail(text)} error={emailError} />
                        {emailError ? <Text style={{ color: "red", marginBottom: 10 }}>Enter valid Email Id</Text> : null}
                        <Input childeren="Phone Number" value={phone} onChangeText={(text: any) => validatePhone(text)} error={phoneError} />
                        {phoneError ? <Text style={{ color: "red", marginBottom: 10 }}>Enter valid Phone Number</Text> : null}
                        <Input childeren="Password" value={password} onChangeText={(text: any) => validatePassword(text)} erro={passError} />
                        {passError ? <Text style={{ color: "red", marginBottom: 10 }}>Password must contain atleast 8 characters, 1 uppercase, 1 lowercase and 1 number</Text> : null}
                    </View>
                    <Pressable style={styles.button} onPress={submit} disabled={isLoading || emailError || phoneError}>
                        <Text style={(isLoading || emailError || phoneError) ? [styles.text, { color: 'grey' }] : styles.text}>Signup</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={navigateToLogin}>
                        <Text style={styles.text}><Text style={styles.accountText}>Already Registered? </Text>Login</Text>
                    </Pressable>
                </KeyboardAvoidingView>
            </ScrollView>
        </View >
    );
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
