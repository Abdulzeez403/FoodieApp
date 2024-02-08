import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList, Button } from 'react-native'
import React from 'react'
import { theme } from "../../constants/theme"
import { ApSearchInput } from '../../components/input/searchInput';
import { ApIcon } from '../../components/icon';
import { courses } from "../../data"
import { HomeCourseItem } from './components/courseItem';
import RoundedImage from '../../components/image/avatar';
import { SafeAreaView } from 'react-native-safe-area-context';

interface IButtonCategory {
    name: string,
    iconName: string,
    iconType: any
}

const HomeScreen = ({ navigation }) => {

    const buttons: IButtonCategory[] = [
        {
            name: "Courses",
            iconName: "book",
            iconType: "AntDesign"

        },
        {
            name: " Anouncement",
            iconName: "notification",
            iconType: "AntDesign"

        },
        {
            name: "LiveClass",
            iconName: "live-tv",
            iconType: "MaterialIcons"


        },
        {
            name: "Notifications",
            iconName: "notifications-outline",
            iconType: "Ionicons"


        }



    ];









    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 10, paddingHorizontal: 10 }} >

                <View>

                    {/* <Text style={{ fontSize: 32, color: "white", fontFamily:theme.fonts.Montserrat_500Medium }}>
                        Welcome, Sodiq
                    </Text> */}
                    <Text style={theme.fonts.H1}>
                        Welcome, Sodiq
                    </Text>

                    <Text className='mt-[-5px]' style={{ color: "white", fontFamily: theme.fonts.Montserrat_500Medium.fontFamily }}>What do you want to learn today?</Text>

                </View>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                    <ApIcon
                        size={30}
                        name="notifications"
                        type="MaterialIcons"
                        color="white"
                    />
                    <View>
                        <RoundedImage source={require("../../../assets/studentAvatar.jpeg")}
                            width={30} height={30}
                        />
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
                        className='flex-1 justify-center items-center m-0'>
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
            </View>

            <ScrollView
                showsHorizontalScrollIndicator={false}
            >
                <View style={{ backgroundColor: "white" }}>
                    <View style={{ flexDirection: "row" }} className="justify-between items-center m-0 px-3">
                        <Text className='text-lg font-semibold my-2'>
                            Categories</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Course")} className='bg-blue-200 rounded-lg py-1 px-2 ' style={{ flexDirection: "row" }}>
                            <Text className='text-blue-600 text-md '>See all</Text>
                            <View>
                                <ApIcon type="MaterialIcons" name="chevron-right" size={20} color="#1E90FF" />
                            </View>

                        </TouchableOpacity>
                    </View>
                    <ScrollView
                        contentContainerStyle={{ flexDirection: "row", flexGrow: 1 }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        {buttons.map((b, index) => (
                            <View style={{ paddingHorizontal: 10 }} key={index}>
                                <TouchableOpacity
                                    style={{ flexDirection: "column" }}
                                >
                                    <View className=" rounded-full hover:bg-blue-300 hover:text-white justify-center items-center shadow-md shadow-slate-300 bg-blue-300  w-20 h-20">
                                        <ApIcon
                                            type={b?.iconType as any}
                                            name={b?.iconName} size={35} color="white" />
                                    </View>

                                    <Text className=' text-center  '>
                                        {b.name}
                                    </Text>

                                </TouchableOpacity>
                            </View>))}
                    </ScrollView>
                    <View style={{ paddingHorizontal: 10, paddingTop: 5 }}>
                        <View style={{ flexDirection: "row" }} className="justify-between items-center m-0">
                            <Text className='text-lg font-semibold my-2'>Popular Courses</Text>
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

                </View>

            </ScrollView>




        </SafeAreaView >
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.primaryColor
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