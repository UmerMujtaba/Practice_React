import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs'
// import GetLocation, { Location } from 'react-native-get-location'
// import RNLocation from 'react-native-location'
// import Geolocation from '@react-native-community/geolocation';
// import * as Location from 'expo-location'
// import { LocationObject } from 'expo-location';
// import Geolocation, { GeoCoordinates } from 'react-native-geolocation-service';
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {
  // const [
  //   currentLongitude,
  //   setCurrentLongitude
  // ] = useState('...');
  // const [
  //   currentLatitude,
  //   setCurrentLatitude
  // ] = useState('...');
  // const [
  //   locationStatus,
  //   setLocationStatus
  // ] = useState('');

  // useEffect(() => {
  //   const requestLocationPermission = async () => {
  //     if (Platform.OS === 'android') {
  //       getOneTimeLocation();
  //       subscribeLocationLocation();
  //     } else {
  //       try {
  //         const granted = await PermissionsAndroid.request(
  //           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //           {
  //             title: 'Location Access Required',
  //             message: 'This App needs to Access your location',
  //           },
  //         );
  //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //           //To Check, If Permission is granted
  //           getOneTimeLocation();
  //           subscribeLocationLocation();
  //         } else {
  //           setLocationStatus('Permission Denied');
  //         }
  //       } catch (err) {
  //         console.warn(err);
  //       }
  //     }
  //   };
  //   requestLocationPermission();
  //   return () => {
  //     Geolocation.clearWatch(watchID);
  //   };
  // }, []);

  // const getOneTimeLocation = () => {
  //   setLocationStatus('Getting Location ...');
  //   Geolocation.getCurrentPosition(
  //     //Will give you the current location
  //     (position) => {
  //       setLocationStatus('You are Here');

  //       //getting the Longitude from the location json
  //       const currentLongitude = 
  //         JSON.stringify(position.coords.longitude);

  //       //getting the Latitude from the location json
  //       const currentLatitude = 
  //         JSON.stringify(position.coords.latitude);

  //       //Setting Longitude state
  //       setCurrentLongitude(currentLongitude);
        
  //       //Setting Longitude state
  //       setCurrentLatitude(currentLatitude);
  //     },
  //     (error) => {
  //       setLocationStatus(error.message);
  //     },
  //     {
  //       enableHighAccuracy: false,
  //       timeout: 30000,
  //       maximumAge: 1000
  //     },
  //   );
  // };

  // const subscribeLocationLocation = () => {
  //   watchID = Geolocation.watchPosition(
  //     (position) => {
  //       //Will give you the location on location change
        
  //       setLocationStatus('You are Here');
  //       console.log(position);

  //       //getting the Longitude from the location json        
  //       const currentLongitude =
  //         JSON.stringify(position.coords.longitude);

  //       //getting the Latitude from the location json
  //       const currentLatitude = 
  //         JSON.stringify(position.coords.latitude);

  //       //Setting Longitude state
  //       setCurrentLongitude(currentLongitude);

  //       //Setting Latitude state
  //       setCurrentLatitude(currentLatitude);
  //     },
  //     (error) => {
  //       setLocationStatus(error.message);
  //     },
  //     {
  //       enableHighAccuracy: false,
  //       maximumAge: 1000
  //     },
  //   );
  // };

  // RNLocation.configure({
  //   distanceFilter: 5.0
  // })
   
  // RNLocation.requestPermission({
  //   ios: "whenInUse",
  //   android: {
  //     detail: "coarse"
  //   }
  // }).then(granted => {
  //     if (granted) {
  //       this.locationSubscription = RNLocation.subscribeToLocationUpdates(locations => {
  //         /* Example location returned
  //         {
  //           speed: -1,
  //           longitude: -0.1337,
  //           latitude: 51.50998,
  //           accuracy: 5,
  //           heading: -1,
  //           altitude: 0,
  //           altitudeAccuracy: -1
  //           floor: 0
  //           timestamp: 1446007304457.029,
  //           fromMockProvider: false
  //         }
  //         */
  //       })
  //     }
  //   })
//   GetLocation.getCurrentPosition({
//     enableHighAccuracy: true,
//     timeout: 60000,
// })
// .then(location => {
//     console.log(location);
// })
// .catch(error => {
//     const { code, message } = error;
//     console.warn(code, message);
// })

 // const [loading, setLoading] = useState(true);
  // const [location, setLocation] = useState<GeoCoordinates | null>(null);
  // useEffect(() => {
  //   const requestLocationPermission = async () => {
  //     try {
  //       const granted = await PermissionsAndroid.requestMultiple([
  //         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //         PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
  //       ]);

  //       if (
  //         granted['android.permission.ACCESS_FINE_LOCATION'] === PermissionsAndroid.RESULTS.GRANTED &&
  //         granted['android.permission.ACCESS_COARSE_LOCATION'] === PermissionsAndroid.RESULTS.GRANTED
  //       ) {
  //         Geolocation.getCurrentPosition(
  //           (position) => {
  //             return setLocation(position.coords);
  //           },
  //           (error) => {
  //             console.error('Error getting location:', error);
  //           },
  //           { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  //         );
  //       } else {
  //         console.log('Location permission denied');
  //       }
  //     } catch (err) {
  //       console.warn(err);
  //     }
  //   };

  //   requestLocationPermission();
  // }, []);

  // // const [location, setLocation] = useState<LocationObject | null>(null);
  // const [error, setError] = useState<string | null>(null)
  
  // useEffect(() => {
  //   const getPermissions = (async() => {
  //     let {status } = await Location.requestForegroundPermissionsAsync()
  //     if (status !== 'granted')
  //     {
  //       setError('Permission to access location was denied')
  //       return
  //     }

  //     let location = await Location.getCurrentPositionAsync({})
  //     setLocation(location)
  //   })()
  // }, [ ])

  // if(location) {
  //   console.log(location)
  // }

  // if (loading) {
  //   return (
  //     <View style={styles.container}>
  //       <ActivityIndicator size={'large'} color={'blue'} />
  //     </View>
  //   );
  // }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    
  }
});
export default App;
