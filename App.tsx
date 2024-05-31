// App.tsx
import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

type HomeScreenProps = {
  navigation: any; // Typisierung für die Navigation
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Wechsel zur Eingabe"
        onPress={() => navigation.navigate("Eingabe")}
      />
    </View>
  );
};

const InputScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Input Screen</Text>
      <Button
        title="Zeige die Visualisierung"
        onPress={() => navigation.navigate("Visualisierung")}
      />
    </View>
  );
};

const VisualScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Visualisierung</Text>
    </View>
  );
};

const ProfileScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile Screen</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="Eingabe" component={InputScreen} />
        <Tab.Screen name="Visualisierung" component={VisualScreen} />
        <Tab.Screen name="Energiespartips" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
