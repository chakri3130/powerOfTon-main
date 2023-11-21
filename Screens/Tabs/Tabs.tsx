import React from 'react';
import { Image, Touchable, TouchableOpacity, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Fontawsome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Home from '../Home';
import Catogeries from '../Catogeries';
import Account from '../Account';
import Post from '../Post';
import colors from '../../assets/colors';
import Help from '../Help';

const Tab = createBottomTabNavigator();

const makeaPost = () => {
    console.log('make a post');

}


const Tabs = (props: any) => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        return <Ionicons name="home" size={25} color={color} />;
                    } else if (route.name === 'Catogeries') {
                        return <Fontawsome name='th-large' size={25} color={color} />;
                    } else if (route.name === 'Post') {
                        return <Fontawsome name="plus-square" size={25} color={color} />;
                    } else if (route.name === 'Account') {
                        return <MaterialCommunityIcons name="account-tie" size={25} color={color} />;
                    } else if (route.name === 'help') {
                        return <FontAwesome5 name='hands-helping' size={25} color={color} />;
                    }
                },
                tabBarActiveTintColor: colors.primpary_color.orange,
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={Home} options={({ navigation }) => {
                return {
                    headerTitle: 'Hello Harish',

                    headerLeft: () => (
                        <Image source={require('../../assets/images/founder.jpeg')} style={{ width: 50, height: 50, marginBottom: 20, borderRadius: 25, margin: 10 }} />
                    ),
                    headerRight: () => (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('QRCodeScanner')
                        }}>
                            <MaterialIcons name='qr-code-scanner' size={32}
                                style={{ height: 50, marginRight: 8, top: 10 }} />
                        </TouchableOpacity>
                    )
                }
            }} />
            <Tab.Screen name='Catogeries' component={Catogeries} />
            <Tab.Screen name='Post' component={Post} options={{
                headerTitle: '',
                headerRight: () => (
                    <TouchableOpacity onPress={makeaPost}>
                        <Text style={{ color: 'blue', fontSize: 17, marginRight: 15, }}>Post</Text>
                    </TouchableOpacity>
                )
            }} />
            <Tab.Screen name="Account" component={Account} />
            <Tab.Screen name='help' component={Help} />

        </Tab.Navigator>
    );
};

export default Tabs;
