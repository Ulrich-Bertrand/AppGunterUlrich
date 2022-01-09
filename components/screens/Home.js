import React from 'react'
import { List, Drawer, Divider } from 'react-native-paper';
import { StyleSheet, View } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";

export const MenuAnimation = ({ navigation, route }) => {
    const navigate = (route) => navigation.navigate(route)
    return (
        <View style={styles.listAccordion}>
            <List.Accordion
                title="Order List"
                left={props => <List.Icon {...props} icon="file" color={'blue'}/>}
                titleStyle={{marginLeft: -20 }}
            >
                <List.Item title="Screen 1" onPress={() => navigate('Tab1')} titleStyle={{marginLeft: -30}} left={props => <List.Icon {...props} icon="home" color={'black'} />} />
                <List.Item title="Screen 2" onPress={() => navigate('Tab2')} titleStyle={{marginLeft: -30}} left={props => <List.Icon {...props} icon="home" color={'red'} />} />
                <List.Item title="Screen 3" onPress={() => navigate('Tab3')} titleStyle={{marginLeft: -30}} left={props => <List.Icon {...props} icon="home" color={'green'} />} />
            </List.Accordion>

        </View>
    )
};
//---------------------------------------------------------------------------
export const OrderMedecine = ({ navigation, route }) => {
    const navigate = (route) => navigation.navigate(route)
    return (
        <View style={styles.listAccordion}>
            <List.Accordion title="Order Medecine"
                left={props => <List.Icon {...props} icon="toolbox" color={'green'}/>}
                titleStyle={{marginLeft: -20 }}
                style={{backgroundColor:"white"}}
            >
                <List.Item title="Medecine One" onPress={() => navigate('Tab2')} titleStyle={{marginLeft: -30}}  />
                <List.Item title="Medecine Two" onPress={() => navigate('Tab2')} titleStyle={{marginLeft: -30}}  />

            </List.Accordion>

        </View>
    )
};

//---------------------------------------------------------------------------
export const ReferAndEarn = ({ navigation, route }) => {
    const navigate = (route) => navigation.navigate(route)
    return (
        <View style={styles.listAccordion}>
            <List.Accordion title="Refer and  Earn"
                            left={props => <List.Icon {...props} icon="wallet-giftcard" color={'#43C6DB'}/>}
                            titleStyle={{marginLeft: -20 }}
                            style={{backgroundColor:"white"}}
            >
                <List.Item title="refer one" onPress={() => navigate('refer one')} titleStyle={{marginLeft: -30}}  />
                <List.Item title="refer Two" onPress={() => navigate('refer one')} titleStyle={{marginLeft: -30}}  />
            </List.Accordion>
        </View>
    )
};

//---------------------------------------------------------------------------
export const HealthcareProducts = ({ navigation, route }) => {
    const navigate = (route) => navigation.navigate(route)
    return (
        <View style={styles.listAccordion}>
            <List.Accordion title="Healthcare Products"
                            left={props => <List.Icon {...props} icon="heart-multiple" color={'#FFA62F'}/>}
                            titleStyle={{marginLeft: -20 }}
                            style={{backgroundColor:"white"}}>
                <List.Item title="Healthcare Devices" onPress={() => navigate('')} titleStyle={{marginLeft: -20}}   />
                <List.Item title="Covid Essentials" onPress={() => navigate('')} titleStyle={{marginLeft: -20}}  />
                <List.Item title="Health Food And Drinks" onPress={() => navigate('')} titleStyle={{marginLeft: -20}}  />
                <List.Item title="Personal Care" onPress={() => navigate('')} titleStyle={{marginLeft: -20}}   />
                <List.Item title="Ayurvedic Care" onPress={() => navigate('')} titleStyle={{marginLeft: -20}}   />
                <List.Item title="Mother And Baby Care" onPress={() => navigate('')} titleStyle={{marginLeft: -20}}  />
                <List.Item title="Accessories and Wearables" onPress={() => navigate('')} titleStyle={{marginLeft: -20}}  />
                <List.Item title="Skin Care" onPress={() => navigate('')} titleStyle={{marginLeft: -20}}  />
                <List.Item title="Diabetic Care" onPress={() => navigate('')} titleStyle={{marginLeft: -20}} />
                <List.Item title="Health Condition" onPress={() => navigate('')} titleStyle={{marginLeft: -20}}  />
                <List.Item title="Sexual Wellness" onPress={() => navigate('')} titleStyle={{marginLeft: -20}}  />
                <List.Item title="Home Care" onPress={() => navigate('')} titleStyle={{marginLeft: -20}}  />
                <List.Item title="Fitness & Supplements" onPress={() => navigate('')} titleStyle={{marginLeft: -20}} />
                <List.Item title="Elderly Care" onPress={() => navigate('')} titleStyle={{marginLeft: -20}}  />
                <List.Item title="Surgicals And Dressings" onPress={() => navigate('')} titleStyle={{marginLeft: -20}} />
                <List.Item title="Pet Care" onPress={() => navigate('')} titleStyle={{marginLeft: -20}}  />
            </List.Accordion>
        </View>
    )
};


//---------------------------------------------------------------------------
export const LabTests = ({ navigation, route }) => {
    const navigate = (route) => navigation.navigate(route)
    return (
        <View style={styles.listAccordion}>
            <List.Accordion title="Lab Tests"
                            left={props => <List.Icon {...props} icon="camera-iris" color={'blue'}/>}
                            titleStyle={{marginLeft: -20 }}
                            style={{backgroundColor:"white"}}
            >
                <List.Item title="Lab one" onPress={() => navigate('refer one')} titleStyle={{marginLeft: -30}} />
                <List.Item title="Lab Two" onPress={() => navigate('refer one')} titleStyle={{marginLeft: -30}} />
            </List.Accordion>

        </View>
    )
};

//---------------------------------------------------------------------------
export const MyAccount = ({ navigation, route }) => {
    const navigate = (route) => navigation.navigate(route)
    return (
        <View style={styles.listAccordion}>
            <List.Accordion title="My Account"
                            left={props => <List.Icon  icon="emoticon-happy" color={'green'}/>}
                            titleStyle={{marginLeft: -20 }}
                            style={{backgroundColor:"white"}}
            >
                <List.Item title="Account one" onPress={() => navigate('account one')} titleStyle={{marginLeft: -30}}  />
                <List.Item title="Account Two" onPress={() => navigate('account one')} titleStyle={{marginLeft: -30}}  />
            </List.Accordion>
        </View>
    )
};

const styles = StyleSheet.create({
    listAccordion:{
        justifyContent:"space-around", marginLeft:-10, backgroundColor:"#fff"
    }
})
