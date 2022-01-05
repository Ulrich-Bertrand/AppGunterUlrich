import * as React from 'react';
import { StyleSheet,} from 'react-native';
import {VStack} from "@react-native-material/core";

import Home from "./components/Home";
import AppBarPaid from "./components/AppBarPaid";
import Tabbar from "./components/Tabbar";

const App =() =>{
  return (
      <>
          <AppBarPaid/>
          <Home/>
          <VStack fill style={styles.tabbar} >
              <Tabbar />
          </VStack>
      </>

  );
};

const styles = StyleSheet.create({
    tabbar: {
        justifyContent: "flex-end",
        alignSelf: "flex-end",
    }
});

export default App;


