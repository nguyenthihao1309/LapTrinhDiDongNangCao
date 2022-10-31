import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native"
import images from "../../assets";

function Tiki({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.com1}>
                <View style={styles.com1_top}>
                    <Image style={styles.image} source={images.book} />
                    <View style={styles.com1_top_right}>
                        <Text style={styles.textHT}>Nguyên hàm tích phân và ứng dụng</Text>
                        <Text style={styles.textHT}>Cung cấp bởi Tiki Trading</Text>
                        <Text style={[styles.textHT, styles.giaBan]}>141.800 đ</Text>
                        <Text style={[styles.textHT, styles.giaCu]}>141.800 đ</Text>
                        <View style={styles.com1_top_right_bottom}>
                            <View style={styles.viewButton1}>
                                <TouchableOpacity style={[styles.buttonSL, styles.tru]}>
                                    <Text>-</Text>
                                </TouchableOpacity>
                                <Text>1</Text>
                                <TouchableOpacity style={[styles.buttonSL, styles.cong]}>
                                    <Text>+</Text>
                                </TouchableOpacity>

                            </View>
                            <Text style={styles.textMuaSau}>Mua sau</Text>

                        </View>
                    </View>
                </View>

                <View style={styles.com1_center}>
                    <Text style={[styles.textCom1Center, styles.textGiamGia]}>Mã giảm giá đã lưu</Text>
                    <Text style={[styles.textCom1Center, styles.textXem]}>Xem tại đây</Text>
                </View>
                <View style={styles.com1_bottom}>
                    <TouchableOpacity style={[styles.buttonCom1Bottom, styles.buttonGiam]}>
                        <TouchableOpacity style={styles.recYellow}></TouchableOpacity>
                        <Text>Mã giảm giá</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.buttonCom1Bottom, styles.buttonApDung]}>
                        <Text style={styles.textApDung}>Áp dụng</Text>
                    </TouchableOpacity>

                </View>
            </View>

            <View style={styles.com2}>
                <Text style={styles.textCom2Den}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
                <Text style={styles.textCom2Xanh}>Nhập tại đây?</Text>
            </View>
            <View style={styles.com3}>
                <Text style={styles.textCom3Den}>Tạm tính</Text>
                <Text style={styles.textCom3Do}>141.800 đ</Text>
            </View>

            <View style={styles.com4}>
                <View style={styles.com4_top}>
                    <Text style={styles.textCom4Xam}>Thành Tiền</Text>
                    <Text style={styles.textCom4Do}>141.800 đ</Text>
                </View>

                <TouchableOpacity style={styles.buttonDatHang}>
                    <Text style={styles.textDatHang}>TIẾN HÀNH ĐẶT HÀNG</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#C4C4C4",

    },
    com1: {
        width: "100%",
        backgroundColor: "white",
        paddingVertical: 10
    },
    textHT: {
        fontSize: 12,
        fontWeight: "700"
    },
    giaBan: {
        color: "#EE0D0D",
        fontSize: 18,
        fontWeight: "700"
    },
    giaCu: {
        color: "#808080",
        textDecorationLine: "line-through"
    },
    com1_top: {
        flexDirection: "row",
        paddingHorizontal: 14
    },
    image: {
        width: 104,
        height: 127,
    },
    com1_top_right: {
        justifyContent: "space-around",
        paddingLeft: 5

    },
    com1_top_right_bottom: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    viewButton1: {
        width: "30%",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    buttonSL: {
        width: 20,
        height: 20,
        backgroundColor: "#C4C4C4",
        justifyContent: "center",
        alignItems: "center"
    },
    textMuaSau: {
        color: "#134FEC",
    },
    com1_center: {
        flexDirection: "row",
        paddingHorizontal: 14,
        marginTop: 10,
        justifyContent: "flex-start",
       
    },
    textCom1Center: {
        fontSize: 12,
        fontWeight: "700",
        marginRight: 15,

    },
    textGiamGia: {
        color: "#011627",
    },
    textXem: {
        color: "#134FEC",
    },
    com1_bottom: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20
    },
    buttonCom1Bottom: {
        borderRadius: 2,
        borderColor: "#808080",
        borderWidth: 1,
        borderStyle: "solid",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonGiam: {
        width: 208,
        height: 45,
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingLeft: 20
    },
    recYellow: {
        width: 32,
        height: 16,
        backgroundColor: "#F2DD1B",
        marginRight: 10
    },
    buttonApDung: {
        backgroundColor: "#0A5EB7",
        width: 99,
        height: 45,
        color: "while"
    },
    textApDung: {
        color: "white",
        fontSize: 20,
        fontWeight: "700"
    },
    com2: {
        width: "100%",
        flexDirection: "row",
        paddingTop: 15,
        paddingBottom: 15,
        paddingHorizontal: 8,
        marginTop: 20,
        backgroundColor: "white",
        justifyContent: "space-around"
    },
    textCom2Den: {
        color: "#011627",
        fontSize: 11,
        fontWeight: "700",

    },
    textCom2Xanh: {
        color: "#134FEC",
        fontSize: 11,
        fontWeight: "700",

    },
    com3: {
        width: "100%",
        flexDirection: "row",
        paddingTop: 15,
        paddingBottom: 15,
        paddingHorizontal: 12,
        marginTop: 20,
        backgroundColor: "white",
        justifyContent: "space-between"
    },
    textCom3Den: {
        color: "#011627",
        fontSize: 18,
        fontWeight: "700",

    },
    textCom3Do: {
        color: "#EE0D0D",
        fontSize: 18,
        fontWeight: "700",

    },
    com4: {
        width: "100%",
        backgroundColor: "white",
        alignItems: "center",
        position: "absolute",
        bottom: 0
    },
    com4_top: {
        width: "100%",
        flexDirection: "row",
        paddingTop: 15,
        paddingBottom: 15,
        marginBottom: 10,
        justifyContent: "space-between",
        paddingHorizontal: 15,
    },
    textCom4Xam: {
        color: "#808080",
        fontSize: 18,
        fontWeight: "700",
    },
    textCom4Do: {
        color: "#EE0D0D",
        fontSize: 18,
        fontWeight: "700",

    },
    buttonDatHang: {
        backgroundColor: "#E53935",
        width: 331,
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2
    },
    textDatHang: {
        color: "white",
        fontSize: 20,
        fontWeight: "700",

    }
});

export default Tiki;