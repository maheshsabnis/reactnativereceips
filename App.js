import * as React from 'react';
import {Button,Text} from 'react-native';
//NavigationContainer is a component which manages 
//our navigation tree and contains the navigation state. 
//This component must wrap all navigators structure. 
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreenComponent from './navigationcomponents/homescreencomponent';
import ProfileScreenComponent from './navigationcomponents/profilescreencomponent';
//createNativeStackNavigator is a function that returns 
//an object containing 2 properties: Screen and Navigator. 
//Both of them are React components used for configuring 
//the navigator. The Navigator should contain Screen 
//elements as its children to define the configuration for routes.


const Stack = createNativeStackNavigator();

// const HomeScreenComponent = ({navigation}) => {
//     return (
//       <Button
//         title="Go to Mahesh's profile"
//         onPress={() =>
//           navigation.navigate('Profile', {name: 'Jane'})
//         }
//       />
//     );
//   };
//   const ProfileScreenComponent = ({navigation, route}) => {
//     return <Text>This is {route.params.name}'s profile</Text>;
//   };


const App=()=>{
    return(
        <NavigationContainer>
            
            <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreenComponent}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreenComponent} />
      </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;