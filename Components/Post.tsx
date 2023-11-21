import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import colors from "../assets/colors";
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Post = (props: any) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Image source={require('../assets/images/founder.jpeg')} style={styles.headerImage} />
                    <View>
                        <Text style={styles.headerLeftTextName}>Praveen Kumar</Text>
                        <Text style={styles.headerLeftTextTime}>19 mins ago</Text>
                    </View>
                </View>
                <View style={styles.headerRight}>
                    <TouchableOpacity>
                        <AntDesign name="ellipsis1" size={24} color={colors.primpary_color.greeen} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.textofPost}>
                <Text numberOfLines={3}>
                    🌟 Exciting News! 🌟 We're thrilled to announce the launch of our new product, the XYZ Widget Pro! This innovative gadget is packed with amazing features that will make your life easier. From cutting-edge technology to sleek design, it's a game-changer. Get ready to experience a new level of productivity. 🔥
                </Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Image source={require('../assets/images/sample1.jpeg')} style={styles.image} />
                <Image source={require('../assets/images/sample2.jpeg')} style={styles.image} />
                <Image source={require('../assets/images/sample3.jpeg')} style={styles.image} />
            </ScrollView>
            <View style={styles.likeshare}>
                <TouchableOpacity style={styles.liekbutton}>
                    <View style={styles.row}>
                        <SimpleLineIcons name="like" size={20} color={colors.primpary_color.blue} />
                        <Text style={styles.buttonText}>Like</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.liekbutton}>
                    <View style={styles.row}>
                        <MaterialIcons name="comment" size={20} color={colors.primpary_color.blue} />
                        <Text style={styles.buttonText}>Comment</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.liekbutton}>
                    <View style={styles.row}>
                        <Ionicons name="share-social-outline" size={20} color={colors.primpary_color.blue} />
                        <Text style={styles.buttonText}>Share</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default Post;

const styles = StyleSheet.create({
    cardContainer: {
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    likeshare: {
        flexDirection: "row",
        justifyContent: 'space-between',
        borderTopColor: 'lightgray',
        borderWidth: 1,
        borderBottomColor: 'transparent',
        botderLeftColor: 'transparent',
        borderLeftWidth: 0,
        borderRightColor: 'transparent',

    },
    buttonText: {
        color: colors.primpary_color.blue,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    button: {
        width: 80,
        height: 40,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.primpary_color.blue,
    },
    liekbutton: {
        borderTopColor: 'lightgray',
        width: 80,
        height: 40,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',

    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 10,
        margin: 10,
    },
    text: {
        color: 'black',
    },
    time: {
        color: 'grey',
        marginTop: 0
    },
    textofPost: {
        marginVertical: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    headerLeftTextName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    headerLeftTextTime: {
        color: colors.primpary_color.greeen,
    },
    headerImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerRight: {
        alignItems: 'center',
    },
});
