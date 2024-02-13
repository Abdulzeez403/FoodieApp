
import React from "react"
import { ActivityIndicator, FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { ApIcon } from "../../../components/icon";
import { useNavigation } from "@react-navigation/native";
import { ApButton } from "../../../components";
import { ApLoader } from "../../../components/loader";

export const LessonsScreen = ({ route }) => {

    const contents = route.params.contents; //this is an array
    const course = route.params.course;


    const navigation = useNavigation();

    const ContentItem = ({ item, index }) => {

        const number = (index + 1).toString().padStart(2, '0');
        return (
            <TouchableOpacity
                style={{ flexDirection: "column", gap: 10 }}
                onPress={() => navigation.navigate("ContentScreen", { item: item })}
            >
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderRadius: 30, paddingVertical: 5, backgroundColor: "white", borderWidth: 1, borderColor: "grey" }} className="shadow-lg shadow-white px-2">
                    <View style={{ flexDirection: "row", gap: 10, alignItems: "center", backgroundColor: "white" }}  >
                        <View className=" rounded-full bg-blue-200 hover:text-white justify-center items-center  w-10 h-10">
                            <Text className="text-blue-500 font-bold text-lg">{number}</Text>
                        </View>
                        <Text className="font-bold" style={{ fontSize: 18 }}>{item?.title}</Text>
                    </View>
                    <View className=" rounded-full hover:bg-blue-300 hover:text-white justify-center items-center  w-10 h-10 bg-white">
                        <ApIcon type="AntDesign" name="play" size={32} color="blue" />
                        {/* <ApIcon type="MaterialIcons" name="lock-outline" size={32} /> */}
                    </View>
                </View>
            </TouchableOpacity>
        )
    };

    return (
        <View
            className="py-3 bg-white ">
            <View >
                <Text className="text-lg font-bold pb-2">Lessions ({contents?.length})</Text>
            </View>

            {contents?.length === 0 ?
                (<View>
                    <ApLoader />
                </View>) :
                (
                    <ScrollView>
                        <FlatList
                            nestedScrollEnabled={true}
                            scrollEnabled={false}
                            data={contents}
                            contentContainerStyle={{ paddingBottom: 10 }}
                            keyExtractor={item => item._id}
                            renderItem={({ item, index }) => <ContentItem item={item} index={index} />}
                            ListFooterComponent={
                                <ApButton
                                    label='Take Quiz'
                                    onPress={() => navigation.navigate("QuizScreen", { course: course })}

                                />
                            }
                        />
                    </ScrollView>



                )}


        </View>

    )
};

