import { View, ActivityIndicator, Alert } from "react-native";
import Globalstyle from "../assets/Global";
import colors from "../assets/colors";
import Dummydata from "../assets/Dummydata";
import NetInfo from '@react-native-community/netinfo';



const postMetodWithoutAccessToken = async (url: string, body: any) => {
    const networkStatus = await checknetwork();
    console.log("is network available", networkStatus.isConnected);

    return new Promise((resolve, reject) => {
        if (networkStatus.isConnected) {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((responseJson) => {
                    console.log(responseJson);
                    resolve(responseJson);
                    // if (responseJson.status === 200 && !responseJson.error) {
                    //     resolve(responseJson);
                    // } else {
                    //     reject(Dummydata.errorMessage);
                    // }
                })
                .catch((error) => {
                    console.log(error);
                    reject(error);
                });
        } else {
            reject(new Error("Network unavailable, Please connect to the internet."));
        }
    });
};

export default postMetodWithoutAccessToken;


export const postMetodWithAccessToken = async (url: string, body: any) => {
    const networkStatus = await checknetwork();
    console.log("is network available", networkStatus.isConnected);
    return new Promise((resolve, reject) => {
        if (networkStatus.isConnected) {
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': Dummydata.token
                },
                body: body

            }).then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson);
                    resolve(responseJson);
                    // if (responseJson.status == 200 && responseJson.error == false) {
                    //     return responseJson;
                    // }
                    // else {
                    //     return Dummydata.errorMessage
                    // }
                })
                .catch((error) => {
                    console.log(error);
                    reject(error)
                });
        } else {
            reject(new Error("Network unavailable, Please connect to the internet."));
        }
    });


};

export const displayActivityIndicator = () => {
    return (
        <View style={Globalstyle.activityIndicatorContainer}>
            <ActivityIndicator size="large" color={colors.primpary_color.orange} />
        </View>
    )
}
export const checknetwork = () => {
    return NetInfo.fetch()
}


