import React from 'react'
import { Text, View } from 'react-native'

const User = ({user}) => {
  return (
    <View>
        <Text>Genero: {user.gender}</Text>
        <Text>Titulo: {user.name.title}</Text>
        <Text>Primeiro nome: {user.name.first}</Text>
        <Text>Segundo nome: {user.name.last}</Text>
        <Text>Email: {user.email}</Text>
        <Text>Telefone: {user.phone}</Text>
    </View>
  )
}

export default User