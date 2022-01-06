import React from "react";
import HomesScreen from "../screens/HomesScreen";
import ProfilesScreen from "../screens/ProfilesScreen";
import MessagesScreen from "../screens/MessagesScreen";
import ReportsScreen from "../screens/ReportsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import MomentsScreen from "../screens/MomentsScreen";
import ActivitysScreen from "../screens/ActivitysScreen";
import ListsScreen from "../screens/ListsScreen";
import StatisticsScreen from "../screens/StatisticsScreen";
import SignOutsScreen from "../screens/SignOutsScreen";


export const HomeScreen = ({navigation}) => <HomesScreen navigation={navigation}/>
export const ProfileScreen = ({navigation}) => <ProfilesScreen navigation={navigation}/>
export const ActivityScreen = ({navigation}) => <ActivitysScreen navigation={navigation}/>
export const ListScreen = ({navigation}) => <ListsScreen navigation={navigation} />
export const MessageScreen = ({navigation}) => <MessagesScreen navigation={navigation} />
export const ReportScreen = ({navigation}) => <ReportsScreen navigation={navigation}/>
export const StatisticScreen = ({navigation}) => <StatisticsScreen navigation={navigation}/>
export const SignOutScreen = ({navigation}) => <SignOutsScreen navigation={navigation} />
export const SettingScreen = ({navigation}) => <SettingsScreen navigation={navigation}/>
export const MomentScreen = ({navigation}) => <MomentsScreen navigation={navigation}/>
