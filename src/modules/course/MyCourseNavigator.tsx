import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { OngoingScreen } from "./components/ongoing";
import { CompletedScreen } from "./components/completed";
import React from "react";



const Tab = createMaterialTopTabNavigator();

interface IProps {
    courses: any,
    onRefresh: () => void;
    refreshing: any
}

const MyCourseNavigatorTab = ({ courses, refreshing, onRefresh }: IProps) => {
    return (
        <Tab.Navigator >
            <Tab.Screen name="Ongoing" component={OngoingScreen}
                initialParams={{ courses: courses, onRefresh: onRefresh, refreshing: refreshing }} />
            <Tab.Screen name="Completed" component={CompletedScreen} initialParams={{ courses: courses, onRefresh: onRefresh, refreshing: refreshing }} />
        </Tab.Navigator>
    );
}

export default MyCourseNavigatorTab
