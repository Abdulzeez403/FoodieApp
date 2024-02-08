
import React from "react"
import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { ApIcon } from "../../../components/icon";
import { useNavigation } from "@react-navigation/native";

export const LessonsScreen = () => {
    const navigation = useNavigation();
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            className="py-3 bg-white ">
            <View >
                <Text className="text-lg font-bold pb-2">Lessions (23)</Text>
            </View>


            <TouchableOpacity style={{ flexDirection: "column", gap: 10 }} onPress={() => navigation.navigate("ContentScreen")}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderRadius: 30, paddingVertical: 5, backgroundColor: "white", borderWidth: 1, borderColor: "grey" }} className="shadow-lg shadow-white px-2">
                    <View style={{ flexDirection: "row", gap: 10, alignItems: "center", backgroundColor: "white" }}  >

                        <View className=" rounded-full bg-blue-200 hover:text-white justify-center items-center  w-10 h-10">
                            <Text className="text-blue-500 font-bold text-lg">01</Text>
                        </View>
                        <Text className="font-bold" style={{ fontSize: 18 }}>Introduction to Html</Text>

                    </View>
                    <View className=" rounded-full hover:bg-blue-300 hover:text-white justify-center items-center  w-10 h-10 bg-white">
                        <ApIcon type="AntDesign" name="play" size={32}
                            color="blue"
                        />
                    </View>
                </View>

                {/* <View style={{ flexDirection: "row", justifyContent: "space-between", borderRadius: 30, paddingVertical: 5, backgroundColor: "white", borderWidth: 1, borderColor: "grey" }} className="shadow-lg shadow-white px-2">
                    <View style={{ flexDirection: "row", gap: 10, alignItems: "center", backgroundColor: "white" }}  >

                        <View className=" rounded-full bg-blue-200 hover:text-white justify-center items-center  w-10 h-10">
                            <Text className="text-blue-500 font-bold text-lg">01</Text>
                        </View>
                        <Text className="font-bold" style={{ fontSize: 18 }}>Introduction to Html</Text>

                    </View>
                    <View className=" rounded-full hover:bg-blue-300 hover:text-white justify-center items-center  w-10 h-10 bg-white">
                        <ApIcon type="MaterialIcons" name="lock-outline" size={32}

                        />
                    </View>
                </View> */}
            </TouchableOpacity>


        </ScrollView>

    )
};

