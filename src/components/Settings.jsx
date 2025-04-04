import React, { useState } from "react"
import { View, Text, TouchableOpacity, Alert, StyleSheet, Dimensions, Switch, Image, ImageBackground } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMusic } from '../constants/music.js';

const { height } = Dimensions.get('window');

const Settings = () => {
    const { isPlaying, togglePlay } = useMusic();
    const [vibro, setVibro] = useState(true);

    const resetProgress = async () => {
        try {
            await AsyncStorage.removeItem("user");
            await AsyncStorage.removeItem("points");
            await AsyncStorage.removeItem("unlockedLevels");
            await AsyncStorage.removeItem("purchasedLevels");
            Alert.alert("Success", "Entire progress has been reset along with your profile.");
        } catch (error) {
            console.error("Failed to reset progress", error);
            Alert.alert("Error", "Failed to reset progress.");
        }
    };

    const toggleVibro = () => {
        if(vibro) {
            setVibro(false)
        } else {
            setVibro(true)
        }
    };

    return (
        <ImageBackground source={require('../assets/back/2.png')} style={{flex: 1}}>
            <View style={styles.container}>

                <Image source={require('../assets/decor/logo.png')} style={styles.logo} />

                <View style={styles.musicContainer}>
                    <View style={styles.musicInner}>
                        <Text style={styles.title}>Music</Text>
                        <Switch value={isPlaying} onValueChange={togglePlay} thumbColor="#cd2027" trackColor={{ false: "#ccc", true: "#c7c7c7" }} />
                    </View>
                    <View style={styles.musicInner}>
                        <Text style={styles.title}>Vibration</Text>
                        <Switch value={vibro} onValueChange={toggleVibro} thumbColor="#cd2027" trackColor={{ false: "#ccc", true: "#c7c7c7" }} />
                    </View>
                </View>

                <TouchableOpacity style={styles.btn} onPress={resetProgress}>
                    <Text style={styles.btnText}>Reset Progress</Text>
                </TouchableOpacity>    

            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 40,
        paddingTop: height * 0.07,
        paddingBottom: height * 0.12
    },

    title: {
        fontWeight: '800',
        fontSize: 20,
        color: '#000',
        textAlign: 'center',
        marginBottom: 20
    },

    logo: {
        width: 162,
        height: 146,
        marginBottom: height * 0.05
    },

    musicContainer: {
        width: '100%',
        borderRadius: 24,
        backgroundColor: '#fff',
        overflow: 'hidden',
    },

    musicInner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: 17
    },

    btn: {
        width: 280,
        padding: 14,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: '#cd2027',
        position: 'absolute',
        bottom: height * 0.12
    },

    btnText: {
        fontSize: 18,
        fontWeight: '800',
        color: '#fff',
        lineHeight: 21.6
    },

})

export default Settings;