import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export const screens = {
    HomeTab: 'HomeTab',
    HomeStack: 'HomeStack',
    Home: 'Home',
    ProfileStack: 'ProfileStack',
    Profile: 'Profile',
    ContactStack: 'ContactStack',
    Contact: 'Contact',
    CalculatorStack: 'CalculatorStack',
    Calculator: 'Calculator',
};

export const routes = [
    {
        name: screens.HomeTab,
        focusedRoute: screens.HomeTab,
        title: 'Home',
        showInTab: false,
        showInDrawer: false,
        icon: (focused) =>
            <Icon name="home" size={20} color={focused ? '#551E18' : '#000'} />,
    },
    {
        name: screens.HomeStack,
        focusedRoute: screens.HomeStack,
        title: 'Home',
        showInTab: true,
        showInDrawer: true,
        icon: (focused) =>
            <Icon name="home" size={20} color={focused ? '#551E18' : '#000'} />,
    },
    {
        name: screens.Home,
        focusedRoute: screens.HomeStack,
        title: 'Home',
        showInTab: true,
        showInDrawer: false,
        icon: (focused) =>
            <Icon name="home" size={20} color={focused ? '#551E18' : '#000'} />,
    },

    {
        name: screens.ProfileStack,
        focusedRoute: screens.ProfileStack,
        title: 'Profile',
        showInTab: true,
        showInDrawer: true,
        icon: (focused) =>
            <Icon name="user" size={20} color={focused ? '#551E18' : '#000'} />,
    },

    {
        name: screens.Profile,
        focusedRoute: screens.ProfileStack,
        title: 'Profile',
        showInTab: true,
        showInDrawer: false,
        icon: (focused) =>
            <Icon name="user" size={20} color={focused ? '#551E18' : '#000'} />,
    },

    {
        name: screens.ContactStack,
        focusedRoute: screens.ContactStack,
        title: 'Contact Us',
        showInTab: true,
        showInDrawer: true,
        icon: (focused) =>
            <Icon name="phone" size={20} color={focused ? '#551E18' : '#000'} />,
    },
    {
        name: screens.Contact,
        focusedRoute: screens.ContactStack,
        title: 'Contact Us',
        showInTab: false,
        showInDrawer: false,
        icon: (focused) =>
            <Icon name="phone"size={20} color={focused ? '#551E18' : '#000'}/>,
    },
    {
        name: screens.CalculatorStack,
        focusedRoute: screens.CalculatorStack,
        title: 'Calculator',
        showInTab: true,
        showInDrawer: true,
        icon: (focused) =>
            <Icon name="calculator" size={20} color={focused ? '#551E18' : '#000'} />,
    },
    {
        name: screens.Calculator,
        focusedRoute: screens.CalculatorStack,
        title: 'Calculator',
        showInTab: false,
        showInDrawer: false,
        icon: (focused) =>
            <Icon name="calculator"size={20} color={focused ? '#551E18' : '#000'}/>,
    }
];
