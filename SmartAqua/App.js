import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//icons
import { Ionicons } from "@expo/vector-icons";

//navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//screens
//Stack for moving between screens
import HomeScreen from "./components/BottomTabScreens/HomeScreen";
import FishidentificationScreen from "./components/FishIdentification/FishidentificationScreen";
import DiseasesIdentificationScreen from "./components/DiseaseIdentification/DiseasesIdentificationScreen";
import WaterQualityScreen from "./components/WaterQuality/WaterQualityScreen";
import GrowthPredictionScreen from "./components/GrowthPrediction/GrowthPredictionScreen";
import IoTScreen from "./components/WaterQuality/IoTScreen";
import DOScreen from "./components/WaterQuality/DOScreen";
//Bottom tab
import DetailsScreen from "./components/BottomTabScreens/DetailsScreen";
import SettingsScreen from "./components/BottomTabScreens/SettingsScreen";

const Stack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();

const AuthStack = () => {
  return(
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#003455" },
        headerTitleAlign: "center",
        contentStyle: { backgroundColor: "white" },
      }}
    >
      <Stack.Screen
        name="Smart Aqua"
        component={HomeScreen}
        options={{
          // contentStyle: { backgroundColor: "white" },
          headerTitleAlign: "center",
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="FishidentificationScreen"
        component={FishidentificationScreen}
        options={{
          // contentStyle: { backgroundColor: "white" },
          headerTitleAlign: "center",
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="DiseasesIdentificationScreen"
        component={DiseasesIdentificationScreen}
        options={{
          // contentStyle: { backgroundColor: "#d7dbdb" },
          headerTitleAlign: "center",
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="WaterQualityScreen"
        component={WaterQualityScreen}
        options={{
          // contentStyle: { backgroundColor: "#d7dbdb" },
          headerTitleAlign: "center",
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="GrowthPredictionScreen"
        component={GrowthPredictionScreen}
        options={{
          // contentStyle: { backgroundColor: "#d7dbdb" },
          headerTitleAlign: "center",
          headerTintColor: "white",
        }}
      />
       <Stack.Screen
        name="IoTScreen"
        component={IoTScreen}
        options={{
          // contentStyle: { backgroundColor: "#d7dbdb" },
          headerTitleAlign: "center",
          headerTintColor: "white",
        }}
      />
       <Stack.Screen
        name="DOScreen"
        component={DOScreen}
        options={{
          // contentStyle: { backgroundColor: "#d7dbdb" },
          headerTitleAlign: "center",
          headerTintColor: "white",
        }}
      />

      
    </Stack.Navigator>
  );
};

function AuthenticatedStack() {
  return (
    <Bottom.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#003455" },
        tabBarStyle: { backgroundColor: "white" },
        tabBarActiveTintColor: "red",
      }}
    >
      <Bottom.Screen
        name="Home"
        component={AuthStack}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={"tomato"} />
          ),
        }}
      />

      <Bottom.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{
          headerShown: true,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={"tomato"} />
          ),
          headerTitleAlign: "center",
          headerTintColor: "white",
        }}
      />

      <Bottom.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={"tomato"} />
          ),
          headerTitleAlign: "center",
          headerTitle: "Settings",
          headerTintColor: "white",
        }}
      />
    </Bottom.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <AuthenticatedStack />
    </NavigationContainer>
  );
}

export default function App() {
  return (
      <>
        <StatusBar style="light" />
        <Navigation />
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
