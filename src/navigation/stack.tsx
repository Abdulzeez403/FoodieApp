import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import React from "react"
import { screens } from '../modules/index';

export type RootStackParamList = {
    Home: undefined;
    SignIn: undefined;
    OnBoarding: undefined;
    SignUp: undefined;
    Profile: undefined;
    Course: undefined;
    TabNavigator: undefined;
    CourseDetail: undefined;
    AuthStack: undefined;
    MainStack: undefined;
    CourseStack: undefined;
}

// const Stack = createNativeStackNavigator(RootStackParamList)();
const Stack = createNativeStackNavigator<RootStackParamList>();



const AuthStack = () => (
    <Stack.Navigator initialRouteName="OnBoarding">
        <Stack.Screen name="OnBoarding" component={screens.OnBoardingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={screens.SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={screens.SigninScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
);
const CourseStack = () => (
    <Stack.Navigator initialRouteName="Course">
        <Stack.Screen name="Course" component={screens.CourseScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CourseDetail" component={screens.CourseDetailScreen} options={{ headerShown: false }} />
        {/* Add more screens as needed */}
    </Stack.Navigator>
);

const MainStack = () => (
    <Stack.Navigator initialRouteName="TabNavigator">
        <Stack.Screen
            name={"TabNavigator"} component={screens.TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={screens.HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={screens.ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Course" component={screens.CourseScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CourseDetail" component={screens.CourseDetailScreen} options={{ headerShown: false }} />
        {/* <Stack.Screen name="CourseStack" component={CourseStack} /> */}
    </Stack.Navigator>
);



const ScreensStack = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="AuthStack" component={AuthStack} />
            <Stack.Screen name="MainStack" component={MainStack} />
        </Stack.Navigator>
    </NavigationContainer>
);
// function ScreensStack() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator
//             // initialRouteName={theme.screens.SigninScreen}
//             >
//                 <Stack.Screen
//                     name={"TabNavigator"}
//                     component={screens.TabNavigator}
//                     options={{ headerShown: false }}
//                 />
//                 <Stack.Screen
//                     name="OnBoarding"
//                     component={screens.OnBoardingScreen}
//                     options={{ headerShown: false }}
//                 />
//                 <Stack.Screen
//                     name="SignUp"
//                     component={screens.SignupScreen}
//                     options={{ headerShown: false }}
//                 />
//                 <Stack.Screen
//                     name="SignIn"
//                     component={screens.SigninScreen}
//                     options={{ headerShown: false }}
//                 />

//                 <Stack.Screen
//                     name="Home"
//                     component={screens.HomeScreen}
//                     options={{ headerShown: false }}
//                 />

//                 <Stack.Screen
//                     name="Profile"
//                     component={screens.ProfileScreen}
//                     options={{ headerShown: false }}
//                 />
//                 <Stack.Screen
//                     name="Course"
//                     component={screens.CourseScreen}
//                     options={{ headerShown: false }}
//                 />
//                 <Stack.Screen
//                     name="CourseDetail"
//                     component={screens.CourseDetailScreen}
//                     options={{ headerShown: false }}
//                 />




//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }
export default ScreensStack;