import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/GameDetailStyles';

const GameDetailScreen = ({ route, navigation }) => {
  const { game } = route.params;

  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    console.log(`Viewing details for: ${game.title}`);}, [game]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Text style={styles.emoji}>{game.emoji}</Text>
          <Text style={styles.title}>{game.title}</Text>
          
          <View style={styles.badgeContainer}>
            <Text style={styles.platformBadge}>{game.platform}</Text>
            <Text style={styles.ratingBadge}>Rating: {game.ageRating}</Text>
          </View>

          <View style={styles.infoSection}>
            <Text style={styles.label}>Género:</Text>
            <Text style={styles.value}>{game.genre}</Text>
            
            <Text style={styles.label}>Precio:</Text>
            <Text style={styles.price}>US$ {game.price}</Text>
            
            <Text style={styles.label}>Descripción:</Text>
            <Text style={styles.description}>{game.description}</Text>
          </View>

          <TouchableOpacity 
            style={[styles.wishlistButton, isWishlisted && styles.wishlisted]}
            onPress={() => setIsWishlisted(!isWishlisted)}
          >
            <Text style={styles.buttonText}>
              {isWishlisted ? '❤️ en lista de deseos' : '🤍 Agregar a lista de deseos'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>Volver a la lista de juegos</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GameDetailScreen;