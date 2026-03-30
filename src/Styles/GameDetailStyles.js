import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollContainer: {
    padding: 20,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: 20,
    padding: 25,
    width: '100%',
    elevation: 5,
    borderWidth: 1,
    borderColor: '#da628233',
  },
  emoji: {
    fontSize: 80,
    textAlign: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },
  badgeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },
  platformBadge: {
    backgroundColor: '#da6282',
    color: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 15,
    marginRight: 20,
    overflow: 'hidden',
  },
  ratingBadge: {
    backgroundColor: '#4a4a4a',
    color: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 15,
    overflow: 'hidden',
  },
  infoSection: {
    marginTop: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#da6282',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    color: '#eeeeee',
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: '#cccccc',
    textAlign: 'justify',
  },
  wishlistButton: {
    backgroundColor: '#da6282',
    padding: 15,
    borderRadius: 10,
    marginTop: 25,
    alignItems: 'center',
  },
  wishlisted: {
    backgroundColor: '#a1234b', 
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 15,
    padding: 10,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#da6282',
  },
});