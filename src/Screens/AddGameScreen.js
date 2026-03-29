import react, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View,Text,TextInput,Touchable,TouchableOpacity, KeyboardAvoidingView,ScrollView,Alert, StyleSheet } from 'react-native';

const AddGameScreen = ({navigation, route}) => {

    const {} = route.params;

    //states for the form fields
    const [title, setTitle]= react.useState('');
    const [description, setDescription]= react.useState('');
    const [genre, setGenre]= react.useState('');
    const [platform, setPlatform]= react.useState('');
    const [ageRating, setAgeRating]= react.useState('');
    const [price, setPrice]= react.useState('');

    const [isFormValid, setIsFormValid]= react.useState(false);

    //validate the form fields and enabled the button when the form is valid
    useEffect(()=>{
        if(!title.trim() && !description.trim() && !price.trim()){
            Alert.alert('Campos requeridos','Por favor ingrese el titulo, descripcion y precio del juego');
            setIsFormValid(false);
            return;
        }
        setIsFormValid(true);
    });

    //Handle save - save and navigate to the game list screen
    const handlesave=()=>{
        const newGame={
            title,
            description,
            genre,
            platform,
            ageRating,
            price
        };
        navigation.navigate('GameListScreen',{newGame})
    }

    return(
        <SafeAreaView>
            <KeyboardAvoidingView>
                <ScrollView>
                    <Text>Agregar nuevo juego</Text>

                    <TextInput
                        placeholder='Titulo del juego'
                        placeholderTextColor='#8b7694'
                        value={title}
                        onChangeText={setTitle}
                    />
                    <TextInput
                        placeholder='Descripcion del juego'
                        placeholderTextColor='#8b7694'
                        value={description}
                        onChangeText={setDescription}
                    />
                    <TextInput
                        placeholder='Genero'
                        placeholderTextColor='#8b7694'
                        value={genre}
                        onChangeText={setGenre}
                    />
                    <TextInput
                        placeholder='Plataforma'
                        placeholderTextColor='#8b7694'
                        value={platform}
                        onChangeText={setPlatform}
                    />
                    <TextInput
                        placeholder='Clasificacion por edad'
                        placeholderTextColor='#8b7694'
                        value={ageRating}
                        onChangeText={setAgeRating}
                    />
                    <TextInput
                        placeholder='Precio'
                        placeholderTextColor='#8b7694'
                        value={price}
                        onChangeText={setPrice}
                        keyboardType='numeric'
                    />

                    <TouchableOpacity
                        onPress={handlesave}
                        disabled={!isFormValid}
                    >
                        <Text>Guardar</Text>
                    </TouchableOpacity>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )

}

export default AddGameScreen;