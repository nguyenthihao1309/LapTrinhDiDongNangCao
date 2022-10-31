import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity} from "react-native";
import { RadioButton } from 'react-native-paper';
import images from "../../assets";

function Screen1e() {
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>REGISTER</Text>
            <View style={styles.viewInput}>
                <TextInput style={styles.input} placeholder="Name" />
            </View>
            <View style={styles.viewInput}>
                <TextInput style={styles.input} placeholder="Phone" />
            </View>
            <View style={styles.viewInput}>
                <TextInput style={styles.input} placeholder="Email" />
            </View>
            <View style={styles.viewInput}>
                <Image style={styles.eyeIcon} source={images.eyeIcon} />
                <TextInput style={[styles.input, styles.password]} placeholder="Password" />
            </View>
            <View style={styles.viewInput}>
                <TextInput style={styles.input} placeholder="Birthday" />
            </View>
            <View style={styles.groupRadio}>
                <RadioButton
                    value="Male"
                    status="checked"/>
                <RadioButton
                    value="Female"/>
            </View>
            <TouchableOpacity style={styles.buttonLogin}>
                <Text style={styles.text2}>LOGIN</Text>
            </TouchableOpacity>
            <Text style={styles.text3}>When you agree to terms and conditions</Text>


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
        marginTop: 20,
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
    groupRadio:{
        flexDirection: "row"
    }
});
export default Screen1e;