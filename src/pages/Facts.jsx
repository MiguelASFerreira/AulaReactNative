import React, { useState } from 'react'
import axios from 'axios'
import { View, Text } from 'react-native'
import CardButton from '../components/CardButton'

const Facts = () => {
  const [catFact, setCatfact] = useState()
  const FactsLength = async () => {
    try {
        const {data} = await axios.get("https://catfact.ninja/fact")
        setCatfact(data)
    } catch (error) {
        console.log(error)
    }
  }


  return (
    <View>
        <CardButton onPressFacts={FactsLength} title="Clique" color="red" />
        <View>
            <Text>{catFact ? catFact.fact : ""}</Text>
            <Text>{catFact ? catFact.length : ""}</Text>
        </View>
    </View>
  )
}

export default Facts