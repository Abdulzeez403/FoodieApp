import React from 'react'
import { View, Text } from 'react-native';


interface IProps {
    subtitle: string;
}

const ApSubtitle = ({ subtitle }: IProps) => {
    return (
        <View>
            <Text>{subtitle}</Text>
        </View>
    )
}

export default ApSubtitle