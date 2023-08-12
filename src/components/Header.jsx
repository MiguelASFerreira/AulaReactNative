import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Header = () => {
  return (
    <View style={styles.center}>
        <Text style={styles.title}>Lista</Text>
    </View>
  )
}

export default Header


const styles = StyleSheet.create({
    center: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15
    }
})