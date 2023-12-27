import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
// import { Text } from '@rneui/themed';


interface IProps {
    children: string
}

const ApTitle = ({ children }: IProps) => {
    return (
        <View >
            <Text style={styles.TextStyle}>{children}</Text>
        </View>
    )
}

export default ApTitle

const styles = StyleSheet.create({
    TextStyle: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 28

    }
})




