import React from "react";
import { StyleSheet } from "react-native";
import Header from "../../components/Header";
import TextInputs from "./../../components/CustomTextInput"
import { View, Text, StatusBar, Image } from "react-native";
const SignUp = () => {
    return ( 
    <View>
     <Header pagename="Sign Up" Textname="Create Account">
     <TextInputs title="Name" placeholder="Enter Your Name"/> 
     </Header>
    
    </View>
    )
}
export default SignUp;