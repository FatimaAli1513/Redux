import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
const CustomButton = () => {
    return (
        <View style={{ shadowOpacity: 50, shadowColor: 'black' }}>
            <TouchableOpacity style={styles.btn} activeOpacity={0.6}>
                <Text style={styles.ftxt}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    btn: {
        top: 672,
        height: 61,
        width: 308,
        marginLeft: 61,
        textAlign: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#EDF3F9',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        elevation: 16
    },
    ftxt: {
        fontSize: 18,
        fontWeight: '600',
        //lineHeight:27,
        color: '#023535',
        alignContent: 'center',
        width:85,
        height:26,
        top:15,
    }
})
export default CustomButton;