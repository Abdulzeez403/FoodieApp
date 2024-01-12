import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from "../../constants/theme"
import { ApSearchInput } from '../../components/input/searchInput';
import { ApIcon } from '../../components/icon';
import { courses } from "../../data"
import { CourseItem } from '../course/components/courseItem';

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
                    {/* <ApAvatar img="../../../assets/avatar.png" /> */}
                    <View style={{ width: 5, height: 5 }}>
                        {/* <Image source={require("../../../assets/avatar.png")}/> */}
                    </View>


                </View>
                <View>
                    <Text className='text-white font-semibold'>Abdulazeez Sodiq</Text>
                </View>
                <View>
                    <Text>Image</Text>
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
                    <View style={{ flexDirection: "row" }}
                        className='flex-1 justify-center items-center m-0 '>

                        <Text className='w-40 font-semibold text-lg text-white'>
                            Relearn, Unlearn and Relearn to see the hidden future
                        </Text>

                        <Image source={require("../../../assets/book.png")} style={{ width: 130, height: 130 }} />


                    </View>


                </View>

                <ScrollView
                    contentContainerStyle={{ flexDirection: "row", flexGrow: 1 }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {buttons.map((b, index) => (
                        <View style={{ width: 115, paddingHorizontal: 10 }} key={index}>
                            <TouchableOpacity className=' rounded-lg border-2 border-blue-300 hover:bg-blue-300 hover:text-white justify-center items-center py-3' style={{ flexDirection: "column" }}
                            >
                                <Image
                                    source={b.img} style={{ width: 20, height: 20 }} />
                                <Text className='p-2 text-center '>
                                    {b.name}
                                </Text>

                            </TouchableOpacity>
                        </View>))}
                </ScrollView>
                {/* <MyCarousel /> */}
                <View style={{ paddingHorizontal: 10 }}>
                    <View style={{ flexDirection: "row" }} className="justify-between items-center m-0">
                        <Text className='text-lg font-semibold my-2'>Courses</Text>
                        <Text className='text-blue-600 text-lg'>See all</Text>
                    </View>

                    <View style={{ height: 270 }}>
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

                </View>
            </View>


        </SafeAreaView >
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.buttonPrimaryColor
    }
})