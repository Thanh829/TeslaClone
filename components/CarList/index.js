import React from 'react'
import { Dimensions, FlatList, View } from 'react-native'
import styles from './styles'
import car from './car'
import CarItem from '../CarItem'

const CarList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList data={car} renderItem={({ item }) => <CarItem car={item}></CarItem>}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}></FlatList>
        </View>
    )
}

export default CarList
