import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from "../../constants/theme"
import { ApBackButton, ApHeader } from '../../components/header'
import RoundedImage from '../../components/image/avatar'



const ProfileScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ApHeader title='Profile' left={<ApBackButton />} />

            <View className='flex-1  items-center m-0'>
                <RoundedImage source={require("../../../assets/studentAvatar.jpeg")} className={{}} />
            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: theme.colors.buttonPrimaryColor
    }
})