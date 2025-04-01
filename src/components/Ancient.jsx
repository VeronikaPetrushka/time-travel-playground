import React, { useState, useCallback } from "react"
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView, ImageBackground } from "react-native"
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import ancient from "../constants/ancient";

const { height, width } = Dimensions.get('window');

const Topics = () => {
    const navigation = useNavigation();
    const [index, setIndex] = useState(0);
    const [selectedFirst, setSelectedFirst] = useState(null);
    const [selectedSecond, setSelectedSecond] = useState(null);
    const [selectedTopic, setSelectedTopic] = useState(null);

    useFocusEffect(
        useCallback(() => {
            setIndex(0);
            setSelectedFirst(null);
            setSelectedSecond(null);
            setSelectedTopic(null);
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
        if(selectedTopic !== null && index === 2) {
            navigation.navigate('AncientReadScreen', {topic: selectedTopic, firstItem: selectedFirst, secondItem: selectedSecond})
        } else {
            setIndex((prevIndex) => (prevIndex + 1) % 3); 
        }
    };

    return (
        <ImageBackground source={require('../assets/back/2.png')} style={{flex: 1}}>
            <View style={styles.container}>

                {
                    index === 0 && (
                        <View style={{width: '100%', alignItems: 'center', flexGrow: 1, justifyContent: 'center'}}>
                            <Image source={require('../assets/decor/logo.png')} style={styles.logo} />
                            <Text style={[styles.text, {marginBottom: 30}]}>Step into a world where the past, present, and future intertwine! 🌍✨ Explore different eras 🏺🏰🏙️, compare technologies 🏗️📱🤖, cultures 🎭🎶📚, and social norms 🏛️⚖️👥 to see how the world has changed. Select a time period 🕰️ and embark on an exciting journey through time! 🔮</Text>
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
                            <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <TouchableOpacity onPress={() => setSelectedFirst(null)}>
                                    <Image source={selectedFirst ? selectedFirst.image : require('../assets/decor/cardholder.png')} style={styles.selectedCard} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setSelectedSecond(null)}>
                                    <Image source={selectedSecond ? selectedSecond.image : require('../assets/decor/cardholder.png')} style={styles.selectedCard} />
                                </TouchableOpacity>
                            </View>
                            <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', flexWrap: 'wrap', marginBottom: height * 0.5, marginLeft: 95}}>
                                {
                                    ancient.map((item, index) => (
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
                            <Text style={[styles.text, {textAlign: 'center', marginTop: height * 0.15, fontSize: 20, marginBottom: height * 0.05}]}>Now choose the parameters to begin your journey through the eras.</Text>
                            {
                                ancient[0].items.map((item, index) => (
                                    <TouchableOpacity key={index} style={[styles.topicBtn, selectedTopic === item && {backgroundColor: '#fff'}]} onPress={() => setSelectedTopic(item)}>
                                        <Text style={[styles.topicBtnText, selectedTopic === item && {color: '#000'}]}>{item.topic}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    )
                }

                {
                    (index !== 2 || (selectedFirst !== null && selectedSecond !== null) || selectedTopic) && (
                        <TouchableOpacity 
                            style={[styles.btn, 
                                index === 1 && (!selectedFirst || !selectedSecond) && {opacity: 0.5},
                                index === 2 && !selectedTopic && {opacity: 0.5

                                }]} 
                                disabled={index === 1 && (!selectedFirst || !selectedSecond) || index === 2 && !selectedTopic}
                                onPress={handleNext} 
                                >
                            <Text style={styles.btnText}>{index === 0 ? 'Step Through' : index === 1 ? 'Continue' : 'Find out'}</Text>
                        </TouchableOpacity>    
                    )
                }

            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 40,
        paddingTop: height * 0.07,
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
        marginBottom: height * 0.05
    },

    btn: {
        width: 280,
        padding: 14,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: height * 0.12,
        zIndex: 10
    },

    btnText: {
        fontSize: 18,
        fontWeight: '800',
        color: '#000',
        lineHeight: 21.6
    },

    selectedCard: {
        width: 173,
        height: height * 0.23,
        resizeMode: 'contain',
        marginBottom: 50
    },

    card: {
        width: 142,
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

export default Topics;