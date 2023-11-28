import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, } from "react-native";
const CustomTextInput = ({title,placeholder}) => {
    const [name, setName] = useState(" ")
    return (
        <View>
            <Text style={styles.fnt}>{title}</Text>
            <TextInput
                style={styles.textinput}
                placeholder={placeholder}
            //value={name}
            // onChangeText={(text)=>setName(text)}
            />
            {/* <Text style={{ fontSize: 30 }}>Your Name is :{name}</Text> */}
        </View>
    )
}
const styles = StyleSheet.create({
    textinput: {
        fontSize: 15,
        borderBottomColor: '#CECECE',
        borderBottomWidth: 1,
        left: 25,
        top: 466,
        width:372
    },
    fnt: {
        fontSize: 15,
        lineHeight: 22.5,
        top: 466,
        left: 25
    }
})
export default CustomTextInput;