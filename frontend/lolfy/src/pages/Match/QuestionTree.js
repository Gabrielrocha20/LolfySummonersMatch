import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';

const Bk_img = "https://www.riotgames.com/darkroom/1440/d1bf366414b0028c9726311c2b9e2237:c559b6bd64d36423289dc9006d2ec8cd/00-hero-elderwood-ornn-final.jpg"


const QuestionTree= ({route}) => {

  const navigation = useNavigation()
  const {obj} = route.params
  const ChangeSubTipo = (subtipo) => {
    obj.subtipo = subtipo
    navigation.navigate("QuestionFor", { obj });
  };
    return (
      <View style={styles.container}>
        <Image source={{uri: Bk_img}} style={StyleSheet.absoluteFillObject} blurRadius={70} />
        <Animatable.View animation="fadeInLeft" delay={500}>
          <Text style={styles.heading}>Qual o tipo de campeão você gosta 2/2?</Text>
        </Animatable.View>
        <Animatable.View animation="fadeInLeft" delay={650} >
          <TouchableOpacity style={styles.buttonSelect} onPress={() => ChangeSubTipo("MAGO")}>
            <Text style={styles.buttonText}>Mago</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSelect} onPress={() => ChangeSubTipo("Ass")}>
            <Text style={styles.buttonText}>Assassino</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSelect} onPress={() => ChangeSubTipo("LUT")}>
            <Text style={styles.buttonText}>Lutador</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSelect} onPress={() => ChangeSubTipo("ADC")}>
            <Text style={styles.buttonText}>Atirador</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSelect} onPress={() => ChangeSubTipo("SUP")}>
            <Text style={styles.buttonText}>Suporte</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSelect} onPress={() => ChangeSubTipo("TANQ")}>
            <Text style={styles.buttonText}>Tanque</Text>
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

export default QuestionTree
