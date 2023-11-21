import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

export default function SavedAddress() {
    const [addresses, setAddresses] = useState([
        {
            id: '1',
            name: 'John Doe',
            phoneNumber: '123-456-7890',
            area: 'Sample Area',
            pincode: '123456',
            city: 'Sample City',
        },
        {
            id: '2',
            name: 'John Doe',
            phoneNumber: '123-456-7890',
            area: 'Sample Area',
            pincode: '123456',
            city: 'Sample City',
        },
        {
            id: '3',
            name: 'John Doe',
            phoneNumber: '123-456-7890',
            area: 'Sample Area',
            pincode: '123456',
            city: 'Sample City',
        },
        // Add more addresses as needed
    ]);

    const handleEdit = (id: any) => {
        // Handle edit action
        console.log(`Edit address with id ${id}`);
    };

    const handleUpdate = (id: any) => {
        // Handle update action
        console.log(`Update address with id ${id}`);
    };

    const handleDelete = (id: any) => {
        // Handle delete action
        const updatedAddresses = addresses.filter((address) => address.id !== id);
        setAddresses(updatedAddresses);
    };

    const renderAddressCard = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.text}>Name: {item.name}</Text>
            <Text style={styles.text}>Phone Number: {item.phoneNumber}</Text>
            <Text style={styles.text}>Area: {item.area}</Text>
            <Text style={styles.text}>Pincode: {item.pincode}</Text>
            <Text style={styles.text}>City: {item.city}</Text>
            <View style={styles.actions}>
                <TouchableOpacity onPress={() => handleEdit(item.id)}>
                    <Text style={styles.actionButton}>Edit</Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => handleDelete(item.id)}>
                    <Text style={styles.actionButton}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View>
            <FlatList
                data={addresses}
                renderItem={renderAddressCard}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
    },
    actionButton: {
        color: 'blue',
        marginTop: 5,
    },
    actions: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,

    },
    text: {
        padding: 5
    }
});
