import * as React from "react";
import {HomeScreen, SettingScreen, StatisticScreen} from "../constants";
import {createStackNavigator} from "@react-navigation/stack";
const Stacks = createStackNavigator();

export const MainStackNavigator = ({navigation}) => {
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
            <Stacks.Screen  name="Home" component={HomeScreen}
                options={{title:'Homes', headerShown: false,}}/>
            <Stacks.Screen name="Settings" component={SettingScreen} />
        </Stacks.Navigator>
    );
};


export const StatisticStackNavigator = () => {
    return (
        <Stacks.Navigator screenOptions={{headerShown: false}} >
            <Stacks.Screen name="Statistic" component={StatisticScreen} />
        </Stacks.Navigator>
    );
};
