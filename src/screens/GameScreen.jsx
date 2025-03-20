import { View } from "react-native"
import Game from "../components/Game"
import Nav from "../components/Nav";

const GameScreen = () => {
    return (
        <View style={styles.container}>
            <Game />
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

export default GameScreen;