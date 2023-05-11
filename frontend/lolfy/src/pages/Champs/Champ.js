import { View, Text, Image, StyleSheet,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function Champ({route}) {
    const champ = route.params.item

    const [showBox, setShowBox] = useState(1)

    const navigation = useNavigation()

    const handleButtonPress = (indice) => {
        setShowBox(indice);
      };

  return (
    <View style={styles.container}>
        <Image source={{uri: champ.imagem}} style={StyleSheet.absoluteFillObject} blurRadius={2} />
        <View style={styles.containerImage}>
            <Image source={{uri: champ.imagem}} style={styles.imagem}/>
        </View>
        <View style={styles.containerForm}>
            <View style={styles.containerButtons}>
                <TouchableOpacity style={styles.buttonsContainer} onPress={() =>  handleButtonPress(1)}><Image style={styles.icone}
                 source={require('../../assets/livro.png')}/></TouchableOpacity>
                <TouchableOpacity style={styles.buttonsContainer} onPress={() =>  handleButtonPress(2)}><Image style={styles.icone}
                 source={require('../../assets/fogo.png')}/></TouchableOpacity>
            </View>
            <ScrollView>
                {showBox === 1 && (
                    <View style={styles.boxDescricao}>
                        <View style={styles.boxTopDescricao}>
                            <View style={styles.itemsTopDesc}>
                                <Text style={{fontSize: 20, color: 'white', fontWeight: '700'}}>Função</Text>
                                <Text style={{fontSize: 15, color: '#d4b985', fontWeight: '700', textAlign: 'center'}}>{champ.tipo}</Text>
                                <Text style={{fontSize: 15, color: '#d4b985', fontWeight: '700', textAlign: 'center'}}>{champ.subtipo}</Text>
                            </View>
                            <View style={styles.itemsTopDesc}>
                                <Text style={{fontSize: 20, color: 'white', fontWeight: '700'}}>Dificuldade</Text>
                                <Text style={{fontSize: 15, color: '#d4b985', fontWeight: '700', textAlign: 'center'}}>{champ.dificuldade}</Text>
                            </View>
                        </View>
                        <View style={styles.boxMidDescricao}>
                            <Text style={styles.descricaoText}>{champ.descricao}</Text>
                        </View>
                    </View> 
                )}
                {showBox === 2 && (
                    <View style={styles.box}>
                        <View style={styles.itemsMidDesc}>
                            <Text style={styles.descricaoMidText}>Passiva:{"\n"}{champ.passiva}</Text>
                            <Text style={styles.descricaoMidText}>Q:{"\n"}{champ.habilidade_1}</Text>
                            <Text style={styles.descricaoMidText}>W:{"\n"}{champ.habilidade_2}</Text>
                            <Text style={styles.descricaoMidText}>E:{"\n"}{champ.habilidade_3}</Text>
                            <Text style={styles.descricaoMidText}>R:{"\n"}{champ.habilidade_4}</Text>
                        </View>
                    </View> 
                )}
            </ScrollView>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    btnHome: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    containerImage: {
        flex: 1,
        padding: 10,
        marginTop: 40,
        alignItems: 'center',
    },
    icone: {
        width: 80,
        height: 80,
    },
    imagem: {
        width: 200,
        height: 200,
        resizeMode:"center",
        borderRadius:120,
    },
    containerForm: {
        flex: 2.4,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        fontSize: 15,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%",
    },
    containerButtons:{
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonsContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius:50,
    },
    buttonactive: {
        backgroundColor: 'blue',
    },
    box: {
        justifyContent: 'center',
        marginTop: 50,
        
    },
    boxText: {
        color: 'white',
        marginBottom: 10,
        
    },
    descricaoText: {
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 24,
        marginBottom: 10,
        color: 'white',
    },
    boxDescricao: {
        borderColor: 'rgb(208, 168, 92)',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
    },
    boxTopDescricao: {
        borderBottomColor: 'rgb(208, 168, 92)',
        borderBottomWidth: 1,
        padding: 10,
        paddingBottom: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    itemsTopDesc:{
        margin: 10,
    },
    boxMidDescricao: {
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    itemsMidDesc: {
        padding: 2,
        
    },
    descricaoMidText: {
        fontSize: 15,
        fontWeight: 'bold',
        lineHeight: 24,
        borderBottomColor: 'rgb(208, 168, 92)',
        borderLeftColor: 'rgb(208, 168, 92)',
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        color: 'white',
    },
    
})