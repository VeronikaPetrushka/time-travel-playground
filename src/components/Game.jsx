import React, { useState, useCallback } from "react"
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, Modal } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from "@react-navigation/native";
import game from "../constants/game";
import Icons from "./Icons";

const { height } = Dimensions.get('window');

const Game = () => {
    const [index, setIndex] = useState(0);
    const [points, setPoints] = useState(0);
    const [selectedLevel, setSelectedLevel] = useState(game[0]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [unlockedLevels, setUnlockedLevels] = useState({ '1': true });
    const [purchasedLevels, setPurchasedLevels] = useState({});

    const loadGameData = async () => {
        const storedPoints = await AsyncStorage.getItem('points');
        const storedLevels = await AsyncStorage.getItem('unlockedLevels');
        const storedPurchases = await AsyncStorage.getItem('purchasedLevels');
        if (storedPoints) setPoints(JSON.parse(storedPoints));
        if (storedLevels) setUnlockedLevels(JSON.parse(storedLevels));
        if (storedPurchases) setPurchasedLevels(JSON.parse(storedPurchases));
    };

    useFocusEffect(
        useCallback(() => {
            loadGameData();
            setIndex(0);
            setSelectedItems([]);
            setIsCorrect(false);
        }, [])
    );

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % 3); 
    };

    const handleItemSelect = (item) => {
        if (!selectedItems.includes(item) && selectedItems.length < selectedLevel.correct.length) {
            setSelectedItems([...selectedItems, item]);
        }
    };

    const handleItemUnselect = (item) => {
        if (selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter(selected => selected !== item));
        }
    };    

    const checkSelection = async () => {
        const correctItems = selectedLevel.correct;
        const isCorrect = correctItems.every(item => selectedItems.includes(item)) && selectedItems.length === correctItems.length;
        setIsCorrect(isCorrect);
        setModalVisible(true);
        
        if (isCorrect) {
            const newPoints = points + 20;
            setPoints(newPoints);
            await AsyncStorage.setItem('points', JSON.stringify(newPoints));
            unlockNextLevel();
        }
    };

    const unlockNextLevel = async () => {
        const currentIndex = game.findIndex(level => level.level === selectedLevel.level);
        if (currentIndex < game.length - 1) {
            const nextLevel = game[currentIndex + 1].level;
            const updatedLevels = { ...unlockedLevels, [nextLevel]: true };
            setUnlockedLevels(updatedLevels);
            await AsyncStorage.setItem('unlockedLevels', JSON.stringify(updatedLevels));
        }
    };

    const purchaseLevel = async (level) => {
        if (points >= level.points && !purchasedLevels[level.level]) {
            const updatedPoints = points - level.points;
            setPoints(updatedPoints);
            await AsyncStorage.setItem('points', JSON.stringify(updatedPoints));
            
            const updatedPurchases = { ...purchasedLevels, [level.level]: true };
            setPurchasedLevels(updatedPurchases);
            await AsyncStorage.setItem('purchasedLevels', JSON.stringify(updatedPurchases));
        }
    };

    const handleGameOver = () => {
        setIndex(1);
        setSelectedItems([]);
        setIsCorrect(false);
        setModalVisible(false);
    }

    return (
        <View style={styles.container}>

            {
                index !== 0 && (
                    <View style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end'}}>
                        <Text style={styles.points}>{points}</Text>
                        <View style={{width: 26, height: 26, marginLeft: 10}}>
                            <Icons type={'points'} />
                        </View>
                    </View>    
                )
            }

            {
                index === 0 && (
                    <View style={{width: '100%', alignItems: 'center', flexGrow: 1, justifyContent: 'center'}}>
                        <Image source={require('../assets/decor/logo.png')} style={styles.logo} />
                        <Text style={[styles.text, {marginBottom: 30}]}>🖐️🔀 Drag each artifact to the correct time period** 🏺⏳ and see how history evolves! 🔄📜 Can you place them all correctly? ✅ Test your knowledge 🧠 and explore the past in a fun 🎮 and interactive way! 🚀🔎</Text>
                        <View style={{width: '100%'}}>
                            <View style={[styles.line, {marginTop: 18, marginBottom: height * 0.15}]} />
                            <Image source={require('../assets/decor/loading.png')} style={{position: 'absolute', alignSelf: 'center', top: -11, width: 60, height: 60, padding: 5, backgroundColor: '#000', resizeMode: 'contain'}} />
                        </View>
                    </View>
                )
            }

            {
                index === 1 && (
                    <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', flexWrap: 'wrap'}}>
                        {
                            game.map((item, index) => (
                                <View key={index} style={{marginBottom: height * 0.05, alignItems: 'center'}}>
                                    <TouchableOpacity 
                                        style={[styles.levelBtn, selectedLevel.level === item.level && unlockedLevels[item.level] && purchasedLevels[item.level] && {backgroundColor: '#cd2027'}]} 
                                        onPress={() => unlockedLevels[item.level] && purchaseLevel(item) && setSelectedLevel(item)}
                                        disabled={!unlockedLevels[item.level] || points < item.points}
                                        >
                                        <Text style={[styles.levelBtnText, selectedLevel.level === item.level && unlockedLevels[item.level] && purchasedLevels[item.level] && {color: '#fff'}]}>{item.level}</Text>
                                    </TouchableOpacity>
                                    {
                                        !purchasedLevels[item.level] && !item[0] && (
                                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                <Text style={styles.points}>{item.points}</Text>
                                                <View style={{width: 26, height: 26, marginLeft: 10}}>
                                                    <Icons type={'points'} />
                                                </View>
                                            </View>       
                                        )
                                    }
                                </View>
                            ))
                        }
                        <View style={{width: '100%'}}>
                            <View style={[styles.line, {marginTop: 30}]} />
                            <Image source={require('../assets/decor/loading.png')} style={{position: 'absolute', alignSelf: 'center', top: 0, width: 60, height: 60, padding: 5, backgroundColor: '#000', resizeMode: 'contain'}} />
                        </View>
                    </View>
                )
            }

            {
                (index === 0 || index === 1) && (
                    <TouchableOpacity style={[styles.btn, !selectedLevel && {opacity: 0.5}]} disabled={!selectedLevel} onPress={handleNext}>
                        <Text style={styles.btnText}>{index === 0 ? 'Time to play' : 'Let`s go'}</Text>
                    </TouchableOpacity>        
                )
            }

            {index === 2 && (
                <View style={styles.gameContainer}>
                    <View style={styles.itemsContainer}>
                        {selectedLevel.items.map((item, idx) => (
                            <TouchableOpacity key={idx} onPress={() => handleItemSelect(item)}>
                                <Image source={item} style={styles.itemImage} />
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={styles.selectedItemsContainer}>
                        {selectedItems.map((item, idx) => (
                            <TouchableOpacity key={idx} onPress={() => handleItemUnselect(item)}>
                                <Image key={idx} source={item} style={styles.itemImage} />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            )}

            {index === 2 && (
                <TouchableOpacity style={styles.btn} onPress={checkSelection}>
                    <Text style={styles.btnText}>Check</Text>
                </TouchableOpacity>
            )}

            <Modal 
                visible={modalVisible} 
                transparent={true}
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
                >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>{isCorrect ? selectedLevel.text : "❌ Time glitch detected! Try again!"}</Text>
                        <Image source={require('../assets/decor/game.png')} style={{width: 160, height: height * 0.2, resizeMode: 'contain', marginVertical: 30}} />
                        <TouchableOpacity style={styles.modalBtn} onPress={handleGameOver}>
                            <Text style={styles.modalBtnText}>Back to start</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

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

    levelBtn: {
        width: 100,
        height: 100,
        borderRadius: 8,
        backgroundColor: '#898686',
        marginBottom: 11,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20
    },

    levelBtnText: {
        fontSize: 48,
        fontWeight: '800',
        color: '#000',
    },

    points: {
        fontSize: 16,
        fontWeight: '800',
        color: '#cd2027',
        lineHeight: 21
    },

    gameContainer: { 
        alignItems: 'center', 
        justifyContent: 'center',
        width: '100%'
    },

    itemsContainer: { 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%'
    },

    selectedItemsContainer: { 
        marginTop: height * 0.1, 
        flexDirection: 'row',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
        width: '100%',
        minHeight: 110,
        flexWrap: 'wrap'
    },

    itemImage: { 
        width: 50,
        height: 50, 
        margin: 10,
        resizeMode: 'contain'
    },

    modalContainer: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'rgba(0,0,0,0.5)' 
    },

    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 20,
        alignItems: 'center'
    },
    
    modalText: { 
        color: '#000', 
        fontSize: 24, 
        fontWeight: '700',
        textAlign: 'center'
    },
    
    modalBtn: { 
        paddingVertical: 15, 
        paddingHorizontal: 22,
        backgroundColor: '#000', 
        borderRadius: 8 
    },
    
    modalBtnText: { 
        color: '#fff', 
        fontSize: 18,
        fontWeight: '800'
    },

})

export default Game;