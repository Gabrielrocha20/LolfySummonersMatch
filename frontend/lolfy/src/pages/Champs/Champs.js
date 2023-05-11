import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
import axios from 'axios';

import ItemGrid from '../../components/ItemsGrid'

const Bk_img = "https://www.riotgames.com/darkroom/1440/d1bf366414b0028c9726311c2b9e2237:c559b6bd64d36423289dc9006d2ec8cd/00-hero-elderwood-ornn-final.jpg"


export default function Champs({route}) {
    const [champ, setChamp] = useState()
    const {obj} = route.params

    
    axios.get('https://gabrielrocha20.pythonanywhere.com/api/questions/', {params: obj}) // substitua a URL pela sua API
    .then(response => {
        setChamp(response.data)
    })
    .catch(error => {
        // Trate os erros aqui
        console.error("Erro => ",error);
    });


    return (
        <View style={styles.container}>
            <Image source={{uri: Bk_img}} style={StyleSheet.absoluteFillObject} blurRadius={80} />
            
            <ItemGrid style={styles.items} data={champ}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        
    },
})