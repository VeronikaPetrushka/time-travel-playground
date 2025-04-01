import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView, ImageBackground } from "react-native"
import { useNavigation } from "@react-navigation/native";
import Icons from "./Icons";

const { height } = Dimensions.get('window');

const Read = ({ item }) => {
    const navigation = useNavigation();

    return (
        <ImageBackground source={require('../assets/back/2.png')} style={{flex: 1}}>
            <View style={styles.container}>

                <TouchableOpacity style={styles.back} onPress={() => navigation.goBack('')}>
                    <Icons type={'back'} />
                </TouchableOpacity>

                <Image source={item.image} style={styles.image} />

                <ScrollView style={{width: '100%'}}>
                    <Text style={styles.text}>{item.description}</Text>
                    <View style={{height: 100}} />
                </ScrollView>

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
    },

    back: {
        width: 23,
        height: 20,
        position: 'absolute',
        top: height * 0.07,
        left: 40
    },

    title: {
        fontWeight: '800',
        fontSize: 20,
        color: '#fff',
        marginBottom: 35
    },

    text: {
        fontWeight: '500',
        fontSize: 16,
        color: '#fff',
        lineHeight: 21,
    },

    image: {
        width: 173,
        height: 257,
        resizeMode: 'contain',
        marginBottom: 35
    },

})

export default Read;