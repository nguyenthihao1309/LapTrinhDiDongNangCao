import { View, StyleSheet } from "react-native";
import FlatList01 from "../components/FlatList01";
import Header from "../components/Header";

function Home() {
    return (
        <View style={styles.wrapper}>
            <Header />
            <FlatList01></FlatList01>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    }
});
export default Home;