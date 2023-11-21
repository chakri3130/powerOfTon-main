import React from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import Dummydata from "../assets/Dummydata";

export default function CategoriesPage() {

    const renderCategoryItem = ({ item }: { item: { id: string, name: string, image: string } }) => (
        <TouchableOpacity
            style={styles.categoryItem}
            onPress={() => {
                // Add your navigation action here, e.g., navigate to a new page
                // navigation.navigate('CategoryDetail', { categoryId: item.id });
            }}
        >
            <View style={styles.categoryItemInner}>
                <View style={styles.logoBackground}>
                    <Image source={item.image} style={styles.categoryIcon} />
                </View>
                <Text style={styles.categoryName}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.pageBackground}>
            <FlatList
                data={Dummydata.categoriesData}
                keyExtractor={(item) => item.id}
                renderItem={renderCategoryItem}
                numColumns={2} // Display 2 categories per row
            />
        </View>
    );
}

const styles = StyleSheet.create({
    pageBackground: {
        flex: 1,
        backgroundColor: '#F2F2F2', // Set the background color for the entire page
    },
    categoryItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    categoryItemInner: {
        alignItems: 'center',
    },
    logoBackground: {
        backgroundColor: '#e4ebf5', // Set a suitable background color to highlight the logo
        padding: 10,
        borderRadius: 70, // Make it round or customize the shape as needed
    },
    categoryIcon: {
        width: 100,
        height: 100,
    },
    categoryName: {
        marginTop: 5,
        fontSize: 12,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
