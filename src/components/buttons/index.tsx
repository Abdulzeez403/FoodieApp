import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed';


interface IProps {
    title?: string,
    onPress?: () => void,
    name?: string,
    type?: string,
    size?: "sm" | "md" | "lg",
    color?: string,
    iconPosition?: "right" | "left" | "top" | "bottom",
    IconSize?: number,
    loading?: boolean

}

const ApButton = ({ title, onPress, name, type, size = "sm", color,
    iconPosition = "left", IconSize, loading = false }: IProps) => {
    return (
        <Button
            title={title}
            onPress={onPress}
            size={size}
            loading={loading}
            iconPosition={iconPosition}
            iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
            icon={{
                name: name,
                type: type,
                size: IconSize,
                color: color,
            }}
            buttonStyle={{ backgroundColor: "green" }}
            containerStyle={{
                height: 200,
                width: 200,
                marginHorizontal: 10,
                marginVertical: 10,
                borderRadius: 5
            }}
            titleStyle={{
                color: 'white',
                marginHorizontal: 20,
            }}
        />
    )
}

export default ApButton

const styles = StyleSheet.create({})