import { StyleSheet, SafeAreaView } from 'react-native';
import ScreensStack from "./src/navigation/stack.tsx"
import ApSafeAreaView from "./src/components/safeAreaView/safeAreaProvider.tsx"



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScreensStack />
    </SafeAreaView>


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




