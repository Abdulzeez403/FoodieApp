import { View, Text, FlatList, Animated, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { CourseItem } from './courseItem'


interface IProps {
    onRefresh: () => void;
    refreshing: any,
    route: any

}

export const CompletedScreen = ({ route, refreshing, onRefresh }: IProps) => {
    const navigation = useNavigation()

    const { courses } = route.params;
    return (
        <ScrollView className='bg-white'>
            <FlatList
                nestedScrollEnabled={true}
                scrollEnabled={false}
                data={courses}
                keyExtractor={(item) => item?.id}
                horizontal={false}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <Animated.View style={{ height: refreshing ? 50 : 0, backgroundColor: "red", }} />
                }
                renderItem={({ item: course, index }) => (
                    <TouchableOpacity key={index} onPress={() => navigation.navigate("CourseDetail", { course })}>
                        <CourseItem course={course} />
                    </TouchableOpacity>
                )}
            // {...panResponder.panHandlers}
            />
        </ScrollView>
    )
}
