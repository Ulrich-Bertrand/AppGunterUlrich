import * as React from "react";

import {createAppContainer} from "react-navigation";
import {createDrawerNavigator} from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    ProfileScreen,
    MessageScreen,
    ActivityScreen,
    ListScreen,
    StatisticScreen,
    RepportScreen,
    SignOutScreen,
} from "../screens"

// @ts-ignore
const DrawerNavigator = createDrawerNavigator({
    ProfileScreen,
    MessageScreen,
    ActivityScreen,
    ListScreen,
    RepportScreen,
    StatisticScreen,
    SignOutScreen,
});

//@ts-ignore
const AppEntry =  createAppContainer(DrawerNavigator);

export default AppEntry;
