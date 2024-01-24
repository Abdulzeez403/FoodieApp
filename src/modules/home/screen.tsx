import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from "../../constants/theme"
import { ApSearchInput } from '../../components/input/searchInput';
import { ApIcon } from '../../components/icon';
import { courses } from "../../data"
import { CourseItem } from '../course/components/courseItem';
import { HomeCourseItem } from './components/courseItem';
import RoundedImage from '../../components/image/avatar';

const HomeScreen = ({ navigation }) => {

    const buttons = [
        {
            name: "Courses",
            img: require("../../../assets/Notify.png")
        },
        {
            name: "LiveClass",
            img: require("../../../assets/anouncement.png")
        },
        {
            name: "Anouncement",
            img: "../../../ assets / Notify.png"
        },
        {
            name: "Notifications",
            img: "../../../ assets / Notify.png"
        }



    ];









    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 10, paddingHorizontal: 10 }} >

                <View>

                    <Text style={{ fontSize: 32, color: "white", }}>
                        Welcome, Sodiq
                    </Text>
                    <Text className='text-slate-300 mt-[-5px]'>What do you want to learn today?</Text>

                </View>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                    <ApIcon
                        size={30}
                        name="notifications"
                        type="MaterialIcons"
                        color="white"
                    />
                    <View>
                        <RoundedImage source={require("../../../assets/studentAvatar.jpeg")} />
                    </View>
                    <View>

                    </View>



                </View>

            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <ApSearchInput />
                <View className='bg-white rounded-md p-1 px-2'>
                    <ApIcon type="Ionicons" name="filter-sharp" size={30} />
                </View>
            </View>

            <View className='bg-white rounded-md'>

                <View
                    style={{ width: 360, height: 200 }}
                    className=' bg-blue-300  my-4 mx-auto items-center rounded-lg'>
                    <View style={{ flexDirection: "row", gap: 10 }}
                        className='flex-1 justify-center items-center m-0 '>

                        <View style={{ flexDirection: "column" }}>
                            <Text className='w-40 font-semibold text-lg text-white'>
                                Relearn, Unlearn and Relearn to see the hidden future
                            </Text>

                            <TouchableOpacity style={{ backgroundColor: "white", padding: 5, borderRadius: 10, width: 100, marginVertical: 5 }}>
                                <Text className='text-center '>
                                    Explore

                                </Text>
                            </TouchableOpacity>
                        </View>
                        <Image source={require("../../../assets/book.png")} style={{ width: 130, height: 130 }} />
                    </View>


                </View>

                <ScrollView
                    contentContainerStyle={{ flexDirection: "column", flexGrow: 1, }}
                >
                    <ScrollView
                        contentContainerStyle={{ flexDirection: "row", flexGrow: 1 }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        {buttons.map((b, index) => (
                            <View style={{ width: 150, paddingHorizontal: 10 }} key={index}>
                                <TouchableOpacity className=' rounded-lg  hover:bg-blue-300 hover:text-white justify-center items-center shadow-md shadow-slate-300 py-2  border-2 border-slate-200 ' style={{ flexDirection: "row" }}
                                >
                                    <Image
                                        source={b.img} style={{ width: 20, height: 20 }} />
                                    <Text className='p-2 text-center '>
                                        {b.name}
                                    </Text>

                                </TouchableOpacity>
                            </View>))}
                    </ScrollView>
                    <View style={{ paddingHorizontal: 10 }}>
                        <View style={{ flexDirection: "row" }} className="justify-between items-center m-0">
                            <Text className='text-lg font-semibold my-2'>Courses</Text>
                            <TouchableOpacity onPress={() => navigation.navigate("Course")} className='bg-blue-200 rounded-lg py-1 px-2 ' style={{ flexDirection: "row" }}>
                                <Text className='text-blue-600 text-md '>See all</Text>
                                <View>
                                    <ApIcon type="MaterialIcons" name="chevron-right" size={20} color="#1E90FF" />
                                </View>

                            </TouchableOpacity>
                        </View>

                        <View style={{ height: 270 }}>
                            <FlatList
                                data={courses}
                                keyExtractor={(course) => course.id}
                                horizontal={true}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item: course }) => (
                                    <TouchableOpacity onPress={() => navigation.navigate("CourseDetail", { course })}>
                                        <HomeCourseItem course={course} />
                                    </TouchableOpacity>
                                )}
                            />
                        </View>

                    </View>


                </ScrollView>

            </View>



        </SafeAreaView >
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.buttonPrimaryColor
    },
    courseContainer: {
        width: 260,
        paddingHorizontal: 4,
        // elevation: 5, // Android shadow
        // shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 60
    }
})