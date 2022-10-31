import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from "react-native";
import images from "../../assets";

function Screen1d({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>LOGIN</Text>
            <View style={styles.viewInput}>
                <TextInput style={styles.input} placeholder="Email" />
            </View>
            <View style={styles.viewInput}>
                <Image style={styles.eyeIcon} source={images.eyeIcon} />
                <TextInput style={[styles.input, styles.password]} placeholder="Password" />
            </View>
            <TouchableOpacity style={styles.buttonLogin}>
                <Text style={styles.text2}>LOGIN</Text>
            </TouchableOpacity>
            <Text style={styles.text3}>When you agree to terms and conditions</Text>
            <Text style={styles.text4}  onPress={() => { navigation.navigate('Screen1b') }}>For got your password?</Text>
            <Text style={styles.text5}>Or login with</Text>
            <View style={styles.viewButton}>
                <TouchableOpacity style={[styles.buttonXH, styles.buttonfb]}>
                    <Image style={styles.iconFacebook} source={images.iconFacebook} />

                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonXH, styles.buttonzl]}>
                    <Image style={styles.iconZalo} source={images.iconZalo} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonXH, styles.buttongg]}>
                    <Image style={styles.iconGoogle} source={images.iconGoogle} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "rgba(49, 170, 82, 0.19)",
    },
    text1: {
        fontSize: 25,
        marginTop: 40,
        fontWeight: "700",
        marginBottom: 60,
    },
    input: {
        width: 330,
        height: 54,
        backgroundColor: "rgba(196, 196, 196, 0.3)",
        paddingLeft: 20,
        fontSize: 18,
    },
    viewInput: {
        height: 54,
        marginBottom: 20,
        justifyContent: "center"
    },
    password: {
        position: "relative",
        paddingLeft: 20,
    },
    eyeIcon: {
        width: 38,
        height: 36,
        position: "absolute",
        zIndex: 1,
        right: 20,
    },
    buttonLogin: {
        width: 330,
        height: 45,
        backgroundColor: "#E53935",
        borderRadius: 2,
        marginTop: 40,
        justifyContent: "center",
    },
    text2: {
        fontSize: 25,
        fontWeight: "700",
        color: "white",
        textAlign: "center"

    },
    text3: {
        marginTop: 15,
        fontSize: 14,
    },
    text4: {
        marginTop: 15,
        fontSize: 14,
        color: "#5D25FA"
    },
    text5: {
        marginTop: 15,
        fontSize: 14,
    },
    viewButton: {
        width: 330,
        flexDirection: "row",
        marginTop: 50
    },
    buttonXH: {
        flex: 1,
        height: 45,
        borderColor: "#0680F1",
        borderStyle: "solid",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2,
    },
    buttonfb: {
        backgroundColor: "#25479B"
    },
    buttonzl: {
        backgroundColor: "#0F8EE0"
    }
    , buttongg: {
        backgroundColor: "transparent"
    }
});

export default Screen1d;