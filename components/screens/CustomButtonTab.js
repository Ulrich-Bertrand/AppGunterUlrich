import * as React from 'react';

// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ContactStackNavigator, MainStackNavigator} from "../../App0";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";

// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();
const CustomButtonTab = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="Home" component={MainStackNavigator}/>
            <Tab.Screen name="Contact" component={ContactStackNavigator}/>
        </Tab.Navigator>
    );
};

export default CustomButtonTab;
