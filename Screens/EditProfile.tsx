import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Image, Alert, KeyboardAvoidingView, ScrollView, Platform, ActivityIndicator, TouchableOpacity } from 'react-native';
import Input from '../Components/Input';
import * as ImagePicker from 'expo-image-picker';

import Colours from '../assets/colors';
export default function EditProfile(props: any) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [prof, setProf] = useState("");
    const [addrs, setAddrs] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [village, setVillage] = useState("");
    const [district, setDistrict] = useState("");
    const [mandal, setMandal] = useState("");
    const [country, setCountry] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [isimageAvailable, setimage] = useState(null)
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    const phoneRegex = /^\d{10}$/;

    useEffect(() => {
        console.log("props", props.route.params);

    });

    const submit = () => {
        console.log("submit");
    }
    const handleInputChange = (type: string, text: any) => {

        console.log(type, text);
    }
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


    //********************* Upload profile image *******************/
    const uploadImage = async () => {
        console.log("profile image");
        const result: any = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            aspect: [16, 9],
        });

        if (!result.cancelled) {
            console.log(result.assets[0].uri);
            let localUri = result.assets[0].uri;
            setimage(localUri);

            //setSelectedImages([...selectedImages, result.assets[0].uri]);
        }
    }

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
                    {/* <Image style={styles.image} source={require('../assets/images/profile.png')} /> */}
                    <TouchableOpacity style={styles.editImage} onPress={uploadImage} >
                        <Image style={styles.image} source={isimageAvailable == null ? require('../assets/images/profile.png') : { uri: isimageAvailable }} />
                    </TouchableOpacity>
                    {/* <Image style={styles.image} source={require('../assets/images/logo.png')} /> */}

                    <Input childeren="First Name" value={firstName} onChangeText={(text: any) => handleInputChange("firstname", text)} />
                    <Input childeren="Last Name" value={lastName} onChangeText={(text: any) => handleInputChange("lastname", text)} />
                    <Input childeren="Email" value={email} onChangeText={(text: any) => validateEmail(text)} error={emailError} />
                    {emailError ? <Text style={{ color: "red", marginBottom: 10 }}>Enter valid Email Id</Text> : null}
                    <Input childeren="Phone Number" value={phone} onChangeText={(text: any) => validatePhone(text)} error={phoneError} />
                    {phoneError ? <Text style={{ color: "red", marginBottom: 10 }}>Enter valid Phone Number</Text> : null}
                    <Input childeren="Profession" value={prof} onChangeText={(text: any) => handleInputChange("profession", text)} />
                    <Input childeren="Address" value={addrs} onChangeText={(text: any) => handleInputChange("address", text)} />

                    <Input childeren="City" value={city} onChangeText={(text: any) => handleInputChange("city", text)} />
                    <Input childeren="State" value={state} onChangeText={(text: any) => handleInputChange("state", text)} />



                    <Input childeren="village" value={village} onChangeText={(text: any) => handleInputChange("village", text)} />
                    <Input childeren="mandal" value={mandal} onChangeText={(text: any) => handleInputChange("mandal", text)} />



                    <Input childeren="Country" value={country} onChangeText={(text: any) => handleInputChange("country", text)} />
                    <Input childeren="Zip Code" value={zip} onChangeText={(text: any) => handleInputChange("zip", text)} />

                    <Pressable style={styles.button} onPress={submit} disabled={isLoading || emailError || phoneError}>
                        <Text style={(isLoading || emailError || phoneError) ? [styles.text, { color: 'grey' }] : styles.text}>Update Profile</Text>
                    </Pressable>

                </KeyboardAvoidingView>
            </ScrollView>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 20,
        position: 'relative',

    },
    editIcon: {
        width: 20,
        height: 20,
        top: 10,
        position: 'absolute',
    },
    button: {
        marginTop: 20,
    },
    text: {
        color: Colours.primpary_color.orange,
        fontWeight: "bold",
        fontSize: 15,
    },
    activityIndicatorContainer: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "f0f0f0",
        position: "absolute",
    },
    Inputrow: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    editImage: {
        flex: 1,
        marginTop: 0,
        marginBottom: 20,
    }
});