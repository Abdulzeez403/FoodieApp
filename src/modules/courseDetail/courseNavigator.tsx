
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { useState } from "react"
import { AboutScreen } from "./components/about";
import { LessonsScreen } from "./components/lessons";
import { ReviewScreen } from "./components/review";

const Tab = createMaterialTopTabNavigator();

const CourseNavigatorTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="About" component={AboutScreen} />
            <Tab.Screen name="Lesson" component={LessonsScreen} />
            <Tab.Screen name="Review" component={ReviewScreen} />
        </Tab.Navigator>
    );
}

export default CourseNavigatorTab;