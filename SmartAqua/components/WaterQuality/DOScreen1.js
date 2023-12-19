import * as React from 'react';
import { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button, TextInput,} from 'react-native';
import axios from 'axios';

function DOScreen1(){
    const [temperature, setTemperature] = useState('');
    const [turbidity, setTurbidity] = useState('');
    const [ph, setPH] = useState('');
    const [prediction, setPrediction] = useState(null);

    const fetchPrediction = async () => {
        try {
          const response = await axios.post('http://192.168.1.10:8000/predict', {
            Temperature: parseFloat(temperature),
            Turbidity: parseInt(turbidity),
            PH: parseFloat(ph),
         });
        if (response.data && response.data.prediction !== undefined) {
             setPrediction(response.data.prediction);
        } else {
             console.error('Invalid response data:', response.data);
        }
      } catch (error) {
         console.error('Error fetching prediction:', error);
      }
    };

    return(
        <View style={{ 
            flex: 1,
            alignItems: 'center', 
           
            backgroundColor: '#003455' }}>
           
           <Text style={{color: '#ffffff' }}> Check Dissolved Oxygen Level</Text>
          
           <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <TextInput
                   style={{ height: 40, width: 200, backgroundColor:'white', borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                   placeholder="Temperature"
                   onChangeText={setTemperature}
                   value={temperature}
                   keyboardType="numeric"
             />

             <TextInput
                  style={{ height: 40, width: 200,  backgroundColor:'white',borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                  placeholder="Turbidity"
                  onChangeText={setTurbidity}
                  value={turbidity}
                  keyboardType="numeric"
             />

             <TextInput
                 style={{ height: 40, width: 200,  backgroundColor:'white',borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                 placeholder="pH"
                 onChangeText={setPH}
                 value={ph}
                 keyboardType="numeric"
             />

             <Button title="Fetch Prediction" onPress={fetchPrediction} />
             {prediction !== null && (
                <Text>Predicted Dissolved Oxygen: {prediction}</Text>
             )}

          </View>


        </View>
    );
}


export default DOScreen1;

const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    label: {
      fontSize: 16,
      marginBottom: 4,
      color: 'white',
    },
    input: {
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 8,
      marginBottom: 16,
      color: 'white',
    },
  });