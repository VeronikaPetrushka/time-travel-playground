import { View } from "react-native"
import Before from "../components/Before";

const BeforeScreen = () => {
    return (
        <View style={styles.container}>
            <Before />
        </View>
    )
}; 

const styles = {
    container: {
        width: "100%",
        height: "100%",
    }
}

export default BeforeScreen;