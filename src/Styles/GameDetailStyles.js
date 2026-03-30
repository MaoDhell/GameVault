import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9b7d91',
  },
  scrollContainer: {
    padding: 20,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#ddd8dd',
    borderRadius: 20,
    padding: 25,
    width: '100%',
    elevation: 5,
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
    color: '#050505',
  },
  badgeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },
  platformBadge: {
    backgroundColor: '#a36985',
    color: '#000000',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 15,
    marginRight: 20,
    overflow: 'hidden',
  },
  ratingBadge: {
    backgroundColor: '#a36985',
    color: '#000000',
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
    color: '#000000',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    color: '#444',
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: '#555',
    textAlign: 'justify',
  },
  wishlistButton: {
    backgroundColor: '#bf82e2',
    padding: 15,
    borderRadius: 10,
    marginTop: 25,
    alignItems: 'center',
  },
  wishlisted: {
    backgroundColor: '#941a47',
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
    color: '#000000',
  },
});