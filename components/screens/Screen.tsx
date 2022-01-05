import * as React from "react";
import {SafeAreaView, TouchableOpacity, View, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {Text} from "@react-native-material/core";


class Screen extends React.Component {
    render() {
        return (
            <View>
                <SafeAreaView style={{flex: 1}}>
                    <TouchableOpacity style={{alignItems: "flex-end", margin:16}}
                                      //@ts-ignore
                                      onPress={this.props.navigation.openDrawer}>
                        <Icon name="bars" size={24} color={"green"}/>
                    </TouchableOpacity>
                </SafeAreaView>
                <View style={{flex:1, alignItems:"center", justifyContent:"center"}} >
                    <Text style={styles.text}>
                        {//@ts-ignore
                            this.props.name}
                    </Text>
                </View>
            </View>
        );
    }
}
export default Screen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#FFF",
    } ,
    text: {
        color: "blue",
        fontSize:20,
        fontWeight:"500",
    }
});
