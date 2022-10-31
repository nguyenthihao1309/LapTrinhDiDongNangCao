import { FlatList, StyleSheet, Text, View } from "react-native";

import flatListData from "../../../flatListData";
import FlatListItem01 from "../FlatListItem01";

function FlatList01() {
    return (
        <View style={styles.wrapper}>
            <FlatList
                data={flatListData}
                renderItem={
                    (item, index) => {
                        console.log(item);
                        return (
                            <FlatListItem01 item={item.item} index={index}></FlatListItem01>
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
    }
})

export default FlatList01;