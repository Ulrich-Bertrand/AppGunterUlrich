import * as React from 'react';
import { View, Text } from "react-native";

const StatisticsScreen= ({navigation})  =>{
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontSize:16,fontWeight:'bold'}}>Statistics Screen</Text>
        </View>
    );
};

export default StatisticsScreen;
