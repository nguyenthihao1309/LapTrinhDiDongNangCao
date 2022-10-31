import { StyleSheet, Image, View, Text, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import images from "../../assets";

function Screen1b({navigation}) {
    return (
        <ImageBackground style={styles.container} source={images.background1b}>
            <Image style={styles.lock} source={images.lock} />
            <Text style={styles.textForget}>FORGET {"\n"} PASSWORD</Text>
            <Text style={styles.text2}>Provide your account’s email for which you want to reset your password</Text>
            <View>
                <Image style={ styles.imageEmail} source={images.email}/>
                <TextInput style={styles.inputEmail} placeholder="Email" />
            </View>
            <TouchableOpacity style={styles.buttonNext} onPress={()=>{navigation.navigate('Screen1c')}}>
                <Text style={styles.textNext}>NEXT</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    lock: {
        marginTop: 50,
        marginBottom: 30
    },
    textForget: {
        fontSize: 25,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 30
    },
    text2: {
        fontSize: 15,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 30
    },
    inputEmail: {
        position: "relative",
        width: 300,
        height: 45,
        backgroundColor: "#C4C4C4",
        marginBottom: 50,
        paddingStart: 50
    },
    imageEmail:{
        position: "absolute",
        zIndex: 1,
        top: 0,
        left: 0,
    },
    buttonNext: {
        width: 300,
        height: 45,
        backgroundColor: "#E3C000",
        justifyContent: "center"
    },
    textNext: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "700"
    }

});

export default Screen1b;