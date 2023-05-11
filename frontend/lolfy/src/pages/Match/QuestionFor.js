import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';

const Bk_img = "https://www.riotgames.com/darkroom/1440/d1bf366414b0028c9726311c2b9e2237:c559b6bd64d36423289dc9006d2ec8cd/00-hero-elderwood-ornn-final.jpg"


const QuestionFor= ({route}) => {

  const navigation = useNavigation()
  const {obj} = route.params
  const ChangeEstilo = (estilo) => {
    obj.preferencia_1 = estilo
    navigation.navigate("QuestionFive", { obj });
  };
    return (
      <View style={styles.container}>
        <Image source={{uri: Bk_img}} style={StyleSheet.absoluteFillObject} blurRadius={70} />
        <Animatable.View animation="fadeInLeft" delay={500}>
          <Text style={styles.heading}>Qual Seu estilo de jogo?</Text>
        </Animatable.View>
        <Animatable.View animation="fadeInLeft" delay={650} >
          <TouchableOpacity style={styles.buttonSelect} onPress={() => ChangeEstilo("SB")}>
            <Text style={styles.buttonText}>Snow Ball</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSelect} onPress={() => ChangeEstilo("TF")}>
            <Text style={styles.buttonText}>Team Fight</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSelect} onPress={() => ChangeEstilo("SP")}>
            <Text style={styles.buttonText}>Split Push</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 50,
  },
  itemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  items: {
    width: '30%'
  },
  image: {
    width: 70,
    height:70,

  },
  buttonSelect: {
    backgroundColor: 'rgb(208, 168, 92)',
    marginTop: 5,
    borderRadius: 10,
    padding: 10,
    width: 250,
    height: 50,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: "center",
  },

});

export default QuestionFor