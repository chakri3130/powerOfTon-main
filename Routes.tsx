import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import ForgotPassword from './Screens/Forgotpassword';
import Verifyotp from './Screens/VerifyOtp';
import Slider from './Screens/Slider';
import Tabs from './Screens/Tabs/Tabs';
import QRCodeScanner from './Screens/QRCodeScanner';
import EditProfile from './Screens/EditProfile';
import SavedAddress from './Screens/SavedAddress';
import AddnewAddress from './Screens/AddnewAddress';
import { TouchableOpacity, Text } from 'react-native';
const Stack = createNativeStackNavigator();

export default function Routes(props: any) {
    console.log("props", props);
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={props.initialPage}>

                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name='Signup' component={Signup}
                />
                <Stack.Screen name='Tabs' component={Tabs} options={{
                    headerShown: false

                }} />
                <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
                <Stack.Screen name='verifyOtp' component={Verifyotp} />
                <Stack.Screen name='slider' component={Slider} options={{
                    headerShown: false
                }}
                />
                <Stack.Screen name='QRCodeScanner' component={QRCodeScanner} />
                <Stack.Screen name='EditProfile' component={EditProfile} />
                <Stack.Screen name='SavedAddress' component={SavedAddress} options={({ navigation }) => {
                    return {
                        headerRight: () => (
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('AddnewAddress')
                            }}>
                                <Text>Add new</Text>
                            </TouchableOpacity>
                        )
                    }
                }} />
                <Stack.Screen name='AddnewAddress' component={AddnewAddress} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}