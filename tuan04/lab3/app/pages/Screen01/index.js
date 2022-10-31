import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import images from "../../assets/images";


function Screen01({ navigation, route }) {
    console.log(route)
    let urlImage = images.vsmartXanh
    if (route.params) {
        urlImage = route.params.url
    }


    return (
        <View style={styles.wrapper}>
            <View style={styles.viewImage}>
                <Image style={styles.image} source={urlImage} />
            </View>
            <View style={styles.viewContent}>
                <Text style={styles.contentTitle}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>

                <View style={styles.contentReview}>
                    <View style={styles.reviewStar}>
                        <Image source={images.star} />
                        <Image source={images.star} />
                        <Image source={images.star} />
                        <Image source={images.star} />
                        <Image source={images.star} />
                    </View>
                    <View style={styles.reviewDetails}>
                        <Text style={styles.detailText}>(Xem 828 đánh giá)</Text>
                    </View>

                </View>
                <View style={styles.contentPrice}>
                    <Text style={styles.priceNew}>1.790.000 đ</Text>
                    <Text style={styles.priceOld}>1.790.000 đ</Text>
                </View>
                <View style={styles.contentMore}>
                    <Text style={styles.moreText}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                    <Image style={styles.moreImage} source={images.ask}></Image>
                </View>
                <View style={styles.contentMoreColor}>
                    <TouchableOpacity
                        style={styles.buttonColor}
                        onPress={() => { navigation.navigate('Screen02') }}
                    >
                        <Text style={styles.textMoveColor}>4 MÀU-CHỌN MÀU</Text>
                        <AntDesign style={styles.iconMoveColor} name="right" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.contentSubmit}>
                    <TouchableOpacity style={styles.buttonSubmit}>
                        <Text style={styles.textSubmit}>CHỌN MUA</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    viewImage: {
        height: '50%',
        width: '100%',
        alignItems: "center",
        marginVertical: 10,
    },
    image: {
        width: 258,
        height: 319,
    },
    viewContent: {
        paddingHorizontal: 15,
        height: "50%"
    },
    contentTitle: {
        fontSize: 15,
        fontWeight: "400",
        fontStyle: "normal",
        lineHeight: 18,
        color: "#000000",

    },
    contentReview: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 3,
    },
    reviewStar: {
        width: "50%",
        flexDirection: "row",
    },
    reviewDetails: {
        width: "50%",
    },
    detailText: {
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 15,
        lineHeight: 18,
        color: "#000000"
    },
    contentPrice: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 3,
    },
    priceNew: {
        width: "50%",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 18,
        lineHeight: 21,
        color: "#000000",

    },
    priceOld: {
        width: "50%",
        textDecorationLine: "line-through",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 15,
        lineHeight: 18,
        color: "rgba(0,0,0,0.58)"
    },
    contentMore: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginVertical: 3,
    },
    moreText: {
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 12,
        lineHeight: 14,
        color: "#FA0000"
    },
    moreImage: {
        marginHorizontal: 5,
    },
    contentMoreColor: {
        marginVertical: 3,

    },
    buttonColor: {
        flexDirection: "row",
        alignItems: "center",
        width: 332,
        height: 34,
        borderColor: "rgba(0, 0, 0, 0.46)",
        borderWidth: 1,
        borderRadius: 10,
        borderStyle: "solid",
        justifyContent: "center",


    },
    textMoveColor: {
        width: "50%",
        textAlign: "center"
    },
    iconMoveColor: {
        position: "absolute",
        right: 10
    },
    contentSubmit: {
        width: "100%",
        position: "absolute",
        bottom: 40,
        marginLeft: 15,
    },
    buttonSubmit: {
        width: 326,
        height: 44,
        borderRadius: 10,
        backgroundColor: "rgba(238, 10, 10, 1)",
        borderColor: "rgba(202, 21, 54, 1)",
        borderWidth: 1,
        borderStyle: "solid",
        justifyContent: "center",
        alignItems: "center"
    },
    textSubmit: {
        fontWeight: "700",
        fontSize: 20,
        lineHeight: 24,
        color: "rgba(249, 242, 242, 1)"
    }
})

export default Screen01;