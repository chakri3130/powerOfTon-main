import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function AccountPage(props: any) {
    const navigateTo = (screen: string) => {
        console.log(screen);
        switch (screen) {
            case "Edit Profile":
                console.log("Edit Profile");
                props.navigation.navigate('EditProfile');
                break;
            case "Saved Addresses":
                console.log("Saved Addresses");
                props.navigation.navigate('SavedAddress');
                break;
            case "Notification Settings":
                console.log("Notification Settings");
                break;
            case "Terms, Privacy Policy, and Conditions":
                console.log("Terms, Privacy Policy, and Conditions");
                break;
            case "About Us":
                console.log("About Us");
                break;
            default:
        }
    }
    //Logout Function//
    const logout = () => {
        console.log("Logout");
        AsyncStorage.clear();
        props.navigation.replace('login');

    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("../assets/images/profile.png")} style={styles.userImage} />
                <Text style={styles.username}>John Doe</Text>
            </View>
            <View style={styles.card}>
                <HeaderTitle title="Account Settings" />
                <MenuItem icon={require("../assets/images/edit_profile_clr.png")} label="Edit Profile" onClick={() => navigateTo('Edit Profile')} />
                <MenuItem icon={require("../assets/images/address_clr.png")} label="Saved Addresses" onClick={() => navigateTo('Saved Addresses')} />
                <MenuItem icon={require("../assets/images/notification_clr.png")} label="Notification Settings" onClick={() => navigateTo('Notification Settings')} />

            </View>
            <View style={styles.card}>
                <HeaderTitle title="Feedback and Information" />
                <MenuItem icon={require("../assets/images/terms_clr.png")} label="Terms, Privacy Policy, and Conditions" onClick={() => navigateTo('Terms, Privacy Policy, and Conditions')} />
                <MenuItem icon={require("../assets/images/aboutus_clr.png")} label="About Us" onClick={() => navigateTo('About Us')} />
            </View>
            <TouchableOpacity style={styles.logoutButton} onPress={logout}>
                <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>

        </View>
    );
}

function HeaderTitle({ title }: any) {
    return (
        <View style={styles.headerTitle}>
            <Text style={styles.headerTitleText}>{title}</Text>
        </View>
    );
}

function MenuItem({ icon, label, onClick }: any) {
    return (
        <TouchableOpacity style={styles.menuItem} onPress={onClick} >
            <Image source={icon} style={styles.menuItemIcon} />
            <Text style={styles.menuItemLabel}>{label}</Text>
        </TouchableOpacity>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 15,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    username: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    card: {
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
    },
    headerTitle: {
        backgroundColor: 'transparent',

        paddingBottom: 10,
        marginBottom: 10,
    },
    headerTitleText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,

    },
    menuItemIcon: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    menuItemLabel: {
        fontSize: 14,
    },
    logoutButton: {
        backgroundColor: '#FF5733',
        borderRadius: 10,
        padding: 15,
        marginTop: 20,
        alignItems: 'center',

    },
    logoutButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    }
});
