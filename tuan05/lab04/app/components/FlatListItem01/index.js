import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"
import images from "../../assets/images";
function FlatListItem01({ item, index }) {
    return (
        <View style={styles.wrapper}>
            <View style={styles.viewImage}>
                <Image style={styles.imageSp} source={{ uri: item.photo }} />
            </View>
            <View style={styles.viewContent}>
                <Text style={styles.contentTitle}>{item.name}</Text>
                <Text style={styles.contentSecond}>{item.email}</Text>

            </View>
            <View style={styles.viewButton}>
                <TouchableOpacity style={styles.buttonChat}>
                    <Text style={styles.textChat}>Chat</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#f9c2ff",
        height: 80,
        width: 360,
        marginHorizontal: 3,
        marginVertical: 3
    },
    viewImage: {
        width: 80,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 3

    },
    imageSp: {
        width: 74,
        height: 74,
    },
    viewContent: {
        width: 180,
        alignItems: "flex-start",
        paddingHorizontal: 10
    },
    contentTitle: {
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "700",

    },
    contentSecond: {
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "400",
    },
    viewButton: {
        width: 100,
        position: "absolute",
        right: 5,
        alignItems: "center",
        justifyContent: "center"

    },
    buttonChat: {
        width: 88,
        height: 38,
        backgroundColor: "rgba(243, 17, 17, 1)",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20

    },
    textChat: {
        color: "rgba(255, 255, 255, 1)",
        fontSize: 18,
        fontWeight: "700",


    }
})
export default FlatListItem01;