import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from "./src/screen/AuthStack/Login.js";
import SignUp from "./src/screen/AuthStack/SignUp.js";
import CustomButton from './src/components/CustomButton.js';
import CustomButton2 from './src/components/CustomNextIconButton.js';
import TextInput from "./src/components/CustomTextInput.js";
import Header from './src/components/Header.js';
const App = () => {
  return (
    <View>
      <SignUp/>
    </View>
    // <View>
    //   <TextInput title="Name" placeholder="Enter Your Name"/>
    //   <TextInput title="Email" placeholder="example@.com"/>
    //   <TextInput title="Password" placeholder="**************"/>
    // </View>
  );
}
export default App;
