import React from "react";
import {Image, Text} from "react-native";
import topo from '../../assets/topo.png'
import { SafeAreaView, StyleSheet } from "react-native-web";
import { Dimensions } from "react-native";
export default function Agendamentos() {
    return<>
     <Image source={topo} style={estilos.topo} />
     <Text style={estilos.titulo}>Meus Agendamentos</Text>

     <SafeAreaView>
        <Text>Salas Agendadas:</Text>
        <Text>Confira seus agendamentos, clicando nas salas abaixo.
            Caso haja necessidade de alteração, basta clicar em 
                           ALTERAR AGENDAMENTOS.</Text>
     </SafeAreaView>
    </>
}

const width = Dimensions.get("screen").width
const estilos = StyleSheet.create({
    topo: {
        width: "100%", 
        height: 578 / 768 * width,
    },

    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 20, 
        lineHeight: 26,
        color: "gray",
        fontWeight: "bold",
        padding: 30
    }
});