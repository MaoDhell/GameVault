import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c388ab',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#744c70',
  },
  listContent: {
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f2e2f4',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    alignItems: 'center',
    elevation: 3,
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
    color: '#1a1a1a',
  },
  platform: {
    fontSize: 14,
    color: '#666',
  },
  genre: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
});