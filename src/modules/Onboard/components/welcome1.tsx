import React from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import ApTitle from '../../../components/topography/title'
import ApSubtitle from '../../../components/topography/subtitle'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image, Text } from '@rneui/themed';
import ApButton from '../../../components/buttons'

import { useNavigation } from '@react-navigation/native'

const Welcome1 = () => {
    const navigation = useNavigation()

    return (
        <SafeAreaView className=''>
            <View className='pt-[40px]'>
                <View className=''>
                    <Image source={require("./../../../../assets/Illustartion.png")} style={{ width: 400, height: 400 }} />

                </View>
                <View className='my-7  px-10'>
                    <View className='flex justify-center m-0 items-center '>
                        <ApTitle >Find Your Comfort Food here!</ApTitle>
                        <ApSubtitle >
                            Here you can find a chief who can crack what you stomach desire!
                        </ApSubtitle>

                    </View>

                </View>
                <View className='flex justify-center m-0 items-center'>
                    <ApButton title="Next"
                        onPress={() => { navigation.navigate('Welcome2') }} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Welcome1

const styles = StyleSheet.create({
    item: {
        aspectRatio: 1,
        width: '100%',
        flex: 1,

    },
});