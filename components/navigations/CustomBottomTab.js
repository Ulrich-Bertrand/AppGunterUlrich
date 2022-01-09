import * as React from 'react';

// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {ContactStackNavigator, MainStackNavigator} from "../../App0";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import AppBarPaid from "../AppBarPaid";

import {HomeScreen} from "../constants";
import {MainStackNavigator, StatisticStackNavigator} from "./CustomStack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Tabbar from "../Tabbar";

const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();

const CustomButtonTab = () => {
    return (
        // <Tab.Navigator screenOptions={{headerShown: false}} >
        //     <Tab.Screen name="Home" component={MainStackNavigator}/>
        //     <Tab.Screen name="Statistic" component={Tabbar}/>
        // </Tab.Navigator>
        <>
            <MainStackNavigator/>
            <Tabbar/>
        </>

    );
};

export default CustomButtonTab;
