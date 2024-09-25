import React from "react";
import { View, Text } from "react-native";

export default function Contacts({navigation}) {
    return (
        <View style={{marginTop: 60, marginLeft: 20 }}>
            <View>
                <Text>Nome: Joao Silva</Text>
                <Text>Telefone: (11) 96589-6658</Text>
                <Text onPress={() => navigation.navigate("Information", {
                    nome: "João Silva",
                    telefone: "(11) 96589-6658",
                    endereco: "Rua das Flores",
                    numero: '765',
                    profissao: "Carpinteiro",
                    email: "joaosilva@carpintaria.com.br"
                })}>Information...</Text>
            </View>
            <View style={{marginTop: 20}}>
                <Text>Nome: Matheus Silva</Text>
                <Text>Telefone: (11) 98589-6265</Text>
                <Text onPress={() => navigation.navigate("Information", {
                    nome: "Matheus Silva",
                    telefone: "(11) 98589-6265",
                    endereco: "Avendia Estela Nova",
                    numero: '3658',
                    profissao: "Desenvolvedor de Software",
                    email: "matheus.dev.code@matheusdev.com.br"
                })}>Information...</Text>
            </View>
        </View>
    )
}