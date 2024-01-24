import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ApIcon } from '../../../components/icon'

interface Props {
    course: any
}

export const HomeCourseItem = ({ course }: Props) => {
    return (
        <View style={styles.courseContainer} className='shadow-md shadow-slate-300'>
            <View className='p-4 pt-4'>
                <Image source={course?.image} style={{
                    width: 230, height: 130, borderRadius: 30,
                }} />
            </View>

            <View>

                <View className='px-5 pb-3'>
                    <View style={{ flexDirection: "row", gap: 6 }}>
                        <View style={{ flexDirection: "row", gap: 8 }}>
                            <View style={{ flexDirection: "row", gap: 8 }}>
                                <ApIcon type="MaterialIcons" name="video-collection" size={20} color="#1E90FF" />
                                <View>
                                    <Text>{course?.lessons} Lessons</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", gap: 8 }}>
                                <ApIcon type="MaterialIcons" name="timer" size={20} color="red" />
                                <View>
                                    <Text>{course?.time?.hour}hr {course?.time?.minute}min, {course?.time?.second}sec</Text>
                                </View>
                            </View>

                        </View>

                    </View>
                    <Text className='font-semibold text-md'>
                        {course?.title}
                    </Text>
                    <Text>
                        <Text className='text-red-400'>Instructor:</Text> {course?.instructor}
                    </Text>
                </View>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    courseContainer: {
        width: 260,
        elevation: 2, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 4,



    }
})