import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ApTitle from '../../../components/topography/title';
import ApTextInput from '../../../components/input';
import { Formik, FormikProps } from 'formik';
import { ApButton } from '../../../components';
import ApSubtitle from '../../../components/topography/subtitle';
import { useAuthContext } from '../../../context';

const SigninScreen = ({ navigation }) => {
    const { loading, signIn } = useAuthContext();

    const handleSubmit = async (payload: any) => {
        try {
            await signIn(payload);
            ToastAndroid.show('You are welcome', ToastAndroid.SHORT);
            navigation.navigate('MainStack');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentContainer}>
                <ApTitle>Sign In</ApTitle>
                <ApSubtitle>Welcome to LightBoard</ApSubtitle>
                <Formik
                    style={styles.formContainer}
                    onSubmit={handleSubmit}
                    initialValues={{ email: '', password: '' }}
                >
                    {(props: FormikProps<any>) => (
                        <>
                            <ApTextInput
                                label="Email"
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

                            <View style={styles.buttonContainer}>
                                <ApButton
                                    label={loading ? 'Loading...' : 'Sign In'}
                                    type="primary"
                                    round="lg"
                                    onPress={props.handleSubmit}
                                />
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                                    <Text style={styles.textLink}>
                                        Don't have an account yet?
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    )}
                </Formik>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    contentContainer: {
        width: '100%',
    },
    formContainer: {
        width: '100%',
    },
    buttonContainer: {
        marginTop: 10,
    },
    textLink: {
        textAlign: 'center',
        color: 'red',
    },
});

export default SigninScreen;
