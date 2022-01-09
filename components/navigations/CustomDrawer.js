import * as React from 'react';
import {View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet} from "react-native";
import {DrawerItemList, DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import {HealthcareProducts, LabTests, MenuAnimation, MyAccount, OrderMedecine, ReferAndEarn} from "../screens/Home";
import {HStack} from "@react-native-material/core";
import {Divider, List} from "react-native-paper";

const CustomDrawer = (props) => {
    return (
        <View style={{flex:1}}>
            <ImageBackground borderBottomRightRadius={40} source={require("../../assets/images/background2.jpg")}
                             style={{padding:20, paddingTop:10, paddingBottom:0, marginEnd:0}}>
                <View style={{flexDirection:'column', marginLeft:-10, marginBottom:15}}>
                    <Text style={{color:"#fff", fontSize:18, textTransform:"uppercase",
                        alignSelf:"auto", fontFamily:"Roboto-Medium"}}>Ulrich Bertrand</Text>
                    <Text style={{color:"#fff", fontSize:9, fontWeight:"bold", marginLeft:10}}>Specifique Status of user</Text>
                </View>
                <HStack spacing={5} style={{ padding:10, marginTop:10}}>
                    <TouchableOpacity style={{flexDirection:"column", marginTop:0, alignSelf:"flex-start"}}>
                        <Text style={{color:'green', fontFamily:"Roboto-Regular", alignSelf:"center", fontSize:10 }}>Abonnes</Text>
                        <Text style={{color:'#fff', fontWeight:"bold", fontSize:18, alignSelf:"center", }}>7 200</Text>
                        <Ionicons name='people-sharp' size={18} color='#fff' style={{alignSelf:"center"}} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require("../../assets/images/profile.jpg")}
                               style={{width:80, height:80,marginTop:-20, borderRadius:40, alignSelf:"center"}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:"column",  alignSelf:'flex-end', marginTop:0}}>
                        <Text style={{color:'green', fontFamily:"Roboto-Regular", fontSize:10 }}>Suis</Text>
                        <Text style={{color:'#fff', fontWeight:"bold", fontSize:18, marginLeft:-2 }}>10</Text>
                    </TouchableOpacity>
                </HStack>
            </ImageBackground>
            <View  style={{flex:1, backgroundColor:"black" }} >
                <View  style={{flex:1,borderTopLeftRadius:60}}>
                    <DrawerContentScrollView{...props} contentContainerStyle={{backgroundColor:"#fff",borderTopLeftRadius:30, marginLeft:2, justifyContent:"center"}}>
                        <List.Item
                            title="APP Only Offer | Code: 18SAVE"
                            description="Get FLAT 18% OFF on PharmEasy APP description"
                            style={{backgroundColor: '#F0FFFF', borderTopLeftRadius:30,}}
                            left={props => <List.Icon  icon="folder-google-drive" color="green" />}
                            right={props => <List.Icon  icon="chevron-right" color="green" />}
                        />
                        <DrawerItemList {...props}/>
                        <View style={{flex:1, backgroundColor:'#fff'}}>
                            <OrderMedecine  />
                        </View>
                            <Divider/>
                        <View style={{flex:1, backgroundColor:'#fff'}}>
                            <ReferAndEarn  {...props}/>
                        </View>

                        <View style={{flex:1, backgroundColor:'#fff'}}>
                            <HealthcareProducts  {...props}/>
                        </View>
                        <View style={{flex:1, backgroundColor:'#fff'}}>
                            <LabTests  {...props}/>
                        </View>
                        <Divider/>

                        <DrawerItem labelStyle={styles.labelItem} icon={props => <List.Icon style={styles.labelItemIcon} color="green" icon="baby-buggy" />} label='Offers' onPress={() => this.props.navigation.navigate('Contacts')} ></DrawerItem>

                        <View style={{flex:1, backgroundColor:'#fff'}}>
                            <MyAccount  {...props}/>
                        </View>
                        <DrawerItem labelStyle={styles.labelItem} icon={props => <List.Icon  style={styles.labelItemIcon} color="green"  icon="gift" />} label='Orders' onPress={() => this.props.navigation.navigate('Contacts')} ></DrawerItem>
                        <DrawerItem labelStyle={styles.labelItem} icon={props => <List.Icon style={styles.labelItemIcon} color="green" icon="wallet" />} label='Wallet' onPress={() => this.props.navigation.navigate('Contacts')} ></DrawerItem>
                        <DrawerItem labelStyle={styles.labelItem} icon={props => <List.Icon style={styles.labelItemIcon} color="green" icon="headset" />} label='Need Help' onPress={() => this.props.navigation.navigate('Contacts')} ></DrawerItem>
                        <DrawerItem labelStyle={styles.labelItem} icon={props => <List.Icon style={styles.labelItemIcon} color="green" icon="medical-bag" />} label='Browse all medecine' onPress={() => this.props.navigation.navigate('Contacts')} ></DrawerItem>

                    </DrawerContentScrollView>
                </View>


                <View style={{padding:5, borderTopWidth:1, borderTopColor:"#ccc",marginTop:0, marginRight:2, borderTopEndRadius:40, backgroundColor:"white"}}>
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
        </View>
    );
}
export default CustomDrawer;

const styles = StyleSheet.create({
    labelItem: {margin: 0, marginLeft: -40, fontFamily:'Roboto-Medium', fontSize:15, padding:0},
    labelItemIcon:{marginLeft:-15}
})
