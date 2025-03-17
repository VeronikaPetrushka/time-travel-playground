import React, { useEffect, useState } from 'react';
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icons from './Icons';

const Menu = () => {
    const navigation = useNavigation();
    const [activeButton, setActiveButton] = useState('TopicsScreen');

    const handleNavigate = (screen) => {
        setActiveButton(screen);
        navigation.navigate(screen)
    };    

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            const currentRoute = navigation.getState().routes[navigation.getState().index].name;
            setActiveButton(currentRoute);
        });

        return unsubscribe;
    }, [navigation]);

    return (
        <View style={styles.container}>

            <TouchableOpacity 
                style={styles.button} 
                onPress={() => handleNavigate('ArtifactsScreen')}>
                <Icons type={'1'} active={activeButton === 'ArtifactsScreen'}/>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button} 
                onPress={() => handleNavigate('ArtifactsScreen')}>
                <Icons type={'2'} active={activeButton === 'ArtifactsScreen'}/>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button} 
                onPress={() => handleNavigate('TopicsScreen')}>
                <Icons type={'3'} active={activeButton === 'TopicsScreen'}/>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button} 
                onPress={() => handleNavigate('AncientScreen')}>
                <Icons type={'4'} active={activeButton === 'AncientScreen'}/>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button} 
                onPress={() => handleNavigate('SettingsScreen')}>
                <Icons type={'5'} active={activeButton === 'SettingsScreen'}/>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: 'center',
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 50
    },
    
    button: {
        width: 37,
        height: 37,
    },

});

export default Menu;
