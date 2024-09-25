import React from "react";
import { View, Text } from "react-native";

export default function Information({ route }) {
    return (
        <View style={{marginTop: 60, marginLeft: 20 }}>
            <Text>Nome: {route.params?.nome}</Text>
            <Text>Telefone: {route.params?.telefone}</Text>
            <Text>Endereço: {route.params?.endereco}</Text>
            <Text>Nº: {route.params?.numero}</Text>
            <Text>Profissão: {route.params?.profissao}</Text>
            <Text>Email: {route.params?.email}</Text>
        </View>
    )
}