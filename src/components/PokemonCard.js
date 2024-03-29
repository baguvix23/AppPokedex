import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { getColorByPokemonType } from "../utils/getColor";

export default function PokemonCard(props) {
  const { pokemon } = props;
  const pokemonColor = getColorByPokemonType(pokemon.type);

  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles };

  const goToPokemon = () => {
    console.log(`Lest go pokemon: ${pokemon.name}`);
    console.log(pokemon);
  };
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>
              #{`${pokemon.order}`.padStart(3, 0)}
            </Text>
            <Text style={styles.name}>{pokemon.name}</Text>
            <Image source={{ uri: pokemon.image }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 150,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "black",
    fontSize: 11,
  },
  name: {
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
    textTransform: "capitalize",
  },
});
