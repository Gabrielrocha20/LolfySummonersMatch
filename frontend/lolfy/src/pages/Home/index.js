import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';

const Bk_img = "https://www.riotgames.com/darkroom/1440/d1bf366414b0028c9726311c2b9e2237:c559b6bd64d36423289dc9006d2ec8cd/00-hero-elderwood-ornn-final.jpg"


const HomeScreen = () => {
  const navigation = useNavigation()
  
  return (
    <View style={styles.container}>
      <Image source={{uri: Bk_img}} style={StyleSheet.absoluteFillObject} blurRadius={80} />
        <View style={styles.titleContainer}>
          <Animatable.Image  animation="fadeInLeft" delay={650} source={require('../../assets/lolfy.png')}/>
          <Animatable.View style={{marginTop:20, alignItems: 'center'}}>
            <Animatable.Text style={styles.title} animation="fadeInLeft" delay={650} >Bem vindo ao Summoner's Match!</Animatable.Text>
            <Animatable.Text style={styles.text} animation="fadeInLeft" delay={650} >Criado para ajudar Você, a achar seu novo campeão</Animatable.Text>
            <Animatable.Text style={styles.text} animation="fadeInLeft" delay={650} >Responda nossas perguntas para vizualizar</Animatable.Text>
            <Animatable.Text style={styles.text} animation="fadeInLeft" delay={650} > os Campeões da sua escolha</Animatable.Text>
          </Animatable.View>
        </View>
        <Animatable.View style={styles.containerForm} delay={600} animation="fadeInUp">
          <Text style={styles.title}>Bem vindo ao Summoner's Match!</Text>
          <Text style={styles.text}>Vamos encontrar seu campeão</Text>

          <TouchableOpacity style={styles.buttonSelect} onPress={() => navigation.navigate("QuestionOne")}>
            <Text style={styles.buttonText}>Vamos la!</Text>
          </TouchableOpacity>
        </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    titleContainer: {
        flex: 2,
        alignItems: 'center',
        marginTop: 100,
    },
    containerForm: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 15,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingStart: "5%",
      paddingEnd: "5%"
    },
    title:{
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 28,
      marginBottom:  12,
      color: "#eead2d"
    },
    text: {
      color: '#e6e3e3',
      fontWeight: '500'
    },
    buttonSelect: {
      backgroundColor: 'rgba(11, 198, 227, 0.8)',
      marginTop: 50,
      marginBottom:10,
      borderRadius: 10,
      padding: 10,
      width: 300,
      height: 50,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: "center"
    },
    desc: {
      fontSize: 15,
      color:"#a1a1a1"
    }
  
  });
  

export default HomeScreen