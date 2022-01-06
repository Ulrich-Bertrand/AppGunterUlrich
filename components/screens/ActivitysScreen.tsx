import * as React from "react";
import { Text} from "@react-native-material/core";
import {View} from "react-native";

const ActivitysScreen =  ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontSize:16,fontWeight:'bold'}}>Activities Screen</Text>
        </View>
    );
};

export  default ActivitysScreen;
