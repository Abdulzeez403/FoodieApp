import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ApBackButton, ApHeader } from '../../components/header';
import { SafeAreaView } from 'react-native-safe-area-context';



const CourseDetailScreen = ({ route }) => {
    const { course } = route.params;
    return (
        <SafeAreaView>
            <ApHeader title='CourseDetail' left={<ApBackButton />} />
            <Text>{course?.instructor}</Text>
            <Image
                source={course?.image} style={{ width: 20, height: 20 }} />
        </SafeAreaView>
    )
}

export default CourseDetailScreen

const styles = StyleSheet.create({})