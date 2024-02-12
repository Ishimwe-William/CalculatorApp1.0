import React from 'react';
import { View } from 'react-native';
import MyKeyboard from '../calculator/component/MyKeyboard';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Calculator = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <MyKeyboard />
        </View>
    );
};

const CalculatorStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Calculator" component={Calculator} />
        </Stack.Navigator>
    );
};

export default CalculatorStack;
