import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ApBackButton, ApHeader } from '../../components/header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HomeCourseItem } from '../home/components/courseItem';
import { TouchableOpacity } from 'react-native';
import { CourseDetailComponent } from './courseItem';



const CourseDetailScreen = ({ route }) => {

    const { course } = route.params;
    return (
        <SafeAreaView>
            <ApHeader title='CourseDetail' left={<ApBackButton />} />
            <View style={{ display: "flex", justifyContent: "center", margin: 0, alignItems: "center", width: "100%" }}>

                <CourseDetailComponent course={course} />
                <View style={{ flexDirection: "row", gap: 10 }}>
                    <TouchableOpacity className='bg-blue-300 p-2 rounded-md'>
                        <Text>
                            Enroll For Free
                        </Text>
                    </TouchableOpacity>

                    {/* <TouchableOpacity className='bg-blue-300 p-2 rounded-md'>
                        <Text>
                            Enroll
                        </Text>
                    </TouchableOpacity> */}
                </View>
            </View>
            <View>

            </View>
        </SafeAreaView>
    )
}

export default CourseDetailScreen

const styles = StyleSheet.create({

})