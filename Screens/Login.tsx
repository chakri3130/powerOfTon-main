import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Image, Alert, KeyboardAvoidingView, ScrollView, Platform, ActivityIndicator, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../assets/colors';
import postMetodWithoutAccessToken from '../API\'s/Service';
import APIEndPoints from '../API\'s/Constants';
import Globalstyle from '../assets/Global';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Login(props: any) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };


    const handleLogin = () => {
        setIsLoading(true);
        if (username !== '' && password !== '') {
            postMetodWithoutAccessToken(APIEndPoints.login, JSON.stringify({
                "email": username,
                "password": password,
                "device_type": Platform.OS,
                "deviceToken": "123456789",
            })).then((response: any) => {
                console.log("success", response);
                AsyncStorage.setItem('isLoggedin', 'true');
                AsyncStorage.setItem('userDetails', JSON.stringify(response.data));
                Alert.alert(response.message);
                setIsLoading(false);
                setUsername('');
                setPassword('');
                props.navigation.navigate('Tabs');
            }).catch((error) => {
                console.log("error", error);
                setIsLoading(false);
            });

        } else {

            Alert.alert('Please enter a username and password');
            setIsLoading(false);
        }
    }

    const handleRegister = () => {
        console.log('Register');
        props.navigation.navigate('Signup');
    }

    const handleForgotPassword = () => {
        props.navigation.navigate('ForgotPassword');
    }

    const renderRegisterButton = () => (
        <Pressable onPress={handleRegister}>
            <Text style={styles.registerText}>
                <Text style={styles.accountText}>Don't have an account? </Text>Register
            </Text>
        </Pressable>
    );

    return (
        <View >
            {isLoading && (
                <View style={Globalstyle.activityIndicatorContainer}>
                    <ActivityIndicator size="large" color={colors.primpary_color.orange} />
                </View>
            )}

            <ScrollView >
                <View style={styles.container} >
                    <KeyboardAvoidingView style={{ flex: 1 }}
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -150}>
                        <View style={styles.login}>
                            <Image style={styles.image} source={require('../assets/images/logo.png')} />
                            <View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Username"
                                    value={username}
                                    onChangeText={text => setUsername(text)}
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                />
                                <View style={styles.passContainer}>
                                    <TextInput
                                        secureTextEntry={!showPassword}
                                        value={password}
                                        onChangeText={setPassword}
                                        style={styles.pinput}
                                        placeholder="Enter Password"
                                        autoCorrect={false}
                                    />
                                    <MaterialCommunityIcons
                                        name={showPassword ? 'eye-off' : 'eye'}
                                        size={24}
                                        color="#aaa"
                                        style={styles.icon}
                                        onPress={toggleShowPassword}
                                    />
                                </View>


                                <View style={styles.buttons}>
                                    <Pressable style={styles.loginButton} onPress={handleLogin}>
                                        <Text style={styles.loginText}>Login</Text>
                                    </Pressable>
                                </View>
                                <View style={styles.buttons}>
                                    {renderRegisterButton()}
                                </View>
                                <View style={styles.buttons}>
                                    <Pressable onPress={handleForgotPassword}>
                                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    login: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 50,
    },
    passContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: colors.primpary_color.blue,
        paddingHorizontal: 0,
    },
    pinput: {
        flex: 1,
        padding: 10,
        width: 300,
        borderRadius: 10,
        height: 43,
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 40,
    },
    input: {
        borderWidth: 2,
        borderColor: colors.primpary_color.blue,
        borderRadius: 10,
        height: 45,
        width: 300,
        marginBottom: 12,
        padding: 10,
    },
    passwordInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 5,
    },
    icon: {
        marginRight: 10,
    },

    accountText: {
        color: 'black',
        marginTop: 10,
    },
    buttons: {
        alignItems: 'center',
        marginTop: 10,
    },
    loginButton: {
        backgroundColor: colors.primpary_color.greeen,
        padding: 10,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
    },
    loginText: {
        color: colors.primpary_color.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
    forgotPasswordText: {
        color: colors.primpary_color.orange,
        padding: 10,
        fontSize: 13,
        fontWeight: 'bold',
    },
    registerText: {
        color: colors.primpary_color.orange,
        fontWeight: 'bold',
    },
});
