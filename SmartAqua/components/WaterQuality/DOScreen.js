import * as React from 'react';
import { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, ImageBackground, TextInput,TouchableOpacity,KeyboardAvoidingView} from 'react-native';


function DOScreen(){
    const [temperature, setTemperature] = useState('');
    const [turbidity, setTurbidity] = useState('');
    const [ph, setPH] = useState('');
    const [dissolvedOxygen, setDissolvedOxygen] = useState('');

    const calculateDissolvedOxygen = () => {
      if (temperature !== '' && turbidity !== '' && ph !== '') {
        const temp = parseFloat(temperature);
  
        if (temp >= 25.0 && temp < 30.0) {
          setDissolvedOxygen((8.32).toFixed(2));
        } else if (temp >= 30.0 && temp < 35.0) {
          setDissolvedOxygen((7.75).toFixed(2));
        } else if (temp >= 35.0 && temp <= 39.9) {
          setDissolvedOxygen((6.32).toFixed(2));
        } else {
          setDissolvedOxygen('Temperature out of range');
        }

        // Clear input values
        setTemperature('');
        setTurbidity('');
        setPH('');
      }
    };
  
   

    return(
      <ImageBackground source={require('../../assets/IoTBG.png')} 
                       style={{ 
                       flex: 1,
                       alignItems: 'center', 
                       justifyContent: 'center',
      }}>
        <View style={{ 
            flex: 1,
            alignItems: 'center', 
         }}>
           
             <Text style={{color: '#ffffff',fontSize: 23,marginBottom: 50}}>Check Dissolved Oxygen Level</Text>
          
             <View style={{ flex: 0.6, 
                          justifyContent: 'center', 
                          alignItems: 'center',
             }}>

               <KeyboardAvoidingView
                   behavior="padding"
                   style={{ flex: 1, alignItems: 'center',  backgroundColor: '#003455' }}
               > 
                 <TextInput
                    style={{ height: 40, width: 200,padding: 10,backgroundColor:'white', borderColor: 'tomato', borderWidth: 2, marginBottom: 10 }}
                    placeholder="Enter Temperature"
                    onChangeText={setTemperature}
                    value={temperature}
                    keyboardType="numeric"
                 />

                 <TextInput
                    style={{ height: 40, width: 200,padding: 10,backgroundColor:'white',borderColor: 'tomato', borderWidth: 2, marginBottom: 10 }}
                    placeholder="Enter Turbidity"
                    onChangeText={setTurbidity}
                    value={turbidity}
                    keyboardType="numeric"
                 />

                <TextInput
                    style={{ height: 40, width: 200,padding: 10,backgroundColor:'white',borderColor: 'tomato', borderWidth: 2, marginBottom: 10 }}
                    placeholder="Enter pH"
                    onChangeText={setPH}
                    value={ph}
                    keyboardType="numeric"
                />

             
                <TouchableOpacity  style={styles.card} onPress={calculateDissolvedOxygen}>
                    <Text style={styles.cardText}>Check DO Level</Text>
               </TouchableOpacity>

             {dissolvedOxygen !== '' && (
               <Text style={{ color: 'white', marginTop: 40 ,fontSize: 19}}>
                  Predicted Dissolved Oxygen: {dissolvedOxygen}
               </Text>
              )}
            </KeyboardAvoidingView>
          </View>

        </View>
    </ImageBackground>

    );
}


export default DOScreen;

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
    card: {
      backgroundColor: 'tomato',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginTop: 20,
      height: 50,
      width: 200,
      marginTop:30
     
    },
    cardText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center'
    },
  });