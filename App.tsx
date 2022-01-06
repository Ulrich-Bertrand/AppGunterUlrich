import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createDrawerNavigator} from '@react-navigation/drawer';

import {HomeScreen, ProfileScreen, MessageScreen, ActivityScreen, ListScreen, ReportScreen, StatisticScreen,
    SignOutScreen, SettingScreen, MomentScreen,
} from "./components/constants/index";

import Ionicons from "react-native-vector-icons/Ionicons";
import CustomDrawer from './components/screens/CustomDrawer';
import {Dimensions, Text} from "react-native"; // navigation drawer
const widthScreen = Dimensions.get("window").width;

const Drawer = createDrawerNavigator();

// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import SettingsScreen from "./components/screens/SettingsScreen";
// import HomesScreen from "./components/screens/HomesScreen";
//
// const Tab = createMaterialBottomTabNavigator();
//
// function MyTabs() {
//     return (
//         <Tab.Navigator>
//             <Tab.Screen name="Home" component={HomesScreen} />
//             <Tab.Screen name="Settings" component={SettingsScreen} />
//         </Tab.Navigator>
//     );
// }

const App =() =>{
  return (
    <NavigationContainer >
        <Drawer.Navigator
            //@ts-ignore
            drawerType="front" initialRouteName="HomesScreen" defaultStatus="open"

                          drawerContent={props => <CustomDrawer {...props} />}
                          screenOptions={{drawerStyle: {width: widthScreen*0.8,}, headerShown:true, headerTitleAlign:'center',
                              drawerActiveBackgroundColor: '#59E817',
                              drawerActiveTintColor:'#fff',
                              drawerInactiveTintColor:'#333',
                            drawerLabelStyle: {marginLeft: -25, fontFamily:'Roboto-Medium', fontSize:15},
                              headerRight: () =>(<Ionicons name="notifications-outline" size={25}></Ionicons>),
                              headerShadowVisible:true,

                          }}
        >
            <Drawer.Screen key={"Home"} name={"Home"} component={HomeScreen}
               options={{drawerIcon: ({color}) =>(<Ionicons name="home-outline" size={22} color={color}/>)}}
            />
            <Drawer.Screen key={"Profile"} name={"Profile"} component={ProfileScreen}
                options={{drawerIcon: ({color}) =>(<Ionicons name="person-outline" size={22} color={color}/>)}}
            />
            <Drawer.Screen key={"Message"} name={"Message"} component={MessageScreen}
                options={{drawerIcon: ({color}) =>(<Ionicons name="chatbox-ellipses-outline" size={22} color={color}/>)}}
            />
            <Drawer.Screen key={"Moments"} name={"Moments"} component={MomentScreen}
               options={{drawerIcon: ({color}) =>(<Ionicons name="timer-outline" size={22} color={color}/>)}}
            />
            <Drawer.Screen key={"Settings"} name={"Settings"} component={SettingScreen}
               options={{drawerIcon: ({color}) =>(<Ionicons name="settings-outline" size={22} color={color}/>)}}
            />
            <Drawer.Screen key={"Activity"} name={"Activity"} component={ActivityScreen}
               options={{drawerIcon: ({color}) =>(<Ionicons name="boat-outline" size={22} color={color}/>)}}
            />
            <Drawer.Screen key={"List"} name={"List"} component={ListScreen}
               options={{drawerIcon: ({color}) =>(<Ionicons name="albums-outline" size={22} color={color}/>)}}
            />
            <Drawer.Screen key={"Repport"} name={"Repport"} component={ReportScreen}
               options={{drawerIcon: ({color}) =>(<Ionicons name="arrow-redo-outline" size={22} color={color}/>)}}
            />
            <Drawer.Screen key={"Statistic"} name={"Statistic"} component={StatisticScreen}
               options={{drawerIcon: ({color}) =>(<Ionicons name="stats-chart-outline" size={22} color={color}/>)}}
            />
            <Drawer.Screen key={"SignOut"} name={"Sign Out"} component={SignOutScreen}
               options={{drawerIcon: ({color}) =>(<Ionicons name="log-out-outline" size={22} color={color}/>)}}
            />
        </Drawer.Navigator>
    </NavigationContainer>
  );
};

export  default App;
