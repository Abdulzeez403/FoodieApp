import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import React from "react"
import Welcome1 from "../modules/Onboard/components/welcome1"
import Welcome2 from "../modules/Onboard/components/welcome2"
import SignInScreen from '../modules/auth/signin/screen';

const Stack = createNativeStackNavigator();

function ScreensStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignIn">
                <Stack.Screen
                    name="Welcome1"
                    component={Welcome1}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Welcome2"
                    component={Welcome2}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SignIn"
                    component={SignInScreen}
                    options={{ headerShown: false }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default ScreensStack;