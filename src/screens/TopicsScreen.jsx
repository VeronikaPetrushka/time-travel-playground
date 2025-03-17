import { View } from "react-native"
import Topics from "../components/Topics"
import Nav from "../components/Nav";

const TopicsScreen = () => {
    return (
        <View style={styles.container}>
            <Topics />
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

export default TopicsScreen;