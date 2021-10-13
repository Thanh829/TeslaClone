import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import Button from '../Button'
import car from '../CarList/car'
import styles from './styles'

const CarItem = (props) => {
    const { name, tagline, image, taglineCTA } = props.car
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={image} style={styles.image} />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{tagline}{' '}
                    <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button content={'Custom Order'} type='primary' onPress={() => { console.warn('Hi Thạnh') }}></Button>
                <Button content={'Existing Inventory'} type='secondary' onPress={() => { console.warn('Hi Nhi') }}></Button>
            </View>

        </View>
    )
}

export default CarItem
