import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ApTitle from '../../../components/topography/title'
import ApTextInput from '../../../components/input'
import { Formik, FormikProps } from 'formik'
import { ApBackButton, ApHeader } from '../../../components/header'
import { ApButton } from '../../../components'
import { theme } from '../../../constants/theme'
import ApSubtitle from '../../../components/topography/subtitle'

const SigninScreen = ({ navigation }) => {


    const handleSubmit = () => {
        console.log("submit")
    }
    return (
        <SafeAreaView>


            <View>

                <View className='flex justify-center m-0 items-center mt-20'>

                    <ApTitle >Sign In</ApTitle>
                    <ApSubtitle>Welcome to LightBoard</ApSubtitle>


                    <Formik className="w-full"
                        // validationSchema={FormSchema}
                        onSubmit={handleSubmit}
                        initialValues={{ email: "", password: "" }}
                    >
                        {(props: FormikProps<any>) => (

                            <>
                                <ApTextInput
                                    label="Email"
                                    placeholder='Email'
                                    name="email"
                                    formikProps={props}
                                />

                                <ApTextInput
                                    label="Password"
                                    placeholder="Password"
                                    name="password"
                                    formikProps={props}
                                />

                                <View className='my-2'>
                                    <ApButton
                                        label='Log In'
                                        type="primary"
                                        round="lg" />
                                </View>
                                <View>
                                    <TouchableOpacity
                                        onPress={() => {
                                            navigation.navigate("MainStack")
                                        }}>
                                        <Text className='text-center text-red-200'>
                                            Don't have an account yet?</Text>
                                    </TouchableOpacity>


                                </View>

                            </>

                        )}
                    </Formik>
                </View>
            </View>


        </SafeAreaView>
    )
}

export default SigninScreen

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover',
        width: 500,
        height: 300,
        placeholder: 20
    }
})