import * as React from "react";
import {Avatar, HStack, Stack, Text, VStack, Pressable, Button} from "@react-native-material/core";
import {Image, StyleSheet, ImageBackground, View, Dimensions} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const image = { uri: "https://cdn2.vectorstock.com/i/1000x1000/67/51/icon-with-world-map-vector-24226751.jpg" };
const heightSc  = Dimensions.get("window").height;
const widthSc  = Dimensions.get("window").width;

const HomesScreen = ({navigation, name}) => {
    return (
        <VStack style={{marginTop: 1, alignItems: "center", }}>
            <View style={{borderRadius: 20}}>
                <ImageBackground source={image} resizeMode="cover" style={styles.card}>
                    <VStack spacing={0} >
                        <HStack spacing={45} style={{
                            backgroundColor: "#276856",
                            opacity: 0.7,
                            height: 90,
                            marginTop: 0,
                            borderTopRightRadius: 20,
                            borderTopStartRadius: 20
                        }}>
                            <Text style={{fontWeight: "bold", color: "white", fontSize: 15, marginLeft: 5, marginTop: 10}}>Mr Joe Doe</Text>
                            <Avatar size={35} style={{top: 5, marginRight: 0, backgroundColor: "white",}}
                                    image={<Image
                                        source={{uri: "https://img.icons8.com/windows/32/26e07f/paypal.png"}}
                                        style={styles.image}/>}/>
                        </HStack>
                        <Stack style={{
                            backgroundColor: "#276856",
                            opacity: 0.7,
                            alignItems: "baseline",
                            height: 80,
                            marginTop: 0,
                            borderBottomStartRadius: 20,
                            borderBottomEndRadius: 20
                        }}>
                            <Text style={{color: "white", fontWeight: "bold", marginTop: 2}}>Solde</Text>
                            <Text style={{color: "white", fontWeight: "bold", fontSize: 16,}}>0.0000 Fcfa</Text>
                            <Text style={{color: "blue", fontWeight: "bold", fontSize: 16, alignSelf: "flex-end", marginRight:5}}>VISA</Text>
                        </Stack>
                    </VStack>
                </ImageBackground>
            </View>

            <Text style={styles.text}>Achetez une carte</Text>


            <HStack spacing={4} style={{marginTop: 5, marginBottom: 0}}>
                <Pressable style={styles.cardAchat}>
                    <Avatar size={60} style={{alignSelf: "center", backgroundColor: "#276856",}}
                            image={<Image
                                source={{uri: "https://img.icons8.com/ios/50/ffffff/refund-2.png"}}
                                style={styles.image}/>}/>
                    <Text style={styles.textAchat}>TRANSFERT</Text>
                </Pressable>
                <Pressable style={styles.cardAchat}>
                    <Avatar size={60} style={{alignSelf: "center", backgroundColor: "#276856",}}
                            image={<Image
                                source={{uri: "https://img.icons8.com/ios/50/ffffff/card-in-use.png"}}
                                style={styles.image}/>}/>
                    <Text style={styles.textAchat}>PAIEMENT</Text>
                </Pressable>
                <Pressable style={styles.cardAchat}>
                    <Avatar size={60} style={{alignSelf: "center", backgroundColor: "#276856",}}
                            image={<Image
                                source={{uri: "https://img.icons8.com/ios-filled/50/ffffff/money-box--v1.png"}}
                                style={styles.image}/>}/>
                    <Text style={styles.textAchat}>EPARGNE</Text>
                </Pressable>
            </HStack>


            <Text style={styles.text}>Services</Text>


            <HStack spacing={3} style={{marginTop: 10,}}>
                <Pressable style={styles.cardService}>
                    <Avatar size={widthSc/6} style={{alignSelf: "center", backgroundColor: "#276856",}}
                            icon={ <Icon name="ticket" size={40}  color={'white'}/>}  />
                    <Text style={styles.textServices}>Ticket</Text>
                </Pressable>
                <Pressable style={styles.cardService}>
                    <Avatar size={widthSc/6} style={{alignSelf: "center", backgroundColor: "#276856",}}
                            icon={ <Icon name="tv" size={30}  color={'white'}/>}  />
                    <Text style={styles.textServices}>Tv</Text>
                </Pressable>
                <Pressable style={styles.cardService}>
                    <Avatar size={widthSc/6} style={{alignSelf: "center", backgroundColor: "#276856",}}
                            icon={ <Icon name="tint" size={40}  color={'white'}/>}  />
                    <Text style={styles.textServices}>Eeau</Text>
                </Pressable>
                <Pressable style={styles.cardService}>
                    <Avatar size={widthSc/6} style={{alignSelf: "center", backgroundColor: "#276856",}}
                            icon={ <Icon name="bolt" size={40}  color={'white'}/>}  />
                    <Text style={styles.textServices}>Electricite</Text>
                </Pressable>
            </HStack>


            {/*<Button title="Settings" onPress={() =>{navigation.navigate("Settings")}}></Button>*/}
        </VStack>
    );
}

export default HomesScreen;

const styles = StyleSheet.create({
    appBar: {
        backgroundColor:"#276856",
        color: "black",
    },
    imageB: {
        flex: 1,
            justifyContent: "center"
    },
    image:{
        position: "absolute",
        alignSelf:"center",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    card:{
        width: widthSc-15, height: heightSc/3.5, borderRadius: 20, top:2, alignSelf:"center", borderTopRightRadius:20,borderTopStartRadius:20

    },
    cardAchat:{
        width: widthSc/4.2, height: heightSc/7.6,
    },
    cardService:{
        width: widthSc/5, height: heightSc/8.5,
    },
    icon:{
        color:"#276856"
    },
    text:{
        fontWeight:"bold",
        marginTop:20,
    },
    textAchat: {fontWeight: "bold", color: "green", alignSelf: "center", fontSize:11},
    textServices:{fontWeight: "bold", color: "green", alignSelf: "center", fontSize:9}
});

