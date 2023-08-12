import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const CardButton = ({title,color, onPressFacts}) => {
  return (
    <TouchableOpacity onPress={onPressFacts} style={{
        backgroundColor: color,
        height: 300,
        width: 100
    }}>
        <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default CardButton