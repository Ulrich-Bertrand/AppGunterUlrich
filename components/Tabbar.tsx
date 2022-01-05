import * as React from "react";
import {SafeAreaView, StyleSheet, Dimensions, View, Animated,} from "react-native";
import * as shape from "d3-shape";
import  Svg , {Path} from "react-native-svg";

import StaticTabbar from "./StaticTabbar";
import {Stack} from "@react-native-material/core";

const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const { width } = Dimensions.get("window");
const height = 64;

const tabs = [
  {name: "home",},
  {name: "list",},
  {name: "repeat",},
  {name: "map",},
  {name: "user",},
];

const tabWidth = width / tabs.length;
const backgroundColor = "#276856";

const getPath = (): string => {
  // @ts-ignore
  const left = shape.line().x(d => d.x).y(d => d.y)([
    { x: 0, y: 0 },
    { x: width, y: 0 },
  ]);
// @ts-ignore
  const right = shape.line().x(d => d.x).y(d => d.y)([
    { x: width + tabWidth, y: 0 },
    { x: width * 2, y: 0 },
    { x: width * 2, y: height },
    { x: 0, y: height },
    { x: 0, y: 0 },
  ]);
  //@ts-ignore
  const tab = shape.line().x(d => d.x).y(d => d.y).curve(shape.curveBasis)([
    { x: width, y: 0 },
    { x: width + 30, y: -5 },
    { x: width + -5, y: 5 },
    { x: width + 15, y: height/1.3 },
    { x: width + tabWidth - 15, y: height/1.3 },
    { x: width + tabWidth +5, y: 5 },
    { x: width + tabWidth - 30, y: 0 },
    { x: width + tabWidth, y: 0 },
  ]);

  return `${left} ${tab} ${right}`;
};

const d = getPath();
interface TabbarProps {}

// eslint-disable-next-line react/prefer-stateless-function
export default class Tabbar extends React.PureComponent<TabbarProps> {
  value = new Animated.Value(0);

  render() {
    const { value } = this;
    const translateX = value.interpolate({
      inputRange: [0, width],
      outputRange: [-width, 0],
    });
    return (
      <>
        <Stack {...{ height, width }}  key={"listTab"} >
          <AnimatedSvg width={width*2} {...{ height }} style={{ transform: [{ translateX }] }} >
            <Path fill={backgroundColor} {...{ d }} />
          </AnimatedSvg>
          <View style={StyleSheet.absoluteFill}>
            <StaticTabbar {...{ tabs, value }} />
          </View>
        </Stack>
        <SafeAreaView style={styles.container} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor,
  },
});
