import React from 'react'
import { StyleSheet, TextInput, SafeAreaView, TouchableOpacity, Text, Image  } from 'react-native'

import { AntDesign } from '@expo/vector-icons';

export default function Login({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <AntDesign
        name="github"
        size={98}
        color="#FFCE00"
        style={styles.img}
      />
      <TextInput
        placeholder="Usuário"
        placeholderTextColor="#535353"
        placeholderFontSize="20"
        style={styles.input}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{
          backgroundColor: '#FFCE00',
          borderRadius: 12,
          justifyContent: 'center',
          alignItems: 'center',
          width: '90%',
          height: 56
        }}>
        <Text style={{ fontSize: 20, fontWeight: "700", color: '#000' }}>Entrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#292929',
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    fontSize: 20,
    width: '90%',
    height: 56,
    padding: 8,
    marginBottom: 20,
  },
  img: {
    marginBottom: 48
  }
})
