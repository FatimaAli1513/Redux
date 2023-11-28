import React from "react";
import { Text, TouchableOpacity, View,StyleSheet } from "react-native";
import Feather from "react-native-vector-icons/Feather"
const CustomButton=()=>{
  return(
    <View style={{shadowOpacity:50,shadowColor:'black'}}>
      <TouchableOpacity style={styles.btn} activeOpacity={0.6}>
        <Feather name="arrow-right" size={25} top={12}/>
      </TouchableOpacity>
    </View>
  )
}
const styles=StyleSheet.create({
btn:{
top:682,
height:50,
width:50,
marginLeft:337,
textAlign:'center',
alignItems:'center',
alignContent:'center',
backgroundColor:'#EDF3F9',
borderBottomLeftRadius:25,
borderBottomRightRadius:25,
borderTopLeftRadius:25,
borderTopRightRadius:25,
elevation:8
}
})
export default CustomButton;