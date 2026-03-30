import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', 
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#da6282', 
  },
  listContent: {
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#343434', 
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    alignItems: 'center',
    elevation: 3,
    borderWidth: 1,
    borderColor: '#333',
  },
  emoji: {
    fontSize: 30,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff', // Texto blanco
  },
  platform: {
    fontSize: 14,
    color: '#da6282', // Acento rosa
  },
  genre: {
    fontSize: 14,
    color: '#bbb',
    fontStyle: 'italic',
  },
});