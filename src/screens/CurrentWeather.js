import React from 'react'
import { View, Text, SafeAreaView, StyleSheet,ImageBackground,image,imageLayout } from 'react-native'
import { weahterType } from '../utilities/weatherType';
import RowText from '../components/RowText';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const {
    wrapper,
    container,
    temp,
    feels,
    highLow,
    highLowWrapper,
    bodyWrapper,
    msg,
    des,
    main
  } = styles
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        
        <Text style={main}>Fit Hunt</Text>
      
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <Icon name={'eye'} size={30} color='#ff0000' />
        <RowText 
          messageOne={'High: 8' } 
          messageTwo={'Low: 6'} 
          containerStyles={highLowWrapper}
          messageOneStyles={highLow} 
          messageTwoStyles={highLow}/>
      </View>

      <RowText 
        messageOne={'Its Sunny'} 
        messageTwo={weahterType['Thunderstorm'].message} 
        containerStyles={bodyWrapper} 
        messageOneStyles={des} 
        messageTwoStyles={msg}/>

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'blue'
  },
  main: {
    fontSize: 40,
    color: 'white',
    fontStyle: 'italic',
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  temp: {
    fontSize: 48,
    color: 'white'
  },
  feels: {
    fontSize: 30,
    color: 'white'
  },
  highLow: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'

  },
  highLowWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  des: {
    fontSize: 48,
    color: 'white'
  },
  msg: {
    fontSize: 30,
    color: 'white'
  }
})
export default App
