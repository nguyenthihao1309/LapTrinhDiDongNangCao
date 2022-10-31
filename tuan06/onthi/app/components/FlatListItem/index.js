import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

function FlatListItem({ item, index, xoaAction }) {
    return (
        <View style={styles.wrapper}>
            <View style={styles.stt}>
                <Text style={styles.text}>{index + 1}</Text>
            </View>

            <Text style={styles.text}>{item}</Text>
            <TouchableOpacity
                style={styles.buttonDelete}
                onPress={() => xoaAction(index)}
            >
                <Text style={styles.textDelete}>Xóa</Text>
            </TouchableOpacity>
        </View >);
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: "row",
        width: "100%",
        height: 50,
        alignItems: "center",
        borderColor: "rgba(27, 169, 255, 1)",
        borderWidth: 1,
        marginVertical: 2,
        marginHorizontal: 2,
        borderRadius: 4
    },
    stt: {
        width: 40,
        height: 30,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 2,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        marginRight: 10
    },
    text: {
        fontSize: 14,
        fontWeight: "700",
    },
    textDelete: {
        color: "white"
    },
    buttonDelete: {
        position: "absolute",
        right: 15,
        width: 70,
        height: 30,
        alignItems: "center",
        backgroundColor: "red",
        borderRadius: 5,
        justifyContent: "center"
    }
})


export default FlatListItem;