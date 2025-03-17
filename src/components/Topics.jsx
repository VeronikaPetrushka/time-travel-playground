import React, { useState, useCallback } from "react"
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView } from "react-native"
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import topics from "../constants/topics";

const { height } = Dimensions.get('window');

const Topics = () => {
    const navigation = useNavigation();
    const [index, setIndex] = useState(0);
    const [selected, setSelected] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    useFocusEffect(
        useCallback(() => {
            setIndex(0);
            setSelected(null);
            setSelectedItem(null);
        }, [])
    );

    const handleNext = () => {
        if(selectedItem !== null && index === 2) {
            navigation.navigate('ReadScreen', {item: selectedItem})
        } else {
            setIndex((prevIndex) => (prevIndex + 1) % 3); 
        }
    };

    return (
        <View style={styles.container}>

            {
                index === 0 && (
                    <View style={{width: '100%', alignItems: 'center', flexGrow: 1, justifyContent: 'center'}}>
                        <Image source={require('../assets/decor/logo.png')} style={styles.logo} />
                        <Text style={[styles.text, {marginBottom: 30}]}>📝 The immersion in history begins here. Explore the greatest eras, discover key events and achievements of humanity, and learn how culture, daily life, and worldviews evolved. 🏛️🗝️ Text materials, illustrations 🎨, and interactive elements will help you view the past in a new light. 🔍🕰️</Text>
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
                        <TouchableOpacity onPress={() => setSelected(null)}>
                            <Image source={selected ? selected.image : require('../assets/decor/cardholder.png')} style={styles.selectedCard} />
                        </TouchableOpacity>
                        <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', flexWrap: 'wrap', marginBottom: height * 0.5, marginLeft: 95}}>
                            {
                                topics.map((topic, index) => (
                                    <TouchableOpacity key={index} onPress={() => setSelected(topic)}>
                                        <Image source={topic.image} style={[styles.card, (index !== 0 || index !== 4) && {marginLeft: -70}, topic === selected && {display: 'none'}]} />
                                    </TouchableOpacity>
                                ))
                            }
                            <View style={[styles.line, {marginTop: 10, zIndex: 10, marginLeft: -50}]} />
                        </View>
                    </View>
                )
            }

            {
                (index === 2 && selected !== null) && (
                    <View style={{width: '100%', alignItems: 'center', flexGrow: 1}}>
                        <TouchableOpacity onPress={() => setSelectedItem(null)}>
                            <Image source={selectedItem ? selectedItem.image : require('../assets/decor/cardholder.png')} style={styles.selectedCard} />
                        </TouchableOpacity>
                        <Text style={styles.title}>{selectedItem ? selectedItem.name : selected.name}</Text>
                        {
                            !selectedItem && (
                                <View style={[styles.line, {zIndex: 10, marginBottom: 50}]} />
                            )
                        }
                        <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', marginLeft: 70, marginTop: 20}}>
                            {
                                selected.items.map((item, index) => (
                                    <TouchableOpacity key={index} onPress={() => setSelectedItem(item)}>
                                        <Image source={item.image} style={[styles.card, (index !== 0 || index !== 4) && {marginLeft: -70}, item === selectedItem && {display: 'none'}]} />
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    </View>
                )
            }

            {
                (index === 0 || selected !== null) && (
                    <TouchableOpacity style={styles.btn} onPress={handleNext}>
                        <Text style={styles.btnText}>{index === 0 ? 'Step Through' : index === 1 ? 'Commence' : 'Witness'}</Text>
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
        alignSelf: 'center',
        marginBottom: 50
    },

    card: {
        width: 144,
        height: height * 0.17,
        resizeMode: 'contain',
        marginBottom: 30,
        transform: [{ rotate: '-20deg' }],
        zIndex: 10
    }

})

export default Topics;