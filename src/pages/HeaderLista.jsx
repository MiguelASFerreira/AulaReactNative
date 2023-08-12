import React from 'react'
import { View } from 'react-native'
import Header from '../components/Header'
import Lista from '../components/Lista'

const HeaderLista = () => {
  array = [{name: "Fulano", idade: 20}, {name: "Beltrano", idade: 22}, {name: "Ciclano", idade: 19}, {name: "Jhon Doe", idade: 30}]
  return (
    <View>
        <Header />
        <Lista lista={array} />
    </View>
  )
}

export default HeaderLista