import { View, StyleSheet, FlatList, TextInput, TouchableOpacity, Text } from "react-native";
import { useState } from "react";
import FlatListItem from "../FlatListItem";


function Main() {
    const [action, setAction] = useState([]);
    const [text, setText] = useState('')
    const [error, setError] = useState('')
    const xoaAction = (index) => {
        setAction(action.filter((text, i) => i != index))
    }
    return (
        <View style={styles.wrapper}>
            <View style={styles.inputAction}>
                <TextInput style={styles.input}
                    placeholder="Nhập 1 cái gì đó"
                    onChangeText={e => { setText(e) }}
                    value={text}
                ></TextInput>
                <Text style={styles.textError}>{error}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        if (text) {
                            setAction(textOld => [...textOld, text])
                            setText('')
                            setError('')
                        } else {
                            setError('Vui lòng nhập dữ liệu.')
                        }
                    }}

                >
                    <Text style={styles.textButton}>Thêm</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={action}
                renderItem={
                    ({ item, index }) => {
                        console.log(item);
                        return (
                            <FlatListItem item={item} index={index} xoaAction={xoaAction}></FlatListItem>
                        )
                    }
                }
            >
            </FlatList>

        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    inputAction: {
        alignItems: "center",
        marginBottom: 20
    },
    input: {
        width: 300,
        height: 40,
        borderColor: "black",
        borderWidth: 1,
        marginVertical: 10,
        paddingLeft: 10,
        borderRadius: 4
    },
    button: {
        width: 100,
        height: 40,
        backgroundColor: "rgba(27, 169, 255, 1)",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4
    },
    textButton: {
        fontSize: 16,
        fontWeight: "700",
    },
    textError: {
        color: "red",
    }
})
export default Main;