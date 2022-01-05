import * as React from "react";
import {Image, ImageBackground, ScrollView, Text, View, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


const SideBar = props =>(
    <ScrollView>
        <ImageBackground
            source={require("../../assets/adaptive-icon.png")}
            style={{width:undefined, padding:16, paddingTop:48}}>
            <Image source={require("../../assets/img.png")} style={styles.profile} />
            <Text style={styles.name}>Simple Ulrich</Text>

            <View style={{flexDirection: "row"}} >
                <Text style={styles.followers}>734 Followers</Text>
                <Icon name="md-people" size={20} color="rgba(255, 255, 255, 0.8)" />
            </View>

        </ImageBackground>
    </ScrollView>
);
export default SideBar;


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    profile:{
        width: 80,
        height: 80,
        borderRadius:40,
        borderWidth:3,
        borderColor:"#FFF",
    },
    name:{
        color:"#FFF",
        fontSize:20,
        fontWeight:"800",
        marginVertical:8
    },
    followers:{
        color:"rgba(255, 255, 255, 0.8)",
        fontSize:13,
        marginRight: 4,
    }
});
