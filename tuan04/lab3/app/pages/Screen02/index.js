import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useState } from "react";

import images from "../../assets/images";


function Screen02({ navigation }) {
    const [sanPham, setSanPham] = useState({ url: images.vsmartXanh, color: "Xanh" })

    return (
        <View style={styles.wrapper}>
            <View style={styles.viewInfo}>
                <View style={styles.infoImage}>
                    <Image style={styles.imageMain} source={sanPham.url} />
                </View>
                <View style={styles.infoText}>
                    <Text style={styles.textTitle}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
                    <View style={styles.viewTextColor}>
                        <Text style={styles.textNormal}>Màu: </Text>
                        <Text style={styles.textColor}>{sanPham.color}</Text>
                    </View>
                    <View style={styles.viewTextProvider}>
                        <Text style={styles.textNormal}>Cung cấp bởi: </Text>
                        <Text style={styles.textProvider}>Tiki</Text>
                    </View>
                    <Text style={styles.textPrice}>1.790.000 đ</Text>
                </View>
            </View>
            <View style={styles.viewColor}>
                <Text style={styles.textNotify}>Chọn một màu bên dưới:</Text>
                <View style={styles.groupButton}>
                    <TouchableOpacity
                        style={[styles.buttonColor, styles.buttonWhite]}
                        onPress={() => { setSanPham({ url: images.vsmartBac, color: "Bạc" }) }}
                    ></TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttonColor, styles.buttonRed]}
                        onPress={() => { setSanPham({ url: images.vsmartDo, color: "Đỏ" }) }}
                    ></TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttonColor, styles.buttonBlack]}
                        onPress={() => { setSanPham({ url: images.vsmarDen, color: "Đen" }) }}
                    ></TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttonColor, styles.buttonBlue]}
                        onPress={() => { setSanPham({ url: images.vsmartXanh, color: "Xanh" }) }}
                    ></TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.buttonSubmit}
                    onPress={() => { navigation.navigate('Screen01', { url: sanPham.url }) }}
                >
                    <Text style={styles.textSubmit}>XONG</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    viewInfo: {
        flexDirection: "row",
        height: "20%"
    },
    infoImage: {
        width: "35%",
        paddingVertical: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    imageMain: {
        width: 119,
        height: 126,
    },
    infoText: {
        width: "65%",
        paddingHorizontal: 5,
        justifyContent: "space-evenly"
    },
    textTitle: {
        fontWeight: "400",
        fontStyle: "normal",
        fontSize: 15,
        lineHeight: 18,
        color: "rgba(0, 0, 0, 1)"
    },
    textNormal: {
        fontWeight: "400",
        fontStyle: "normal",
        fontSize: 15,
        lineHeight: 18,
        color: "rgba(0, 0, 0, 1)"
    },
    viewTextColor: {
        flexDirection: "row",
    },
    textColor: {
        fontWeight: "700",
        fontSize: 15,
        lineHeight: 18,

    },
    viewTextProvider: {
        flexDirection: "row",
    },
    textProvider: {
        fontWeight: "700",
        fontSize: 15,
        lineHeight: 18,
    }, textPrice: {
        fontWeight: "700",
        fontSize: 18,
        lineHeight: 22,
    },
    viewColor: {
        height: "80%",
        backgroundColor: "rgba(196, 196, 196, 1)",
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
    textNotify: {
        fontWeight: "400",
        fontStyle: "normal",
        fontSize: 18,
        lineHeight: 22,
        color: "rgba(0, 0, 0, 1)",
    },
    groupButton: {
        alignItems: "center"

    },
    buttonColor: {
        width: 85,
        height: 80,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        margin: 5

    },
    buttonWhite: {
        backgroundColor: "rgba(197, 241, 251, 1)"

    },
    buttonRed: {
        backgroundColor: "rgba(243, 13, 13, 1)"

    },
    buttonBlack: {
        backgroundColor: "rgba(0, 0, 0, 1)"

    },
    buttonBlue: {
        backgroundColor: "rgba(35, 72, 150, 1)"

    },
    buttonSubmit: {
        position: "absolute",
        bottom: 30,
        width: 326,
        height: 44,
        backgroundColor: "rgba(25, 82, 226, 0.58)",
        borderColor: "rgba(202, 21, 54, 1)",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 15
    },
    textSubmit: {
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 20,
        lineHeight: 23,
        color: "#F9F2F2"

    }
})
export default Screen02;