import React, { useState, useCallback } from "react"
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView } from "react-native"
import { useFocusEffect } from "@react-navigation/native";
import artifacts from "../constants/artifacts";

const { height } = Dimensions.get('window');

const Artifacts = () => {
    const [index, setIndex] = useState(0);
    const [selectedFirst, setSelectedFirst] = useState(null);
    const [selectedSecond, setSelectedSecond] = useState(null);

    useFocusEffect(
        useCallback(() => {
            setIndex(0);
            setSelectedFirst(null);
            setSelectedSecond(null);
        }, [])
    );

    const handleSelection = (item) => {
        if(selectedFirst !== null && selectedSecond === null) {
            setSelectedSecond(item)
        } else if (selectedFirst === null) {
            setSelectedFirst(item)
        }
    };

    const handleNext = () => {
        if(index === 2) {
            setIndex(0);
        } else {
            setIndex((prevIndex) => (prevIndex + 1) % 3); 
        }
    };

    const correct = selectedFirst.pair === selectedSecond.image;

    return (
        <View style={styles.container}>

            {
                index === 0 && (
                    <View style={{width: '100%', alignItems: 'center', flexGrow: 1, justifyContent: 'center'}}>
                        <Image source={require('../assets/decor/logo.png')} style={styles.logo} />
                        <Text style={[styles.text, {marginBottom: 30}]}>Artifacts vs Modern Times! Choose an ancient artifact and find its modern counterpart. How have familiar objects changed over time? Compare the Egyptian scepter with a selfie stick 📱 or an ancient amulet with a modern talisman ✨. Discover how ancient inventions and symbols of power transformed into everyday items today. Embark on an exciting journey through the ages! ⏳</Text>
                        <View style={{width: '100%'}}>
                            <View style={[styles.line, {marginTop: 18, marginBottom: height * 0.15}]} />
                            <Image source={require('../assets/decor/loading.png')} style={{position: 'absolute', alignSelf: 'center', top: -11, width: 60, height: 60, padding: 5, backgroundColor: '#000', resizeMode: 'contain'}} />
                        </View>
                    </View>
                )
            }

            {
                index === 1 && (
                    <View style={{width: '100%', alignItems: 'center', flexGrow: 1}}>
                        <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft: -35}}>
                            <TouchableOpacity onPress={() => setSelectedFirst(null)}>
                                <Image source={selectedFirst ? selectedFirst.image : require('../assets/decor/cardholder.png')} style={styles.selectedCard} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setSelectedSecond(null)}>
                                <Image source={selectedSecond ? selectedSecond.image : require('../assets/decor/cardholder.png')} style={styles.selectedCard} />
                            </TouchableOpacity>
                        </View>
                        <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', flexWrap: 'wrap', marginBottom: height * 0.5, marginLeft: 95}}>
                            {
                                artifacts.map((item, index) => (
                                    <TouchableOpacity key={index} onPress={() => handleSelection(item)}>
                                        <Image source={item.image} style={[styles.card, (index !== 0 || index !== 4) && {marginLeft: -70}, (item === selectedFirst || item === selectedSecond) && {display: 'none'}]} />
                                    </TouchableOpacity>
                                ))
                            }
                            <View style={[styles.line, {marginTop: 10, zIndex: 10, marginLeft: -50}]} />
                        </View>
                    </View>
                )
            }

            {
                (index === 2 && selectedFirst !== null && selectedSecond !== null) && (
                    <View style={{width: '100%', alignItems: 'center', flexGrow: 1}}>
                        <Text style={styles.text}>{correct ? selectedFirst.description : 'You are wrong! Try again and find the correct pair.'}</Text>
                        <View style={[styles.line, {marginTop: 18, marginBottom: height * 0.15}]} />
                    </View>
                )
            }

            {
                (index !== 2 || (selectedFirst !== null && selectedSecond !== null)) && (
                    <TouchableOpacity style={[styles.btn, index === 1 && (!selectedFirst || !selectedSecond) && {opacity: 0.5}]} disabled={index === 1 && (!selectedFirst || !selectedSecond)} onPress={handleNext}>
                        <Text style={styles.btnText}>{index === 0 ? 'Step Through' : 'Check'}</Text>
                    </TouchableOpacity>    
                )
            }

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
        backgroundColor: '#000',
        paddingBottom: height * 0.12
    },

    title: {
        fontWeight: '800',
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 20
    },

    line: {
        width: '100%',
        height: 2,
        backgroundColor: '#cd2027',
    },

    text: {
        fontWeight: '500',
        fontSize: 16,
        color: '#fff',
        lineHeight: 21,
    },

    logo: {
        width: 162,
        height: 146,
        marginBottom: height * 0.1
    },

    btn: {
        width: 280,
        padding: 14,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: height * 0.12
    },

    btnText: {
        fontSize: 18,
        fontWeight: '800',
        color: '#000',
        lineHeight: 21.6
    },

    selectedCard: {
        width: 173,
        height: height * 0.26,
        resizeMode: 'contain',
        marginBottom: 50
    },

    card: {
        width: 144,
        height: height * 0.17,
        resizeMode: 'contain',
        marginBottom: 30,
        transform: [{ rotate: '-20deg' }],
        zIndex: 10
    },

    topicBtn: {
        width: 280,
        padding: 14,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        borderColor: '#fff',
        borderWidth: 2,
        marginBottom: 12
    },

    topicBtnText: {
        fontSize: 18,
        fontWeight: '800',
        color: '#fff',
        lineHeight: 21.6 
    }

})

export default Artifacts;