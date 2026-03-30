import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/GameListStyles';

const GAMES_LIST = [
  { 
    id: '1', 
    title: 'Elden Ring', 
    platform: 'PS5', 
    genre: 'Roles', 
    price: 59.99, 
    ageRating: 'M', 
    description: 'Un juego de acción y rol de mundo abierto en las Tierras Intermedias.', 
    emoji: '⚔️' 
  },
  { 
    id: '2', 
    title: 'Halo Infinite', 
    platform: 'Xbox', 
    genre: 'Balazos', 
    price: 50.00, 
    ageRating: 'T', 
    description: 'La mítica saga de disparos regresa con el Jefe Maestro.', 
    emoji: '🔫' 
  },
  { 
    id: '3', 
    title: 'Mario Kart 8', 
    platform: 'Switch', 
    genre: 'Carreras', 
    price: 45.00, 
    ageRating: 'E', 
    description: 'Carreras llenas de adrenalina y objetos divertidos.', 
    emoji: '🏎️' 
  },
  { 
    id: '4', 
    title: 'God of War Ragnarök', 
    platform: 'PS5', 
    genre: 'Acción-Aventura', 
    price: 69.99, 
    ageRating: 'M', 
    description: 'Kratos y Atreus deben viajar a cada uno de los nueve reinos en busca de respuestas.', 
    emoji: '🪓' 
  },
  { 
    id: '5', 
    title: 'The Legend of Zelda: TotK', 
    platform: 'Switch', 
    genre: 'Aventura', 
    price: 59.99, 
    ageRating: 'E', 
    description: 'Explora las tierras y los cielos de Hyrule con nuevas habilidades de construcción.', 
    emoji: '🛡️' 
  },
  { 
    id: '6', 
    title: 'Forza Horizon 5', 
    platform: 'Xbox', 
    genre: 'Carreras', 
    price: 55.00, 
    ageRating: 'E', 
    description: 'Lidera expediciones impresionantes a través de los paisajes de México en constante evolución.', 
    emoji: '🏎️' 
  },


];

const GameListScreen = ({ navigation }) => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setGames(GAMES_LIST);
      setIsLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);


  const renderGameItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => navigation.navigate('GameDetail', { game: item })} 
    >
      <Text style={styles.emoji}>{item.emoji}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.platform}>Plataforma: {item.platform}</Text>
        <Text style={styles.genre}>Género: {item.genre}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#947ab3" />
          <Text style={styles.loadingText}>Cargando Juegos...</Text>
        </View>
      ) : (
        <FlatList
          data={games}
          keyExtractor={(item) => item.id}
          renderItem={renderGameItem}
          contentContainerStyle={styles.listContent}
        />
      )}
    </SafeAreaView>
  );
};

export default GameListScreen;