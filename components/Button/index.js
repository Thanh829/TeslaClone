import React from 'react'
import { Pressable, Text, View } from 'react-native'
import styles from './styles'

const Button = (props) => {

    const backgroundColor = props.type === 'primary' ? '#171A20CC' : '#FFFFFFA6'
    const textColor = props.type === 'primary' ? '#FFFFFF' : '#171A20'

    return (
        <View style={styles.container}>
            <Pressable style={[styles.button, { backgroundColor: backgroundColor }]} onPress={() => props.onPress()}>
                <Text style={[styles.text, { color: textColor }]}>{props.content}</Text>
            </Pressable>
        </View>
    )
}

export default Button
