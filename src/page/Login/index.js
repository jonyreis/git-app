import React from 'react'
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native'

export default function Login({ navigation }) {
  return (
    <SafeAreaView>
      <Text>Login Screen</Text>
      <Button title="Entrar"
        onPress={() => navigation.navigate('Home')} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
