import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

import { 
    SafeAreaView, 
    Text, 
    Image, 
    StyleSheet, 
    ImageBackground, 
    StatusBar,
    View
} 
from 'react-native'

const City = () => {
    const {
        container,
        cityTxt,
        cityName,
        countryName,
        populationText,
        populationWrapper,
        riseSetText,
        riseSetWrapper,
        rowLayout,
        imageLayout
    } = styles
    return(
        <SafeAreaView style={container}>
           <ImageBackground 
            source={require('../../assets/city-background.jpg')} 
            style={imageLayout}
           > 
            <Text style={[cityName, cityTxt]}>London</Text>
            <Text style={[countryName, cityTxt]}>UK</Text>
            <View style={[populationWrapper, rowLayout]}>
            <Icon name={'user'} size={30} color='white' />

                {/* <Feather name={'user'} size={50} color={'red'}/> */}
                <Text style={populationText}>8000</Text>
            </View>
            <View style={[riseSetWrapper, rowLayout]}>
            <Icon name={'user'} size={30} color='white' />
                <Text style={riseSetText}>10:46:58am</Text>
                <Icon name={'user'} size={30} color='white' />
                <Text style={riseSetText}>17:25:45pm</Text>
            </View>
           </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageLayout: {
        flex: 1
    },
    cityName: {
        fontSize: 50,
    },
    countryName: {
        fontSize: 40
    },
    cityTxt: {
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold'
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        fontSize: 30,
        marginLeft: 7.5,
        color: 'red',
        fontWeight: 'bold'
    },
    riseSetWrapper: {
        justifyContent: 'space-around',
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})
export default City