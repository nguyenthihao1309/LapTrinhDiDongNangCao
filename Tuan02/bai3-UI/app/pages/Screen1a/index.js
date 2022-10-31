import { StyleSheet, Image, View, Text, ImageBackground, TouchableOpacity } from "react-native";
import images from "../../assets";

function Screen1a({ navigation }) {
    return (
        <ImageBackground style={styles.screen1a} source={images.background1a}>
            <View style={styles.view1}>
                <Image style={styles.circle} source={images.circleScreen1a} />
                <Text style={styles.text1}>GROW {"\n"} YOUR BUSINESS</Text>
                <Text style={styles.text2}>We will help you to grow your business using online server</Text>
            </View>
            <View style={styles.viewButton}>
                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Screen1d') }}>
                    <Text style={styles.textButton}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Screen1e') }}>
                    <Text style={styles.textButton}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.text3}>HOW WE WORK?</Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    screen1a: {
        flex: 1,
    },
    view1: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'

    },
    circle: {
        width: 142,
        height: 142,
        marginTop: 69,
        marginBottom: 69,
    },
    text1: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '700',
        marginBottom: 50,
        fontFamily: 'Roboto'
    },
    text2: {
        fontSize: 15,
        fontWeight: '700',
        fontFamily: 'Roboto',
        marginLeft: 10,
        marginRight: 10,
        textAlign: 'center',
        marginBottom: 50
    },
    viewButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 30
    },
    button: {
        width: 125,
        height: 45,
        backgroundColor: '#E3C000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        fontSize: 18,
        fontWeight: "700"
    },
    text3: {
        fontSize: 18,
        fontWeight: "700",
        textAlign: "center"
    }

});

export default Screen1a;