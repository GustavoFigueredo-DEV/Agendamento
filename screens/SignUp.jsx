import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import medkitLogo from '../assets/imgs/medkitLogo.png';

export default function SignUp(){
    return(
          <View style={styles.container}>

            <View style={styles.logoContainer}>
                <Image source={medkitLogo} style={{ width: 80, height: 80 }} />
                <Text style={styles.logoText}>MedKit</Text>
            </View>

            <View style={styles.formulario}>
                <Text style={styles.formTitle}>Cadastrar</Text>

                <View style={styles.info1}>
                <TextInput placeholder='Nome completo'/>
                <TextInput placeholder='CPF'/>
                <TextInput placeholder='Senha'/>
                </View>

                <View style={styles.info2}>
                    <TextInput placeholder='🇧🇷 +55'/>
                    <TextInput placeholder='Telefone'/>
                </View>

                <View style={styles.info3}>
                    <TextInput placeholder='DD/MM/YY'/>
                    <TextInput placeholder='Gênero'/>
                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        paddingHorizontal: 20,
        backgroundColor: '#EFEFEF',
    },
    logoContainer: {
        alignItems: "center",
        flexDirection: "row",
    },
    logoText: {
        color: '#41A4C7',
        fontSize: 26,
        fontWeight: "500",
    },
    formulario: {
        backgroundColor: '',
    },
    formTitle: {
        color: "369DC1",
        fontSize: 20
    }
})