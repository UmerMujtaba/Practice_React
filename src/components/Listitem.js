import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const ListItem = (props) => {
    const { dt_txt, min, max, condition } = props
    const {item, date, temp} = styles
    return (
      <View style={item}>
        <Text style={date}>{dt_txt}</Text>
        <Text style={temp}>{min}</Text>
        <Text style={temp}>{max}</Text>
      </View>
    )
}
const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 6,
        backgroundColor: '#C70039'
      },
      temp: {
        color: 'white',
        fontSize: 20
      },
      date: {
        color: 'white',
        fontSize: 15
      }
})
export default ListItem