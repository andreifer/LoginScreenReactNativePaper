import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen";
import { LoginScreen } from "../screens/LoginScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { RegisterScreen } from "../screens/RegisterScreen";
import { ForgotPasswordScreen } from "../screens/ForgotPassword";
import { CameraScreen } from "../screens/CameraScreen";
import { TelefoneScreen } from "../screens/TelefoneScreen";

const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator(); 

export const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
          title: "Tela de Login",
        }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          headerShown: false,
          title: "Tela de Login",
        }}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{
          headerShown: false,
          title: "Tela de Login",
        }}
      />
      <Stack.Screen
        name="HomeNavigation"
        component={TabNavigation}
        options={{
          headerShown: false,
          title: "Tela do aplicativo",
        }}
      />
      <Stack.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{
          headerShown: false,
          title: "Tela do aplicativo",
        }}
      />
      <Stack.Screen
        name="TelefoneScreen"
        component={TelefoneScreen}
        options={{
          headerShown: false,
          title: "Tela do aplicativo",
        }}
      />
    </Stack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();
export const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Câmera"
        component={CameraScreen}
        options={{
          tabBarLabel: "Câmera",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="camera" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Telefone"
        component={TelefoneScreen}
        options={{
          tabBarLabel: "Telefone",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="phone" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};