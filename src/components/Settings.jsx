import React, { useState } from "react"
import { View, Text, TouchableOpacity, Alert, StyleSheet, Dimensions, Switch, Image } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMusic } from '../constants/music.js';

const { height } = Dimensions.get('window');

const Settings = () => {
    const { isPlaying, togglePlay } = useMusic();
    const [vibro, setVibro] = useState(true);

    const resetProgress = async () => {
        try {
            await AsyncStorage.removeItem("profile");
            Alert.alert("Success", "All game data has been reset.");
        } catch (error) {
            console.error("Failed to reset progress", error);
            Alert.alert("Error", "Failed to reset data.");
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

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Reset Progress</Text>
            </TouchableOpacity>    

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 40,
        paddingTop: height * 0.07,
        backgroundColor: '#000',
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