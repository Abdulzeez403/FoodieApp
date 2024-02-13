import { StyleSheet, SafeAreaView } from 'react-native';
import ScreensStack from "./src/navigation/stack.tsx"
import { useFonts } from 'expo-font'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './src/context.tsx';
import React, { useCallback } from 'react';
import { CourseProvider } from "./src/modules/course/context.tsx"
import { ContentProvider } from "./src/modules/courseDetail/context.tsx"
import { LessonProvider } from './src/modules/lesson/context.tsx';
<ScreensStack />
import { QuizProvider } from './src/modules/quiz/context.tsx';


export default function App() {
    const [fontsLoaded] = useFonts({
        'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
        'Montserrat-Bold': require('./assets/fonts/Montserrat-BlackItalic.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }
    return (
        <SafeAreaProvider >
            <AuthProvider>
                <CourseProvider>
                    <ContentProvider>
                        <LessonProvider>
                            <QuizProvider>
                                <ScreensStack />
                            </QuizProvider>
                        </LessonProvider>

                    </ContentProvider>

                </CourseProvider>
            </AuthProvider>
        </SafeAreaProvider>




    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});




