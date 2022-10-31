import React, { useRef, useEffect } from "react";
import { Animated, Text, StyleSheet, SafeAreaView } from "react-native";

function Main() {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        fadeIn()
    });
    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 3000
        }).start();
    };

    return (
        <SafeAreaView style={styles.container}>
            <Animated.View
                style={[
                    styles.fadingContainer,
                    {
                        // Bind opacity to animated value
                        opacity: fadeAnim
                    }
                ]}
            >
                <Text style={styles.fadingText}>Welcome to Animation React Native!</Text>
            </Animated.View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    fadingContainer: {
        padding: 20,
        backgroundColor: "powderblue"
    },
    fadingText: {
        fontSize: 20
    },
    buttonRow: {
        flexBasis: 100,
        justifyContent: "space-evenly",
        marginVertical: 16
    }
});


export default Main;