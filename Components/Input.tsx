// Input.tsx
import React from "react";
import { TextInput, StyleSheet } from "react-native";
import Colours from "../assets/colors";

const input = (props: any) => {
    const handleInputChange = (text: any) => {

        props.onChangeText(text); // Call the parent's callback function
    };



    return (
        <TextInput
            style={styles.text}
            placeholder={props.childeren}
            value={props.value}
            keyboardType={props.childeren === "Phone" ? "numeric" : "default"}
            onChangeText={handleInputChange}
            autoCapitalize={(props.childeren === 'Email' || props.childeren === 'Password') ? 'none' : 'words'}
            maxLength={props.childeren === "Phone" ? 10 : 50}
            secureTextEntry={props.childeren === "Password" ? true : false}


        />
    );
};

export default input;

const styles = StyleSheet.create({
    text: {
        borderWidth: 2,
        height: 45,
        width: 300,
        marginBottom: 12,
        padding: 5,
        borderColor: Colours.primpary_color.blue,
        borderRadius: 10,

    },
});
