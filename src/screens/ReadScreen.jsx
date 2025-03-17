import { View } from "react-native"
import Read from "../components/Read"
import Nav from "../components/Nav";

const ReadScreen = ({ route }) => {
    const { item } = route.params;
    return (
        <View style={styles.container}>
            <Read item={item} />
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

export default ReadScreen;