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
const Stacks = createStackNavigator();
const Drawer = createDrawerNavigator();

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

const Tab = createBottomTabNavigator();

const AppZero = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator/>
        </NavigationContainer>
    );
};

export  default AppZero;


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
