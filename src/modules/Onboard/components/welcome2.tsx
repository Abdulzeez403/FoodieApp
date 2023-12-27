import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import ApButton from '../../../components/buttons'
import ApSubtitle from '../../../components/topography/subtitle'
import ApTitle from '../../../components/topography/title'
import { useNavigation } from '@react-navigation/native'


const Welcome2 = () => {
    const navigation = useNavigation()

    return (
        <SafeAreaView className=''>
            <View className='pt-[40px]'>
                <View className=''>
                    <Image source={require("./../../../../assets/Illustartion1.png")} style={{ width: 400, height: 400 }} />

                </View>
                <View className='my-7  px-10'>
                    <View className='flex justify-center m-0 items-center '>
                        <ApTitle >Foodie Is Where Your Delicious meal reside</ApTitle>
                        <ApSubtitle >
                            Enjoy fast ans smooth food delivery at your doorstep!
                        </ApSubtitle>

                    </View>

                </View>
                <View className='flex justify-center m-0 items-center'>
                    <ApButton title="Next"
                        onPress={() => navigation.navigate('SignIn')} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Welcome2

const styles = StyleSheet.create({})