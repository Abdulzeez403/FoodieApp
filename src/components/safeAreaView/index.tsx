import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

interface IProps {
    children: React.ReactNode
}

const ApSafeAreaProvider = ({ children }: IProps) => {
    return <SafeAreaProvider style={styles.container}>{children}</SafeAreaProvider>
}

export default ApSafeAreaProvider;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
