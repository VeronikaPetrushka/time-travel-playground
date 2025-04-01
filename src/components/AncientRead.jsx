import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView, ImageBackground } from "react-native"
import { useNavigation } from "@react-navigation/native";
import Icons from "./Icons";

const { height } = Dimensions.get('window');

const AncientRead = ({ topic, firstItem, secondItem  }) => {
    const navigation = useNavigation();

    const first = firstItem.items.find((item) => item.topic === topic.topic);
    const second = secondItem.items.find((item) => item.topic === topic.topic);

    console.log('topic: ', topic)
    console.log('firstItem: ', firstItem)
    console.log('secondItem: ', secondItem)
    console.log('first: ', first)
    console.log('second: ', second)

    return (
        <ImageBackground source={require('../assets/back/2.png')} style={{flex: 1}}>
            <View style={styles.container}>

                <TouchableOpacity style={styles.back} onPress={() => navigation.goBack('')}>
                    <Icons type={'back'} />
                </TouchableOpacity>

                <View style={{width: '100%', flexDirection: 'row', flexGrow: 1, justifyContent: 'space-between', alignItems: 'flex-start'}}>
                    <ScrollView style={{width: '50%'}}>
                        <Text style={styles.title}>{firstItem.name}</Text>
                        {first.description.map((desc, i) => (
                            <Text key={i} style={styles.text}>{desc}</Text>
                        ))}
                        <View style={{height: 100}} />
                    </ScrollView>
                    <ScrollView style={{width: '50%'}}>
                        <Text style={styles.title}>{secondItem.name}</Text>
                        {second.description.map((desc, i) => (
                            <Text key={i} style={styles.text}>{desc}</Text>
                        ))}
                        <View style={{height: 100}} />
                    </ScrollView>
                </View>

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
        paddingTop: height * 0.12,
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
        width: '85%'
    }

})

export default AncientRead;