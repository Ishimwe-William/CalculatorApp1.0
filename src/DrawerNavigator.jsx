import * as React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Text, TouchableOpacity } from 'react-native';
import TabNavigator from './TabNavigator';
import { routes, screens } from './RouteItems';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
    const currentRouteName = props.state.routeNames[props.state.index];

    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ paddingLeft: 16 }}>
            {routes
                .filter((route) => route.showInDrawer)
                .map((route) => (
                    <DrawerItem
                        key={route.name}
                        label={() => (
                            <Text style={{ color: currentRouteName === route.name ? 'red' : 'black' }}>
                                {route.title}
                            </Text>
                        )}
                        onPress={() => {
                            props.navigation.navigate(route.name);
                            props.navigation.closeDrawer(); // Close the drawer after navigating
                        }}
                    />
                ))}
        </DrawerContentScrollView>
    );
};

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerStyle={{
                width: '80%', // Adjust the width as needed
            }}
            screenOptions={({ navigation }) => ({
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                        <Text style={{ fontSize: 20, color: '#000' }}>☰</Text>
                    </TouchableOpacity>
                ),
            })}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen
                name={screens.HomeTab}
                component={TabNavigator}
                options={{
                    title: 'Calculator',
                }}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
