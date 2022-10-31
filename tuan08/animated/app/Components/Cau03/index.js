import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, SafeAreaView, Easing, TouchableOpacity } from "react-native";

function Cau03() {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const startRun = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: false
        }).start();
    };
    const stopRun = () => {
        Animated.timing(fadeAnim).stop()
    }
    const resetRun = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            easing: Easing.linear,
            useNativeDriver: false
        }).start();
    }

    const marginLeft = fadeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 300]
    })

    return (
        <SafeAreaView style={styles.container}>
            <Animated.View
                style={{
                    marginLeft,
                    height: 50,
                    width: 50,
                    backgroundColor: 'red'
                }} />

            <View style={styles.buttonRow}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={startRun}
                >
                    <Text style={styles.textGe}>Start</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={stopRun}
                >
                    <Text style={styles.textGe}>Stop</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={resetRun}
                >
                    <Text style={styles.textGe}>Reset</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 5
    },
    fadingContainer: {
        padding: 20,
        backgroundColor: "powderblue"
    },
    fadingText: {
        fontSize: 20
    },
    buttonRow: {
        position: "absolute",
        bottom: 20,
        width: "100%",
        paddingHorizontal: 20
    },
    button: {
        marginTop: 15,
        height: 40,
        backgroundColor: "#6699ff",
        justifyContent: "center",
        alignItems: "center"
    },
    textGe: {
        fontSize: 22,
        color: "white"
    }
});

export default Cau03;