import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {createDrawerNavigator} from "@react-navigation/drawer";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();

import { createStackNavigator } from "@react-navigation/stack";
import {Button} from "@react-native-material/core";

import CustomButtonTab from './components/screens/CustomButtonTab';
import {BottomNavigation} from "react-native-paper";
const Stacks = createStackNavigator();
const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();


const MusicRoute = () => <Text>Music s</Text>;

const AlbumsRoute = () => <Text>Albums sd</Text>;

const RecentsRoute = () => <Text>Recents fe</Text>;

const ProfileRoute = () => <Text>Profiles Screen page </Text>;


const AppZero = () => {

    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
        {key: 'music', title: 'Music', icon: 'music-box', color:"green"},
        {key: 'albums', title: 'Albums', icon: 'album', color:"blue"},
        {key: 'recent', title: 'Recent', icon: 'history', color:'indigo'},
        {key: 'profil', title: 'profil', icon: 'face', color:'orange', badge:20, accessibilityLabel:'Profile user'},
    ]);

    const renderScene = BottomNavigation.SceneMap({
        music: MusicRoute,
        albums: AlbumsRoute,
        recent: RecentsRoute,
        profil: ProfileRoute,
    });


        return (
        <NavigationContainer>
            <BottomNavigation
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                renderScene={renderScene}
                shifting={true}
                labeled={false}
            />
        </NavigationContainer>
    );
};

export  default AppZero;























export const HomeScreenss = ({navigation}) =>{
    const styles = StyleSheet.create({
        center: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
        },
    });
    return (
        <View style={styles.center}>
            <Text>This is the home screen</Text>
            <Button
                title="Go to Setting Screen"
                onPress={() => navigation.navigate("Setting")} // We added an onPress event which would navigate to the About screen
            />
        </View>
    );
};

export const SettingScreenss = ({navigation}) => {


    const styles = StyleSheet.create({
        center: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
        },
    });
    return (
        <View style={styles.center}>
            <Text>This is the setting screen</Text>
        </View>
    );
}

export const ContactScreenss = ({navigation}) => {
    const styles = StyleSheet.create({
        center: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
        },
    });
    return (
        <View style={styles.center}>
            <Text>This is the Contact screen</Text>
        </View>
    );
}




export const MainStackNavigator = () => {
    return (
        <Stacks.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#9AC4F8",
                },
                headerTintColor: "white",
                headerBackTitle: "Back",
            }}
        >
            <Stacks.Screen name="Home" component={HomeScreenss} />
            <Stacks.Screen name="Setting" component={SettingScreenss} />
        </Stacks.Navigator>
    );
};


export const ContactStackNavigator = () => {
    return (
        <Stacks.Navigator >
            <Stacks.Screen name="Contact" component={ContactScreenss} />
        </Stacks.Navigator>
    );
};


const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={CustomButtonTab} />
            <Drawer.Screen name="Contact" component={ContactStackNavigator} />
            <Drawer.Group>
                <Drawer.Screen name="Homes" component={CustomButtonTab} />
                <Drawer.Screen name="Contacts" component={ContactStackNavigator} />
            </Drawer.Group>
        </Drawer.Navigator>
    );
};
