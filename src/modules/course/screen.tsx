import React, { useState, useEffect, useRef } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, Animated, SafeAreaView, PanResponder, useWindowDimensions } from 'react-native';
import { useCourseContext } from './context';
import { ApBackButton, ApHeader } from '../../components/header';
import MyCourseNavigatorTab from './MyCourseNavigator';
import { OngoingScreen } from './components/ongoing';

const CourseScreen = ({ navigation }) => {
    const { getCourses, courses } = useCourseContext();
    const { width } = useWindowDimensions()

    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState(courses);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setRefreshing(true);
            const newData = await getCourses();
            setData(newData as any);
        } catch (error) {
            console.error('Error fetching courses:', error);
        } finally {
            setRefreshing(false);
        }
    };

    const onRefresh = () => {
        fetchData();
    };



    return (
        <SafeAreaView style={{ width: width }}>
            <ApHeader title="My Course" left={<ApBackButton />} />

            <MyCourseNavigatorTab courses={courses} onRefresh={onRefresh} refreshing={refreshing} />
        </SafeAreaView>
    );
};

export default CourseScreen;

const styles = StyleSheet.create({
    container: {

        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // marginVertical: 20,
        // backgroundColor: "white"


    },
    courseView: {
        flex: 1,
        // width: '90%', // 90% of the screen width
    },
});
