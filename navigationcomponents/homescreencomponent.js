import {useState} from 'react';
import {StyleSheet ,Button,Text,View,TextInput} from 'react-native';
const HomeScreenComponent = ({navigation}) => {
    const [name,setName] = useState('');
    return (
      <View>  
        <TextInput value={name} style={styles.input}
          onChangeText={(text)=>setName(text)}/>
        <Button
            title="Go to Mahesh's profile"
            onPress={() =>
            navigation.navigate('Profile', {name: name})
            }
        />
      </View>
    );
  };
 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      color:'red'
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    }
  });
  export default HomeScreenComponent;