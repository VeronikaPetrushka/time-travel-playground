import { View } from "react-native"
import Ancient from "../components/Ancient"
import Nav from "../components/Nav";

const AncientScreen = () => {
    return (
        <View style={styles.container}>
            <Ancient />
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

export default AncientScreen;