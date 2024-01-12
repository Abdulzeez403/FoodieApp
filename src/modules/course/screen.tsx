import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { courses } from "../../data"
import { CourseItem } from './components/courseItem'

type Props = {}
const { width, height } = Dimensions.get('window')


const CourseScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.courseView}>
                <FlatList
                    data={courses}
                    keyExtractor={(course) => course.id}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item: course }) => (
                        <TouchableOpacity onPress={() => navigation.navigate("CourseDetail", { course })}>
                            <CourseItem course={course} />
                        </TouchableOpacity>
                    )}
                />


            </View>

        </SafeAreaView>
    )
}

export default CourseScreen
const styles = StyleSheet.create({
    container: {

        justifyContent: 'center',
        alignItems: 'center',
    },
    courseView: {
        width: width * 0.9, // 80% of the screen width
        // height: height * 0.5,
    }
})