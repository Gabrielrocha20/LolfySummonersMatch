import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import QuestionOne from '../pages/Match/QuestionOne'
import HomeScreen from '../pages/Home'
import QuestionTwo from '../pages/Match/QuestionTwo';
import QuestionTree from '../pages/Match/QuestionTree';
import QuestionFor from '../pages/Match/QuestionFor';
import QuestionFive from '../pages/Match/QuestionFive';
import QuestionSix from '../pages/Match/QuestionSix';
import Champs from '../pages/Champs/Champs';
import Champ from '../pages/Champs/Champ';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreen}/>
        <Stack.Screen options={{headerShown:false}} name="QuestionOne" component={QuestionOne}/>
        <Stack.Screen options={{headerShown:false}} name="QuestionTwo" component={QuestionTwo}/>
        <Stack.Screen options={{headerShown:false}} name="QuestionTree" component={QuestionTree}/>
        <Stack.Screen options={{headerShown:false}} name="QuestionFor" component={QuestionFor}/>
        <Stack.Screen options={{headerShown:false}} name="QuestionFive" component={QuestionFive}/>
        <Stack.Screen options={{headerShown:false}} name="QuestionSix" component={QuestionSix}/>
        <Stack.Screen options={{headerShown:false}} name="Campeões" component={Champs}/>
        <Stack.Screen options={{headerShown:false}} name="Campeão" component={Champ}/>
      </Stack.Navigator>
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
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonSelect: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginTop: 50,
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

});
