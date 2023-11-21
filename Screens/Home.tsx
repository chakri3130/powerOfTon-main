import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from "react-native";
import colors from "../assets/colors";
import Departments from "../Components/Departments";
import Post from "../Components/Post";
export default function Home(props: any) {
    return <View style={styles.container}>
        <View >
            <TextInput style={styles.input} placeholder="What's on your mind?" />
        </View>
        <View style={styles.Departments}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <Departments children={'All'} />
                <Departments children={'Supreme Swaero'} />
                <Departments children={'Admin'} />
                <Departments children={'Supreme Swaero'} />
                {/* <Departments children={'Electronics'} /> */}
            </ScrollView>
        </View>
        <ScrollView style={styles.Post}>
            <Post />
            <Post />
        </ScrollView>
    </View>
};
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    Departments: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2,
        flexDirection: 'row',
    },
    input: {
        borderRadius: 10,
        borderColor: colors.primpary_color.greeen,
        borderWidth: 1,
        margin: 10,
        marginTop: 13,
        height: 50,
        padding: 10,

    },
    Post: {
        flex: 1,
        margin: 2,

    }
});