import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ApTitle from '../../../components/topography/title'
import ApTextInput from '../../../components/input'
import { Formik, FormikProps } from 'formik'
import ApButton from '../../../components/buttons'
import { Slider } from '@rneui/base/dist/Slider'

const SignInScreen = () => {

    const handleSubmit = () => {
        console.log("submit")
    }
    return (
        <SafeAreaView>
            <View>
                <ImageBackground source={require("../../../../assets/Pattern1.png")} style={styles.backgroundImage} />

            </View>
            <View className='flex justify-center m-0 items-center mt-20'>
                <View>
                    <Image source={require("../../../../assets/Logo.png")} />
                </View>
                <ApTitle >Log Into Your Account</ApTitle>

                <Formik className="w-full"
                    // validationSchema={FormSchema}
                    onSubmit={handleSubmit}
                    initialValues={{ email: "", password: "" }}
                >
                    {(props: FormikProps<any>) => (

                        <>
                            <ApTextInput
                                placeholder='Email'
                                name="email"
                                formikProps={props}
                            />

                            <ApTextInput
                                placeholder="Password"
                                name="password"
                                formikProps={props}
                            />
                            {/* 
                            <View>
                                <ApTitle>Or Continue with</ApTitle>
                                <View>
                                    <ApButton 
                                    name="home" title='facebook' type="font-awesome" />

                                </View>
                            </View> */}
                            <View className='my-6'>
                                <ApButton title="Submit" />

                            </View>

                        </>

                    )}
                </Formik>
            </View>

        </SafeAreaView>
    )
}

export default SignInScreen

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