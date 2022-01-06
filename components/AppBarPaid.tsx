import * as React from "react";
import {AppBar, Avatar, Button, IconButton} from "@react-native-material/core";
import {Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AppBarPaid = () => {

    return (
    <AppBar
        title="ACCUEIL"
        subtitle="Paid Cash (Gunter & Ulrich)"
        color="white"
        centerTitle={true}
        style={styles.appBar}
        leading={
            <IconButton icon={ <Icon style={styles.icon} name="bars" size={23} color={'green'} />}  />
        }
        trailing={
            <IconButton icon={ <Icon color={'green'} name="bell" size={23}/>}/>
        }
    >
    </AppBar>
    );
}

const styles = StyleSheet.create({
    appBar: {
        marginTop:0
    },
    icon:{
        top:0
    }
});

export default AppBarPaid;


// leading={
// <IconButton icon={ <Icon style={styles.icon} name="menu"/>}  />
// }
// trailing={
// <IconButton
//     icon={ <Icon style={{color: "green"}} name="bell"/>}
// />
// }
