import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../screens/AccountScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import PokedexScreen from "../screens/PokedexScreen";
import Icon from "react-native-vector-icons/FontAwesome5";
import Fontisto from "react-native-vector-icons/Fontisto";

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          ...screenOptionStyle,
          tabBarActiveTintColor: "#6ee7b7",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: [{ display: "flex" }],
        }}
      >
        <Tab.Screen
          name="Favorite"
          component={FavoriteScreen}
          options={{
            tabBarLabel: "Favoritos",
            tabBarIcon: ({ color, size }) => (
              <Fontisto name="heart-alt" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Pokedex"
          component={PokedexScreen}
          options={{
            tabBarIcon: () => renderPokeball(),
            tabBarLabel: "",
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarLabel: "My Account",
            tabBarIcon: ({ color, size }) => (
              <Icon name="user-alt" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

function renderPokeball() {
  return (
    <Image
      source={require("../../assets/images/pokeball.png")}
      style={{ width: 50, height: 50, top: -15 }}
    />
  );
}

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#6ee7b7",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};
