import React, { useState, useEffect } from "react"
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, TextInput, Alert } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { launchImageLibrary } from "react-native-image-picker";
import { useNavigation } from "@react-navigation/native";

const { height } = Dimensions.get('window');

const Before = () => {
    const navigation = useNavigation();
    const [index, setIndex] = useState(0);
    const [user, setUser] = useState(false);
    const [image, setImage] = useState(require('../assets/decor/user.png'));
    const [nickname, setNickname] = useState(null);

    const loadAccount = async () => {
        try {
            const storedAccount = await AsyncStorage.getItem("user");
            if (storedAccount) {
                const user = JSON.parse(storedAccount);
                if (user) {
                    setUser(true);
                }
            }
        } catch (error) {
            console.error("Error loading user:", error);
        }
    };    

    useEffect(() => {
        loadAccount();
    }, []);    

    const handleNext = () => {
        if(user) {
            navigation.navigate('TopicsScreen')
        } else {
            setIndex((prevIndex) => (prevIndex + 1) % 2);
            if(index === 1) {
                createUser();
            }    
        }
    };

    const uploadAvatar = async () => {
        try {
            const result = await new Promise((resolve, reject) => {
                launchImageLibrary({ mediaType: "photo", quality: 0.8 }, ({ assets, errorMessage }) => {
                    if (errorMessage) reject(errorMessage);
                    else resolve(assets?.[0]?.uri || null);
                });
            });
    
            if (result) setImage(result);
        } catch (error) {
            Alert.alert("Error", "Failed to select image.");
        }
    };

    const createUser = async () => {
        if (!nickname || !image) {
            Alert.alert("Error", "Please fill in all fields to create your account");
            return;
        }        
        try {
            const userData = {
                image: image,
                nickname,
            };
            await AsyncStorage.setItem("user", JSON.stringify(userData));
            setUser(true);
            navigation.navigate('TopicsScreen')
            console.log("User saved:", userData);
        } catch (error) {
            console.error("Error saving user:", error);
        }
    };

    return (
        <View style={styles.container}>

            {
                index === 0 && (
                    <View style={{width: '100%', alignItems: 'center'}}>
                        <Text style={styles.title}>Time Travel Playground</Text>
                        <View style={styles.line} />
                        <Text style={styles.text}>🔄 Loading into the past… Time Travel Playground is a place where time knows no bounds. Explore great eras, compare civilizations, and uncover the mysteries of the past through interactive scenarios. 🔎 Immerse yourself in history 📜 Compare epochs 🏺 Discover artifacts. Your journey through time begins now… ⏳</Text>
                    </View>
                )
            }

            {
                index === 1 && (
                    <View style={{width: '100%', alignItems: 'center', flexGrow: 1}}>
                        <TouchableOpacity onPress={uploadAvatar}>
                            <Image 
                                source={typeof image === "string" ? { uri: image } : image} 
                                style={styles.img} 
                                />
                        </TouchableOpacity>
                        <TextInput
                            style={styles.input}
                            placeholder="Nickname"
                            placeholderTextColor="#979797"
                            value={nickname}
                            onChangeText={setNickname}
                        />
                    </View>
                )
            }

            <TouchableOpacity style={styles.btn} onPress={handleNext}>
                <Text style={styles.btnText}>{index === 0 ? 'Step Through' : 'Create account'}</Text>
            </TouchableOpacity>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 40,
        paddingTop: height * 0.07,
        backgroundColor: '#000'
    },

    title: {
        fontWeight: '900',
        fontSize: 36,
        color: '#fff',
        lineHeight: 44,
        textAlign: 'center',
        paddingTop: height * 0.1
    },

    line: {
        width: '100%',
        height: 2,
        backgroundColor: '#cd2027',
        marginTop: 18,
        marginBottom: height * 0.15
    },

    image: {
        resizeMode: 'contain',
        marginBottom: height * 0.09,
    },

    text: {
        fontWeight: '500',
        fontSize: 16,
        color: '#fff',
        lineHeight: 21,
    },

    img: {
        width: 180,
        height: 180,
        borderRadius: 300,
        marginBottom: 70
    },

    input: {
        width: '100%', 
        borderBottomWidth: 2,
        borderBottomColor: '#cd2027',
        padding: 10,
        color: '#fff',
        fontSize: 24,
        fontWeight: '800',
        textAlign: 'center'
    },

    btn: {
        width: 280,
        padding: 14,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: '#fff'
    },

    btnText: {
        fontSize: 18,
        fontWeight: '800',
        color: '#000',
        lineHeight: 21.6
    }

})

export default Before;