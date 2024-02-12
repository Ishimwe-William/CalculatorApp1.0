import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {routes, screens} from "./RouteItems.jsx";
import HomeStack from "./Screens/Home";
import ProfileStack from "./Screens/Profile";
import ContactStack from "./Screens/Contacts";
import CalculatorStack from "./Screens/Calculator";

const Tab = createBottomTabNavigator();

const tabOptions = ({route}) => {
    const item = routes.find(routeItem => routeItem.name === route.name);

    if (!item.showInTab) {
        return {
            tabBarButton: () => null, // Completely hide the tab
        };
    }

    return {
        tabBarIcon: ({focused}) => item.icon(),
        tabBarLabel: item.title || '',
        headerShown: false,
        title: item.title,
    };
};

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={tabOptions}>
            <Tab.Screen name={screens.HomeStack} component={HomeStack}/>
            <Tab.Screen name={screens.CalculatorStack} component={CalculatorStack}/>
            <Tab.Screen name={screens.ContactStack} component={ContactStack}/>
            <Tab.Screen name={screens.ProfileStack} component={ProfileStack}/>
        </Tab.Navigator>
    );
};

export default TabNavigator;
