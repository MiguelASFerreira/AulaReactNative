import axios from 'axios'
import React, { useState } from 'react'
import CardButton from '../components/CardButton'
import { Text, View } from 'react-native'

const Univer = () => {
  const [uni, setUni] = useState([])
  const universidade = async () => {
    try {
        const { data } = await axios.get("http://universities.hipolabs.com/search?country=Brazil")
        setUni(...data)
        console.log(uni)
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <View>
        <CardButton color={"red"} onPressFacts={universidade} title={"Clique"}/> 
        {uni && 
            <>
                <Text>{uni.name}</Text>
                <Text>{uni.domains}</Text>
            </>}
    </View>
  )
}

export default Univer