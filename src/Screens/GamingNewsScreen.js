import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View,Text,TouchableOpacity, ScrollView, ImageBackground} from 'react-native';

import { GAMING_NEWS } from '../Data/GamingNewsData';
import styles from '../Styles/GamingNewsStyles';

const GamingNewsScreen = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [news] = useState(GAMING_NEWS); 

    const renderNewsItem = ({item}) => {
        return(
            <View >                
                <View >
                    <Text style={styles.categoryBadge}>{item.category}</Text> 
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.textContainer}>{item.description}</Text> 
                </View>          
            </View>
        )
    }


    //Change the news every 5 seconds and loop back to the first news when reaching the end of the array
    //and clean up the interval on unmount to prevent memory leaks
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % news.length);
        }, 5000);

        //Clean up the interval on unmount
        return () => clearInterval(intervalId);

    }, []);

    //Current news index to the console whenever it changes for debugging purposes
    //and show the current news in the Ui
    const [statusMessage, setStatusMessage] = React.useState('');

    useEffect(() => {
        const message = `Mostrando noticia ${currentIndex + 1} de ${news.length}`;
        console.log(`Now showing news ${currentIndex + 1}`);

        setStatusMessage(message);

    }, [currentIndex]);

    // Next and Back button handlers to manually change the news
    // and loop back to the first news when reaching the end of the array or the last news when going back from the first news
    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % GAMING_NEWS.length);
    };

    const handleBack = () => {
        setCurrentIndex((prev) => (prev - 1 + GAMING_NEWS.length) % GAMING_NEWS.length);
    };

    return(
        <View style={styles.generalContainer} >
            <ScrollView>
                <View style={styles.imageHeaderContainer}>
                    <ImageBackground 
                        source={{ uri: news[currentIndex].image }}
                        resizeMode='cover'
                        style={styles.newsImage}
                    >
                        <View>
                            <Text style={styles.titleText}>{news[currentIndex].title}</Text>
                        </View>
                    </ImageBackground>
                </View> 
                <SafeAreaView style={styles.container}>
                    
                        <View >
                            {renderNewsItem({item: news[currentIndex]})}
                        </View>
                        <Text style={styles.statusText}>{statusMessage}</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity 
                                onPress={handleBack}
                                style={styles.button}
                            >
                                <Text style={styles.textButton}>Anterior</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={handleNext}
                                style={styles.button}
                            >
                                <Text style={styles.textButton}>Siguiente</Text>
                            </TouchableOpacity>
                        </View>
                </SafeAreaView>
            </ScrollView>
        </View>
    )
}

export default GamingNewsScreen;