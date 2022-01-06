import * as React from 'react';
import {View, Text, ImageBackground, Image, TouchableOpacity} from "react-native";
import {DrawerItemList, DrawerContentScrollView} from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";

const CustomDrawer = (props) => {
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView{...props} contentContainerStyle={{backgroundColor:"#fff"}}>
                <ImageBackground source={require("../../assets/images/background.jpg")} style={{padding:20, paddingTop:10, marginEnd:0}}>
                    <Image source={require("../../assets/images/profile.jpg")}
                           style={{width:80, height:80, marginBottom:5, borderRadius:40, alignSelf:"center"}}/>
                    <Text style={{color:"#fff", fontSize:18, alignSelf:"center", fontFamily:"Roboto-Medium"}}>Ulrich Bertrand</Text>
                    <View style={{flexDirection:"row",  alignSelf:'flex-end', marginBottom:-15}}>
                        <Text style={{
                            color:'#fff',
                            fontFamily:"Roboto-Regular",
                            marginRight:5, }}> 7 200 Abonnees</Text>
                        <Ionicons name='people-sharp' size={18} color='#fff'/>
                    </View>
                </ImageBackground>
                <View style={{flex:1, backgroundColor:'#fff', paddingTop:10}}/>
                <DrawerItemList {...props}/>
            </DrawerContentScrollView>

            <View style={{padding:5, borderTopWidth:1, borderTopColor:"#ccc"}}>
                <TouchableOpacity onPress={()=>{}} style={{paddingVertical:5}} >
                    <View style={{flexDirection:"row", alignItems:'center'}}>
                        <Ionicons name="share-social-outline"/>
                        <Text style={{marginLeft:5, fontSize:15, fontFamily:"Roboto-Medium"}}> Share a friend</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}} style={{paddingVertical:5}} >
                    <View style={{flexDirection:"row", alignItems:'center'}}>
                        <Ionicons name="exit-outline"/>
                        <Text style={{marginLeft:5, fontSize:15, fontFamily:"Roboto-Medium"}}>Sign Out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default CustomDrawer;
