import React, { useRef, useEffect } from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView, Easing } from "react-native";

function Cau02() {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: false
        }).start();
    };

    const marginLeft = fadeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 300]
    })

    return (
        <SafeAreaView style={styles.container}>
            <Animated.View
                style={{
                    marginLeft,
                    height: 30,
                    width: 40,
                    backgroundColor: 'red'
                }} />

            <View style={styles.buttonRow}>
                <Button
                style={{width:100}}
                 title="Fade In View" onPress={fadeIn} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        marginVertical: 16,
        position:"absolute",
        bottom:20,
        width:"100%"
    }
});

export default Cau02;