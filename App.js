import React, {createRef} from 'react'
import { StyleSheet} from 'react-native'
import {NavigationContainer} from "@react-navigation/native";
import DrawerNavigator from "./src/DrawerNavigator";

// store reference to navigation object
const navigationRef = createRef()
const nav = () => navigationRef.current

const App = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <DrawerNavigator nav={nav}/>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        overflow: 'hidden',
    },
})

export default App
