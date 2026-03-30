import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 14,
        backgroundColor: '#fff',
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: 24,
    },
    buttonAdd:{
        borderRadius: 8,
        backgroundColor: '#da6282',
        padding: 12,
        alignItems: 'center',
        elevation: 2,
        marginTop: 18,
    },
    buttonDisabled: {
        backgroundColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        alignItems: 'center',
        elevation: 2,
        marginTop: 18,
    },
    buttonClear:{
        borderRadius: 8,
        backgroundColor: '#a1234b',
        padding: 12,
        alignItems: 'center',
        elevation: 2,
        marginTop: 10,
        marginBottom: 20,
    },
    textButton:{
        color: '#fff',
        fontWeight: 'bold',
    },
    formInput:{
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
    },
    titleText:{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 22,
        color: '#3b0615',
    },

});