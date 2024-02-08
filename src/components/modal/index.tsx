import React, { useState } from "react";
import { Button, Modal, View, Text, useWindowDimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ApIcon } from "../icon";


interface IModal {
    modalVisible: boolean,
    hideModal: () => void;
    children: React.ReactNode;

}

export const ModalComponent = ({ modalVisible, hideModal, children }: IModal) => {

    const { height } = useWindowDimensions()

    return (



        <Modal
            animationType="slide"
            // transparent={true}
            statusBarTranslucent={true}
            visible={modalVisible}
            onRequestClose={hideModal}

        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} className="relative">
                <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: 350, height: height, }} className="shadow-md shadow-slate-300">
                    <View className="absolute right-2 pt-4">
                        {/* <ApIcon
                            type="AntDesign"
                            name="close" size={25} color="black"
                            onPress={hideModal} /> */}
                    </View>

                    <View className="flex justify-center m-0 items-center" >
                        {children}

                    </View>
                </View>
            </View>
        </Modal>
    );
};
