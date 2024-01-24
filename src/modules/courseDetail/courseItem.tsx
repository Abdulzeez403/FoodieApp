import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { ApIcon } from "../../components/icon";
interface IProps {
    course: any
}

export const CourseDetailComponent = ({ course }: IProps) => {
    return (
        <View style={styles.courseContainer}>
            <View className=''>
                <Image source={course?.image} style={{
                    width: 400,
                    height: 200,
                    objectFit: "contain"
                }} />
            </View>

            <View>
                <View className='flex justify-center m-0 items-center my-4'>
                    <View style={{ flexDirection: "row", gap: 10 }}>
                        <View style={{ flexDirection: "row", gap: 10 }}>
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
                    <Text className='font-semibold text-lg'>
                        {course?.title}
                    </Text>
                    <Text>
                        <Text className='text-red-400'>Instructor:</Text> {course?.instructor}
                    </Text>
                    <Text className="font-semibold">Description</Text>
                    <Text className="px-4 text-center leading-4">{course?.description}</Text>
                </View>

            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    courseContainer: {
        // width: 260,
        elevation: 2, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 4,



    }
})