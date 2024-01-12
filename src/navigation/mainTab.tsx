// BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ApIcon } from '../components/icon';
import { theme } from "../constants/theme"
import { screens } from "../modules/index"



const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>

            <Tab.Screen
                options={{
                    tabBarActiveTintColor: "red",
                    headerShown: false,
                    tabBarIcon: () => (
                        <ApIcon type="AntDesign" name="appstore-o" size={24} />
                    ),
                }}
                name={theme.screens.HomeScreen}
                component={screens.HomeScreen}
            />
            <Tab.Screen
                options={{
                    tabBarActiveTintColor: "red",
                    headerShown: false,

                    tabBarIcon: () => (
                        <ApIcon type="MaterialIcons" name="library-books" size={24} />
                    ),
                }}
                name={theme.screens.CourseScreen}
                component={screens.CourseScreen}
            />
            <Tab.Screen
                options={{
                    tabBarActiveTintColor: "red",
                    headerShown: false,

                    tabBarIcon: () => (
                        <ApIcon type="Ionicons" name="person-circle-outline" size={24} />
                    ),
                }}
                name={theme.screens.ProfileScreen}
                component={screens.ProfileScreen}
            />
            {/* <Tab.Screen
                options={{
                    tabBarActiveTintColor: "red",
                    tabBarIcon: () => (
                        <ApIcon type="Ionicons" name="home-outline" size={24} />
                    ),
                }}
                name={theme.screens.HomeScreen}
                component={screens.HomeScreen}
            /> */}
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
