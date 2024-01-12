import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import ApTextInput from '../../../components/input'
import { Formik, FormikProps } from 'formik'
import ApSafeAreaProvider from '../../../components/safeAreaView'
import { ApButton } from '../../../components'
import ApTitle from '../../../components/topography/title'
import ApSubtitle from '../../../components/topography/subtitle'
import { theme } from '../../../constants/theme'

const SignupScreen = ({ navigation }) => {

    const handleSubmit = () => {
        console.log("submit")
    }
    return (
        <ApSafeAreaProvider>

            <View>
                <View className='my-5' >
                    <ApTitle>Sign Up</ApTitle>
                    <ApSubtitle>Welcome to LightBoard</ApSubtitle>
                </View>
                <Formik className=""
                    // validationSchema={FormSchema}
                    onSubmit={handleSubmit}
                    initialValues={{ email: "", password: "" }}
                >
                    {(props: FormikProps<any>) => (
                        <>
                            <ApTextInput
                                label="FirstName"
                                placeholder='Teacher1'
                                name="email"
                                formikProps={props}
                            />

                            <ApTextInput
                                label="LastName"
                                placeholder="lastName"
                                name="password"
                                formikProps={props}
                            />
                            <ApTextInput
                                label='Email'
                                placeholder="Email"
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
                                    label='Submit'
                                    type="primary"
                                    round="lg" />

                            </View>

                            <View>
                                <TouchableOpacity
                                    onPress={() => { navigation.navigate(theme.screens.SigninScreen) }}>
                                    <Text className='text-center text-red-200'>
                                        Sign in to your account!</Text>
                                </TouchableOpacity>


                            </View>

                        </>

                    )}
                </Formik>
            </View>
        </ApSafeAreaProvider>


    )
}

export default SignupScreen