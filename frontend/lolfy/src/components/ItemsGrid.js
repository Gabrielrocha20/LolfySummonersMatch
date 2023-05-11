import { View, Text, FlatList, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {
    useFonts,
    Jost_400Regular,
    Jost_700Bold
} from "@expo-google-fonts/jost"
import AppLoading from "expo-app-loading"


export default function ItemsGrid({data}) {
    const campeoes = data
    const [fontsLoaded] = useFonts({Jost_400Regular, Jost_700Bold})
    if (!fontsLoaded){
        <AppLoading/>
    }

    const navigation = useNavigation()
    if (campeoes != undefined){
        if (campeoes.length > 0){

            return (
                <SafeAreaView style={styles.itemsContainer}>
                <View style={styles.btnHome}>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <Image style={{width: 40, height:40}}source={require('../assets/voltar.png')}/>
                    </TouchableOpacity>
                </View>
                <FlatList data={campeoes} keyExtractor={item => item.id }
                renderItem={({ item })  =>
                    <TouchableOpacity>
                        <View >
                            <TouchableOpacity style={styles.items} onPress={() => navigation.navigate('Campeão', {item})}>
                                <Image style={styles.image} source={{uri:item.imagem}}/>
                                <View>
                                    <Text style={{marginTop:10,marginLeft:10,fontSize: 25, fontFamily:'Jost_700Bold'}} >{item.nome}</Text>
                                    <Text style={{marginTop:10,marginLeft:10,fontSize: 15, fontWeight:'bold'}}>Rotas: {item.rotas[0]}</Text>
                                    <Text style={{marginTop:10,marginLeft:10,fontSize: 15, fontWeight:'bold'}}>Tipo: {item.tipo}</Text>
                                    <Text style={{marginTop:3,marginLeft:10,fontSize: 12,fontFamily: 'Jost_400Regular', color: "#2a2d31"}}>Subtipo: {item.subtipo}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                }/>
            </SafeAreaView>
    )
    }else{
        return (
            <SafeAreaView style={styles.itemsContainerVazio}>
                <View style={styles.itemsVazio}>
                    <Text style={{fontSize:30, fontWeight:'bold', color: 'rgb(208, 168, 92)'}}>Ops.. Não encontramos </Text>
                    <Text style={{fontSize:20, color: 'rgb(208, 168, 92)'}}>nenhum campeão do seu gosto</Text>
                    <TouchableOpacity style={styles.btnTry} onPress={() => navigation.navigate("Home")}>
                        <Text style={styles.buttonText}>Tente Novamente</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
    )
    }}else{
        return (
            <SafeAreaView style={styles.itemsContainerVazio}>
                <View style={styles.itemsVazio}>
                    <Text style={{fontSize:30, fontWeight:'bold', color: 'rgb(208, 168, 92)'}}>Ops.. Não encontramos </Text>
                    <Text style={{fontSize:20, color: 'rgb(208, 168, 92)'}}>nenhum campeão do seu gosto</Text>
                    <TouchableOpacity style={styles.btnTry} onPress={() => navigation.navigate("Home")}>
                        <Text style={styles.buttonText}>Tente Novamente</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
    )
    }
}

const styles = StyleSheet.create({
    itemsContainer: {
        marginTop: 50,
    },
    items: {
        flexDirection: 'row',
        marginBottom: 20,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        borderRadius: 10,
        backgroundColor: 'rgba(255,255, 255, 0.1)'
    },
    image: {
        width: 150,
        height:150,
        borderRadius: 20,
        marginLeft: 5
        
    },
    btnHome: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },

    itemsContainerVazio: {
        marginTop: 50,
    },
    itemsVazio: {
        marginBottom: 20,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        borderRadius: 10,
        textAlign: 'center',
        alignItems: 'center'
    },
    btnTry: {
        backgroundColor: 'rgba(11, 198, 227, 0.8)',
        marginTop: 50,
        borderRadius: 10,
        padding: 10,
        width: 300,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: "center"
    },
});