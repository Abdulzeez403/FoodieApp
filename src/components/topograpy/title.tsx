import React from 'react'
import { View, Text } from 'react-native';


interface IProps {
    title: string;
}

const ApTitle = ({ title }: IProps) => {
    return (
        <View>
            <Text>{title}</Text>
        </View>
    )
}

export default ApTitle