
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { useState } from "react"
import { AboutScreen } from "./components/about";
import { LessonsScreen } from "./components/lessons";
import { ReviewScreen } from "./components/review";
import { IContent } from "./model";

const Tab = createMaterialTopTabNavigator();

interface IProps {
    course: any,
    contents: IContent[]
}
const CourseNavigatorTab = ({ course, contents }: IProps) => {

    return (
        <Tab.Navigator>
            <Tab.Screen name="About" component={AboutScreen} initialParams={{ course: course }} />
            <Tab.Screen name="Lesson" component={LessonsScreen}
                initialParams={{ contents: contents, course: course }}
            />
            <Tab.Screen name="Review" component={ReviewScreen} />
        </Tab.Navigator>
    );
}

export default CourseNavigatorTab;