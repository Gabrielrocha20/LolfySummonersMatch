import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList} from 'react-native';

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';
import ItemsGrid from '../../components/ItemsGrid';

const Bk_img = "https://www.riotgames.com/darkroom/1440/d1bf366414b0028c9726311c2b9e2237:c559b6bd64d36423289dc9006d2ec8cd/00-hero-elderwood-ornn-final.jpg"


const QuestionOne= () => {

  const navigation = useNavigation()
  const ChangeRota = (rota) => {
    const obj = {
      rota: rota,
    };
    navigation.navigate("QuestionTwo", { obj });
  };
  return (
    <View style={styles.container}>
      <Image source={{uri: Bk_img}} style={StyleSheet.absoluteFillObject} blurRadius={70} />
      <Animatable.View animation="fadeInLeft" delay={500}>
        <Text style={styles.heading}>Qual rota você joga?</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInLeft" delay={650} >
        <TouchableOpacity style={styles.buttonSelect} onPress={() => ChangeRota("Top")}>
          <Text style={styles.buttonText}>Top</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSelect} onPress={() => ChangeRota("Jungle")}>
          <Text style={styles.buttonText}>Jungle</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSelect} onPress={() => ChangeRota("Mid")}>
          <Text style={styles.buttonText}>Mid</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSelect} onPress={() => ChangeRota("Atirador")}>
          <Text style={styles.buttonText}>Atirador</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSelect} onPress={() => ChangeRota("Suporte")}>
          <Text style={styles.buttonText}>Suporte</Text>
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

export default QuestionOne