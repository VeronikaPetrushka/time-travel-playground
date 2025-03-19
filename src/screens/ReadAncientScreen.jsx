import { View } from "react-native"
import AncientRead from "../components/AncientRead"
import Nav from "../components/Nav";

const AncientReadScreen = ({ route }) => {
    const { topic, firstItem, secondItem } = route.params;
    return (
        <View style={styles.container}>
            <AncientRead topic={topic} firstItem={firstItem} secondItem={secondItem} />
            <View style={styles.nav}>
                <Nav />
            </View>
        </View>
    )
}; 

const styles = {
    container: {
        width: "100%",
        height: "100%",
    },
    nav: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        zIndex: 10
    }
}

export default AncientReadScreen;