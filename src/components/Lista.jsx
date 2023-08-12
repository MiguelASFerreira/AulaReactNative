import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Lista = ({lista}) => {
 return (
    <View style={styles.body}>
        {lista.map((item) => {
            <Text key={item.name}>
              Nome: {item.name} Idade: {item.idade}
            </Text>
        })}
    </View>
  )
}

export default Lista

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#000",
    margin: 15
  },
})