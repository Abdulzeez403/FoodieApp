import { StyleSheet, SafeAreaView } from 'react-native';
import ScreensStack from "./src/navigation/stack.tsx"
import { useFonts } from 'expo-font'
import { SafeAreaProvider } from 'react-native-safe-area-context';





export default function App() {
    // const [fontsLoaded] = useFonts({
    //     'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    //     'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    //     'Montserrat-Bold': require('./assets/fonts/Montserrat-BlackItalic.ttf'),
    //     // 'Inter-Medium': require('./src/assets/fonts/Inter-Medium.ttf'),
    //     // 'Inter-SemiBold': require('./src/assets/fonts/Inter-SemiBold.ttf'),
    //     // 'Inter-Bold': require('./src/assets/fonts/Inter-Bold.ttf'),
    // });

    //   const onLayoutRootView = useCallback(async () => {
    //     if (fontsLoaded) {
    //       await SplashScreen.hideAsync();
    //     }
    //   }, [fontsLoaded]);

    //   if (!fontsLoaded) {
    //     return null;
    //   }
    return (
        <SafeAreaProvider >
            <ScreensStack />
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




