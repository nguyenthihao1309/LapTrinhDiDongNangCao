import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Image, Text, View, Button, TouchableOpacity } from "react-native";
import images from "../../assets";

function Screen1c() {
    return (
        <View style={StyleSheet.container}>
            <LinearGradient
                colors={['#D1F4F6', '#E5F4F5', '#00CCF9']}
                style={styles.background}
            >
                <Text style={styles.textCode}>CODE</Text>
                <Text style={styles.verification}>VERIFICATION</Text>
                <Text style={styles.text3}>Enter ontime password sent on {"\n"} ++849092605798</Text>
                <View style={styles.viewRectangle}>
                    <TouchableOpacity style={styles.rectangle}></TouchableOpacity>
                    <TouchableOpacity style={styles.rectangle}></TouchableOpacity>
                    <TouchableOpacity style={styles.rectangle}></TouchableOpacity>
                    <TouchableOpacity style={styles.rectangle}></TouchableOpacity>
                    <TouchableOpacity style={styles.rectangle}></TouchableOpacity>
                    <TouchableOpacity style={styles.rectangle}></TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>VERIFY CODE</Text>
                </TouchableOpacity>

            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    background: {
        alignItems: "center",
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        minHeight: 900,
    },
    textCode: {
        fontSize: 60,
        fontWeight: "700",
        marginTop: 113,
        marginBottom: 30
    },
    verification: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 30
    },
    text3: {
        fontSize: 15,
        fontWeight: "700",
        textAlign: "center"
    },
    viewRectangle: {
        width: 300,
        height: 50,
        marginTop: 30,
        flexDirection: 'row',
    },
    rectangle: {
        width: 50,
        height: 50,
        borderColor: "#000000",
        borderStyle: "solid",
        borderWidth: 1,
    },
    button: {
        backgroundColor: "#E3C000",
        width: 339,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50
    },
    textButton: {
        fontSize: 18,
        fontWeight: "700"
    }
});

export default Screen1c;