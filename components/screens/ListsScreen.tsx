import * as React from "react";
import {Text} from "@react-native-material/core";
import {View} from "react-native";

const ListsScreen =  ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontSize:16,fontWeight:'bold'}}>Lists Screen</Text>
        </View>
    );
};

export default ListsScreen;
