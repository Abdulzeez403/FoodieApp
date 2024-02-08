import React, { useState, useEffect, useRef } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, Animated, SafeAreaView, PanResponder } from 'react-native';
import { useCouresContext } from './context';
import { CourseItem } from './components/courseItem';

const CourseScreen = ({ navigation }) => {
    const { getCourses, courses } = useCouresContext();

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

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (_event, gestureState) => {
                // Allow pan responder if the user is scrolling down and not already refreshing
                return gestureState.dy > 0 && !refreshing;
            },
            onPanResponderRelease: (_event, gestureState) => {
                if (gestureState.dy > 50) { // Check if the user has dragged down enough
                    onRefresh();
                }
            },
        })
    ).current;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.courseView}>
                <FlatList
                    data={courses}
                    keyExtractor={course => course._id}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <Animated.View style={{ height: refreshing ? 50 : 0, backgroundColor: "red", }} />
                    }
                    renderItem={({ item: course }) => (
                        <TouchableOpacity onPress={() => navigation.navigate("CourseDetail", { course })}>
                            <CourseItem course={course} />
                        </TouchableOpacity>
                    )}
                    {...panResponder.panHandlers}
                />
            </View>
        </SafeAreaView>
    );
};

export default CourseScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    courseView: {
        flex: 1,
        width: '90%', // 90% of the screen width
    },
});
