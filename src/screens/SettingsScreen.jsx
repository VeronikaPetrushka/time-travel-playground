import { View } from "react-native"
import Settings from "../components/Settings"
import Nav from "../components/Nav";

const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Settings />
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

export default SettingsScreen;