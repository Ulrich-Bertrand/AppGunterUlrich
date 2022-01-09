import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createDrawerNavigator} from '@react-navigation/drawer';

import {ProfileScreen, MessageScreen, ActivityScreen, ListScreen, ReportScreen, StatisticScreen,
    SignOutScreen, SettingScreen, MomentScreen,
} from "./components/constants/index";
import  CustomButtonTab from './components/navigations/CustomBottomTab';

import Ionicons from "react-native-vector-icons/Ionicons";
import CustomDrawer from './components/navigations/CustomDrawer';
import {Dimensions} from "react-native"; // navigation drawer

const widthScreen = Dimensions.get("window").width;
const Drawer = createDrawerNavigator();



const App =() =>{
  return (
    <NavigationContainer >

        <Drawer.Navigator
            //@ts-ignore
            drawerType="slide" initialRouteName="Home" defaultStatus="closed"
                          drawerContent={props => <CustomDrawer {...props} />}
                          screenOptions={{drawerStyle: {width: widthScreen*0.8}, headerShown:true, headerTitleAlign:'center',
                              drawerActiveBackgroundColor: '#B6B6B9',
                              drawerActiveTintColor:'#fff',
                              drawerInactiveTintColor:'#333',
                              drawerItemStyle: {borderTopLeftRadius:10},
                            drawerLabelStyle: {marginLeft: -25, fontFamily:'Roboto-Medium', fontSize:15, },
                              headerRight: () =>(<Ionicons name="notifications-outline" size={25}></Ionicons>),
                              headerShadowVisible:true,

                          }}
        >
            <Drawer.Screen key={"Home"} name={"Home"} component={CustomButtonTab}
               options={{drawerIcon: ({color}) =>(<Ionicons name="home-sharp" size={22} color={'blue'}/>)}}
            />
            <Drawer.Screen key={"Profile"} name={"Profile"} component={ProfileScreen}
                options={{drawerIcon: ({color}) =>(<Ionicons name="person-sharp" size={22} color={'#56A5EC'}/>)}}
            />
            <Drawer.Screen key={"Message"} name={"Message"} component={MessageScreen}
                options={{drawerIcon: ({color}) =>(<Ionicons name="chatbox-ellipses-sharp" size={22} color={"#F2BB66"}/>)}}
            />
            <Drawer.Screen key={"Moments"} name={"Moments"} component={MomentScreen}
               options={{drawerIcon: ({color}) =>(<Ionicons name="timer-outline" size={22} color={"#F52887"}/>)}}
            />
            <Drawer.Screen key={"Settings"} name={"Settings"} component={SettingScreen}
               options={{drawerIcon: ({color}) =>(<Ionicons name="settings-sharp" size={22} color={"#8C001A"}/>)}}
            />
            <Drawer.Screen key={"Activity"} name={"Activity"} component={ActivityScreen}
               options={{drawerIcon: ({color}) =>(<Ionicons name="boat-sharp" size={22} color={"green"}/>)}}
            />
            <Drawer.Screen key={"List"} name={"List"} component={ListScreen}
               options={{drawerIcon: ({color}) =>(<Ionicons name="albums-sharp" size={22} color={"#FDD017"}/>)}}
            />
            <Drawer.Screen key={"Repport"} name={"Repport"} component={ReportScreen}
               options={{drawerIcon: ({color}) =>(<Ionicons name="arrow-redo-sharp" size={22} color={"#483C32"}/>)}}
            />
            <Drawer.Screen key={"Statistic"} name={"Statistic"} component={StatisticScreen}
               options={{drawerIcon: ({color}) =>(<Ionicons name="stats-chart-outline" size={22} color={"#7A5DC7"}/>)}}
            />
            <Drawer.Screen key={"SignOut"} name={"Sign Out"} component={SignOutScreen}
               options={{drawerIcon: ({color}) =>(<Ionicons name="log-out-outline" size={22} color={"#990012"}/>)}}
            />

        </Drawer.Navigator>
    </NavigationContainer>
  );
};

export  default App;
