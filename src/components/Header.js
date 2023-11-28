import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, StatusBar, Image } from "react-native";
import CustomTextInput from "./CustomTextInput";
import { appColors } from "../util/AppColors";
const Header = ({ pagename, Textname }) => {
    return (
        <View style={{ backgroundColor: "white" }}>
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <View style={styles.container1}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.st1}>
                            <Image source={require('../../assets/map.png')}
                                style={{
                                    width: 24,
                                    height: 24,
                                }}
                            />
                            <Text style={styles.map}>Gujranwala</Text>
                        </View>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            left: 75
                        }}>
                            <Text style={styles.guest}>Hi,Guest</Text>
                            <Image source={require('../../assets/userprofile.png')}
                                style={{
                                    width: 24,
                                    height: 24,
                                    left: 10
                                }}
                            />
                        </View>
                    </View>
                    <Image
                        source={require('../../assets/arrow-left-line.png')}
                        style={{
                            height: 28,
                            width: 28,
                            marginLeft: 20,
                            marginTop: 20
                        }}
                    />
                    <Text style={styles.font}>{pagename}</Text>
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.container3}>
                    <Text style={styles.acfont}>{Textname}</Text>
                    <CustomTextInput />
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.secondary
    },
    container1: {
        height: 190,
        backgroundColor: appColors.primary,
        borderBottomRightRadius: 60,
        width: 430,

    },
    container2: {
        backgroundColor: appColors.primary,
        height: 750,
        width: 430,
        top: 190,
    },
    container3: {
        backgroundColor: appColors.secondary,
        height: 750,
        width: 430,
        //top: 190,
        borderTopLeftRadius: 80
    },
    font: {
        fontSize: 30,
        color: appColors.secondary,
        width: 241,
        height: 72,
        top: 10,
        left: 74,
        fontWeight: appColors.bold,
        lineHeight: 45,
    },
    acfont: {
        flexWrap: 'wrap',
        width: 248,
        height: 150,
        top: 70,
        left: 25,
        fontSize: 50,
        fontWeight: '600',
    },
    guest: {
        color: appColors.secondary,
        lineHeight: 18.15,
        fontSize: 15,
        fontWeight: appColors.normal,
        textAlign: 'right'
    },
    map: {
        fontWeight: appColors.normal,
        fontSize: 15,
        lineHeight: 18.15,
        color: appColors.secondary
    },
    st1: {
        flex: 1,
        flexDirection: 'row',
        left: 22,
        height: 20
    }
})
export default Header;