import {View, Text, SectionList, StyleSheet, StatusBar,SafeAreaView} from 'react-native';


const Item = ({prd})=>(
    <View style={styles.item}>
       <Text style={styles.title} onPress={()=>alert(prd.ProductId)}>{prd.ProductId}</Text>
       <Text style={styles.title}>{prd.ProductName}</Text>
       <Text style={styles.title}>{prd.Price}</Text>
   </View>);

const ItemSeperatorComponent=()=>(
    <View style={styles.seperator}>
        {/* <Text></Text> */}
    </View>
);
const ListEmptyComponent=()=>(
    <View style={styles.seperator}>
        <Text>No Recods in the List</Text>
    </View>
);
const ListHeaderComponent=()=>(
    <View style={styles.header}>
    </View>
);
const ListFooterComponent=()=>(
    <View style={styles.footer}>
    </View>
);


const SectionListComponent=()=>{
    

    const catProducts = [
        {
            Category:'Electronics',
            Products:
            ['Laptop',
            'Desktop',
            'RAM', 
            'SSD',
           'HDD']
        },
        {
            Category:'Electrical',
            Products:
            ['Iron',
            'Mixer',
            'Power Tools',
            'Extension Box',
            'Adapter']
        }
    ];


    const DATA = [
        {
          title: 'Main dishes',
          data: ['Pizza', 'Burger', 'Risotto'],
        },
        {
          title: 'Sides',
          data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
        },
        {
          title: 'Drinks',
          data: ['Water', 'Coke', 'Beer'],
        },
        {
          title: 'Desserts',
          data: ['Cheese Cake', 'Ice Cream'],
        },
      ];

    const endReached=()=>{
        alert('end reached');
    };


    const getSelectedItemData=(item)=>{
        Alert.alert(item);
    };

    return(
        
        <SafeAreaView style={styles.container}>
         
        <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    view :{
        color: 'magenta',
        height:80,
        width:100 
    },
    item: {
      backgroundColor: 'yellow',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    seperator: {
        backgroundColor: 'red',
        width:1000,
        height:10
      },
    title: {
      fontSize: 32,
    },
    header: {
        backgroundColor:'blue',
      },
      footer: {
        backgroundColor:'magenta',
      },
  });


export default SectionListComponent;




