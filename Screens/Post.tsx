import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, FlatList, Alert } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import { Video } from "expo-av";
import colors from "../assets/colors";
import { postMetodWithAccessToken } from "../API's/Service";
import APIEndPoints from "../API's/Constants";

export default function Post() {
    const [userInput, setUserInput] = useState('');
    const [selectedImages, setSelectedImages] = useState([] as string[]);
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    const pickImage = async () => {
        const result: any = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            aspect: [16, 9],
        });

        if (!result.cancelled) {
            console.log(result.assets[0].uri);
            let localUri = result.assets[0].uri;
            let filename = localUri.split('/').pop();

            let match = /\.(\w+)$/.exec(filename);
            let type = match ? `image/${match[1]}` : `image`;

            let formData = new FormData();
            // formData.append('user_id', '8');
            formData.append('attachments', { uri: localUri, name: filename, type } as any);
            // formData.append('content', 'this is test content');

            const body = {
                'user_id': '8',
                'content': 'this is test content',
                'attachments': formData
            }
            console.log(body);
            postMetodWithAccessToken(APIEndPoints.createPost, body).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            });
            //setSelectedImages([...selectedImages, result.assets[0].uri]);
        }
    };

    const pickVideo = async () => {
        const result: any = await DocumentPicker.getDocumentAsync({
            type: 'video/*',
        });
        console.log(result);
        Alert.alert('Video', JSON.stringify(result));
        if (!result.cancelled) {
            setSelectedVideo(result.assets[0].uri);
        }
    };

    const removeImage = (imageUri: string) => {
        setSelectedImages(selectedImages.filter((uri) => uri !== imageUri));
    };

    const removeVideo = () => {
        setSelectedVideo(null);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                multiline={true}
                numberOfLines={4}
                placeholder="What's on your mind"
                value={userInput}
                onChangeText={setUserInput}
            />

            <FlatList
                data={selectedImages}
                numColumns={3}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <View style={styles.mediaItem}>
                        <Image source={{ uri: item }} style={styles.selectedMedia} />
                        <TouchableOpacity onPress={() => removeImage(item)} style={styles.removeButton}>
                            <Text style={styles.removeButtonText}>X</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />

            <FlatList
                data={selectedVideo}
                numColumns={3}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <View style={styles.mediaItem}>
                        <Video source={{ uri: selectedVideo }} style={styles.selectedMedia} />
                        <TouchableOpacity onPress={removeVideo} style={styles.removeButton}>
                            <Text style={styles.removeButtonText}>X</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />



            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
                    <Text style={styles.buttonText}>Upload Image</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.uploadButton} onPress={pickVideo}>
                    <Text style={styles.buttonText}>Upload Video</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    textInput: {
        width: '100%',
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        padding: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    },
    uploadButton: {
        flex: 1,
        backgroundColor: colors.primpary_color.orange,
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
    },
    selectedMedia: {
        width: 100,
        height: 100,
        marginTop: 15,
    },
    mediaItem: {
        position: 'relative',
        marginRight: 10,
        backgroundColor: '#f0f0f0',
    },
    removeButton: {
        position: 'absolute',
        top: 5,
        right: -5,
        zIndex: 1,
        backgroundColor: 'red',
        borderRadius: 50,
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    removeButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
