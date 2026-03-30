import react, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View,Text,TextInput,Platform,TouchableOpacity, KeyboardAvoidingView,ScrollView,Alert } from 'react-native';

import styles from '../Styles/AddGameStyles';

const AddGameScreen = ({navigation}) => {

    //states for the form fields
    const [title, setTitle]= react.useState('');
    const [description, setDescription]= react.useState('');
    const [genre, setGenre]= react.useState('');
    const [platform, setPlatform]= react.useState('');
    const [ageRating, setAgeRating]= react.useState('');
    const [price, setPrice]= react.useState('');

    const [isFormValid, setIsFormValid]= react.useState(false);

    //validate the form fields and enable the button when the form is valid
    useEffect(()=>{
        if(!title.trim() || !description.trim() || !price.trim()){
            setIsFormValid(false);
            return;
        } 
        if (isNaN(price) || parseFloat(price) <= 0){
            setIsFormValid(false);
            return;
        }
        setIsFormValid(true);
    }, [title, description, price]);

    //Handle save - save and navigate to the game list screen
    const handleSave=()=>{
        if(!title.trim() || !description.trim() || !price.trim()){
            Alert.alert('Campos requeridos','Por favor ingrese el titulo, descripcion y precio del juego');
            return;
        }
        if (!isNaN(price) && parseFloat(price) <= 0){
            Alert.alert('Precio inválido','Por favor ingrese un precio válido');
            return;
        }
        const newGame={
            title,
            description,
            genre,
            platform,
            ageRating,
            price:parseFloat(price)
        };

        //Sumary of the new game to show in an alert before navigating to the game list screen
        const summary =`
            Título: ${newGame.title}
            Descripción: ${newGame.description}
            Género: ${newGame.genre}
            Plataforma: ${newGame.platform}
            Clasificación por edad: ${newGame.ageRating}
            Precio: $${newGame.price}
        `;

        Alert.alert('Juego agregado', summary, [{
            text: 'OK',
            onPress: () => {
                navigation.navigate('GameList', { newGame });
                handleClear(); 
            },
        }])
    };

    //Handle clear - clear the form fields
    const  handleClear=()=>{
        setTitle('');
        setDescription('');
        setGenre('');
        setPlatform('');
        setAgeRating('');
        setPrice('');
    }

    return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}> 
                <ScrollView style={styles.scrollContent}>
                    <View>
                        <Text style={styles.titleText}>Agregar nuevo Juego</Text>
                    </View>
                    <TextInput
                        style={styles.formInput}
                        placeholder='Titulo del juego'
                        placeholderTextColor='#8b769477'
                        value={title}
                        onChangeText={setTitle}
                    />
                    <TextInput
                        style={styles.formInput}
                        placeholder='Descripción del juego'
                        placeholderTextColor='#8b769477'
                        value={description}
                        onChangeText={setDescription}
                        multiline
                    />
                    <TextInput
                        style={styles.formInput}
                        placeholder='Género'
                        placeholderTextColor='#8b769477'
                        value={genre}
                        onChangeText={setGenre}
                    />
                    <TextInput
                        style={styles.formInput}
                        placeholder='Plataforma'
                        placeholderTextColor='#8b769477'
                        value={platform}
                        onChangeText={setPlatform}
                    />
                    <TextInput
                        style={styles.formInput}
                        placeholder='Clasificación por edad'
                        placeholderTextColor='#8b769477'
                        value={ageRating}
                        onChangeText={setAgeRating}
                    />
                    <TextInput
                        style={styles.formInput}
                        placeholder='Precio'
                        placeholderTextColor='#8b769477'
                        value={price}
                        onChangeText={setPrice}
                        keyboardType='numeric'
                    />

                    <TouchableOpacity
                        onPress={handleSave}
                        disabled={!isFormValid}
                        style={isFormValid ? styles.buttonAdd : styles.buttonDisabled}
                    >
                        <Text style={styles.textButton}>Guardar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonClear}
                        onPress={handleClear}
                    >
                        <Text style={styles.textButton}>Limpiar campos</Text>
                    </TouchableOpacity>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )

}

export default AddGameScreen;