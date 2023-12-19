import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

//functions to navigate to specific component screens
function NavigateToFishidentificationScreen(props){
  props.navigation.navigate("FishidentificationScreen");
}

function NavigateToDiceasesIdentificationScreen(props){
  props.navigation.navigate("DiseasesIdentificationScreen");
 
}

function NavigateToWaterQualityScreen(props){
  props.navigation.navigate("WaterQualityScreen");
}

function NavigateToGrowthPredictionScreen(props){
  props.navigation.navigate("GrowthPredictionScreen");
}


export default function HomeScreen(props) {

  return (
    <View style={{ 
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#003455' }}>
       <View style={styles.container}>  
         
         <Image source={require('../../assets/splashfish.png')} style={styles.logo} />       
       </View>
       
       <TouchableOpacity  style={styles.card} onPress={()=>NavigateToFishidentificationScreen(props)}>
           <Icon name="paw" size={24} color="white" style={styles.icon} />
           <Text style={styles.cardText}>Species Identification</Text>
       </TouchableOpacity>

       <TouchableOpacity  style={styles.card} onPress={()=>NavigateToDiceasesIdentificationScreen(props)}>
           <Icon name="paw" size={24} color="white" style={styles.icon} />
           <Text style={styles.cardText}>Disease Identification</Text>
       </TouchableOpacity>

       <TouchableOpacity  style={styles.card} onPress={()=>NavigateToWaterQualityScreen(props)}>
           <Icon name="paw" size={24} color="white" style={styles.icon} />
           <Text style={styles.cardText}>Water Quality Monitoring</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.card} onPress={()=>NavigateToGrowthPredictionScreen(props)}>
           <Icon name="paw" size={24} color="white" style={styles.icon} />
           <Text style={styles.cardText}>Growth Prediction</Text>
       </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    flexDirection: 'row', // Use row direction to align elements side by side
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#003455',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  logo: {
    width: 70,
    height: 70,
    
  },
  card: {
    backgroundColor: 'tomato',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    height: 100,
    width: 250,
  },
  cardText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
