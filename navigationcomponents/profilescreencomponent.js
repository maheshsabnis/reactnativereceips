import {Button,Text, View} from 'react-native';
const ProfileScreenComponent = ({navigation, route}) => {
    
    return (
    <View>
        <Text>This is {route.params.name}'s profile</Text>
           
    </View>    
      
    );
  };

  export default ProfileScreenComponent;