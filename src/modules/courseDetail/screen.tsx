import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { CourseDetailComponent } from './courseItem';
import { ApIcon } from '../../components/icon';
import CourseNavigatorTab from './courseNavigator';
import { CourseHeader } from './components/header';
import { ApButton } from '../../components';


interface IProps {
    icon: any, title: string
}
const CourseDetailScreen = ({ route }) => {

    const Components1 = ({ icon, title }: IProps) => (
        <View style={{ flexDirection: "row", gap: 6 }} className=' '>
            <Text>
                {icon}
            </Text>
            <Text className='font-semibold ' style={{ fontSize: 17 }}>{title}</Text>
        </View>
    )

    const { course } = route.params;
    return (
        <SafeAreaView style={styles.container} >
            <View>
                <View className="relative">

                    <View style={{ display: "flex", justifyContent: "center", margin: 0, alignItems: "center", width: "100%", }} >

                        <View>
                            <CourseDetailComponent course={course} />
                        </View>

                    </View>
                    <View className='absolute top-10 w-full'>
                        <CourseHeader />
                    </View>
                </View>



                <View style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30, width: "100%", height: "60%", position: "relative", bottom: 20, zIndex: 10, backgroundColor: "white", paddingVertical: 15, paddingHorizontal: 15 }}>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 5 }} className=''>
                        <Text className='bg-yellow-300 text-yellow-600 rounded-lg px-2'>Best Selling</Text>
                        <View style={{ flexDirection: "row", gap: 6 }} className='  '>
                            <ApIcon type="MaterialIcons" name="star" size={20} color="gold" />
                            <Text className='font-semibold text-md'>4.6(300 Reviews)</Text>
                        </View>

                    </View>

                    <View>
                        <Text className='text-center font-bold' style={{ fontSize: 25 }}>{course?.title}</Text>
                    </View>
                    <View style={{ flexDirection: "row", gap: 14 }}>
                        <Components1 icon={<ApIcon type="MaterialIcons" name="person" size={22} />}
                            title={course?.instructor}
                        />
                        <Components1 icon={<ApIcon type="AntDesign" name="playcircleo" size={22} />}
                            title="23 Lessons"
                        />
                        <Components1 icon={<ApIcon type="FontAwesome"
                            name="certificate" size={22} />}
                            title="Certification"
                        />
                    </View>
                    <CourseNavigatorTab />


                </View>

            </View>
            <View style={styles.stickyButtonContainer} className='z-10'>
                {/* <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Enroll Now</Text>
                </TouchableOpacity> */}
                <ApButton label='Enroll Now'
                    onPress={() => console.log('pressed')} />
            </View>
        </SafeAreaView>

    )
}

export default CourseDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 8,
        backgroundColor: "white",
        justifyContent: 'space-between',
    },
    buttonContainer: {
        backgroundColor: 'blue', // Adjust color as needed
        padding: 16, // Adjust padding as needed
        // paddingHorizontal: 60,
        borderRadius: 15, // Adjust border radius as needed
        alignItems: 'center',
    },
    buttonText: {
        color: 'white', // Adjust text color as needed
        fontSize: 16, // Adjust font size as needed
    },
    buttonStatus: {
        backgroundColor: 'white', // Adjust color as needed
        padding: 16, // Adjust padding as needed
        borderRadius: 15, // Adjust border radius as needed
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'blue',
        color: "blue",
        paddingHorizontal: 50,

    },
    buttonStatusText: {
        color: 'blue', // Adjust text color as needed
        fontSize: 16, // Adjust font size as needed
    },
    stickyButtonContainer: {
        position: 'absolute',
        bottom: 10,
        // top: 10,
        left: 16,
        right: 16,
        // flexDirection: 'row',
        // justifyContent: "space-between"
        gap: 20
    },

})