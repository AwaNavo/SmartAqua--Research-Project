import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { useEffect, useState } from "react";
import { db, ref, onValue } from "../../firebase"; 


function IoTScreen(){

    const [ph, setPH] = useState(0);
    const [temp, setTemp] = useState(0);
    const [turbidity, setTurbidity] = useState(0);
    
    const [phState, setPhState] = useState("Healthy"); 
    const [phColor, setPhColor] = useState("green");

    const [tempState, setTempState] = useState("Healthy"); 
    const [tempColor, setTempColor] = useState("green");

    const [turbState, setTurbState] = useState("Healthy"); 
    const [turbColor, setTurbColor] = useState("green");

    const [dissolvedOxygen, setDissolvedOxygen] = useState(null);
    const [dissolvedOxygenState, setDissolvedOxygenState] = useState("Healthy");
    const [dissolvedOxygenColor, setDissolvedOxygenColor] = useState("green");

    const calculateDissolvedOxygen = () => {
      if (temp >= 25.0 && temp < 32.0) {
        setDissolvedOxygen((12.32).toFixed(2));
      } else if (temp >= 33.0 && temp < 35.0) {
        setDissolvedOxygen((7.75).toFixed(2));
      } else if (temp >= 35.0 && temp <= 39.9) {
        setDissolvedOxygen((6.32).toFixed(2));
      } else {
        setDissolvedOxygen('Invalid range');
      }
  
     

     if (dissolvedOxygen >= 5 && dissolvedOxygen <= 19) {
        setDissolvedOxygenState("Healthy");
        setDissolvedOxygenColor("green");
    } else {
        setDissolvedOxygenState("Detrimental (Not in 6.5-15 mg/L range)");
        setDissolvedOxygenColor("red");
    }


    };

    useEffect(() => {
      const data = ref(db);
  
     onValue(data, (snapshot) => {
      const phValue = Math.round(snapshot.val().Sensor.phd * 10) / 10;
      const tempValue = Math.round(snapshot.val().Sensor.tempd * 10) / 10;
      const turbValue = Math.round(snapshot.val().Sensor.turbd);
     
      setPH(phValue);
      setTemp(tempValue);
      setTurbidity(turbValue);

       // Determine pH state based on the value range
       if (phValue >= 6.5 && phValue <= 8.5) {
          setPhState("Healthy");
          setPhColor("green");
       } else {
          setPhState("Detrimental (Not in 6.5-8.5pH range)");
          setPhColor("red");
       }

      // Determine temperature state based on the value range
      if (tempValue >= 25 && tempValue <= 35) {
          setTempState("Healthy");
          setTempColor("green");
       } else {
          setTempState("Detrimental (Not in 25-35°C range)");
          setTempColor("red");
       }

      // Determine turbidity state based on the value range
      if (turbValue < 5) {
          setTurbState("Healthy");
          setTurbColor("green");
       } else {
          setTurbState("Detrimental (Above 5NTU)");
          setTurbColor("red");
       }

       // Calculate dissolved oxygen initially
       calculateDissolvedOxygen();

     });
    }, [db]);

    

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
              
              
              <View>
                   <Text style={{color: '#ffffff',fontSize: 23,marginBottom: 50}}> Water Quality monitoring</Text>
               </View>
          
               <View>
                   <Text style={{color: '#ffffff',fontSize: 18,marginBottom: 10 }}>
                       pH value
                   </Text>
              </View>
              <View>
                   <Text style={{textAlign: 'center', color: '#ffffff',fontSize: 20,marginBottom: 15, borderRadius: 10, backgroundColor: '#2980B9', width: 200, height: 35, }}>
                       {ph}pH 
                   </Text>
                   <Text style={{textAlign: 'center', color: '#ffffff',fontSize: 15,marginBottom: 25, borderRadius: 10, backgroundColor: phColor , width: 200, height: 20, }}>
                      {phState}
                   </Text>
                  
              </View>
              

              <View>
                   <Text style={{color: '#ffffff',fontSize: 18,marginBottom: 10 }}>
                       Temperature value
                   </Text>    
              </View>
              <View>
                   <Text style={{textAlign: 'center', color: '#ffffff',fontSize: 20,marginBottom: 15, borderRadius: 10, backgroundColor: '#2980B9', width: 200, height: 35,}}>
                         {temp}°C
                   </Text>
                   <Text style={{textAlign: 'center', color: '#ffffff',fontSize: 15,marginBottom: 25, borderRadius: 10, backgroundColor: tempColor , width: 200, height: 20, }}>
                      {tempState}
                   </Text>
              </View>


              <View>
                   <Text style={{color: '#ffffff',fontSize: 18,marginBottom: 10 }}>
                        Turbidity value
                   </Text>    
              </View>
              <View>
                   <Text style={{textAlign: 'center', color: '#ffffff',fontSize: 20,marginBottom: 15, borderRadius: 10, backgroundColor: '#2980B9', width: 200, height: 35,}}>
                         {turbidity} NTU
                   </Text>
                   <Text style={{textAlign: 'center', color: '#ffffff',fontSize: 15,marginBottom: 25, borderRadius: 10, backgroundColor: turbColor , width: 200, height: 20, }}>
                      {turbState}
                   </Text>
             </View>
             
             <TouchableOpacity
              onPress={calculateDissolvedOxygen} // Call the function when the button is pressed
            style={{
            backgroundColor: '#D7E11B',
            padding: 10,
            borderRadius: 10,
            marginTop: 20,
          }}
        >
          <Text style={{ color: '#161703', fontSize: 20 }}>Check Dissolved Oxygen</Text>
        </TouchableOpacity>
        
        {dissolvedOxygen !== null && (
          <View>
            <Text style={{ color: '#ffffff', fontSize: 20 }}>
            </Text>
            <Text
              style={{
                textAlign: 'center', color: '#ffffff',fontSize: 20,marginBottom: 15, borderRadius: 10, backgroundColor: '#2980B9', width: 200, height: 35,
              }}
            >
              {dissolvedOxygen} mg/L
            </Text>
            <Text style={{ textAlign: 'center', color: '#ffffff', fontSize: 15, borderRadius: 10, backgroundColor: dissolvedOxygenColor, width: 200, height: 20 }}>
                    {dissolvedOxygenState}
                </Text>
          </View>
        )}
         
        </View>
     </ImageBackground>   
    );
}


export default IoTScreen;