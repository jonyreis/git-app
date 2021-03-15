import React from 'react'
import { StyleSheet, TextInput, SafeAreaView, TouchableOpacity, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import api from '../../services/api'

import { useDispatch } from 'react-redux';
import { Creators as LoginActions } from '../../store/ducks/login';

export default function Login({ navigation }) {
  const [input, setInput] = React.useState("")
  const [isRequiredField, setIsRequeridField] = React.useState(false)
  const [isStatus, setIsStatus] = React.useState(null)

  const dispatch = useDispatch()

  async function handleSubmit() {
    try {
      setIsRequeridField(true)
      const response = await api.get(`/users/${input}`)
      if (response.status === 200) {
        const USER = {
          login: response.data.login,
          name: response.data.name,
          email: response.data.email,
          location: response.data.location,
          company: response.data.company,
          bio: response.data.bio,
          avatar_url: response.data.avatar_url,
          followers_url: response.data.followers_url,
          following_url: response.data.following_url,
          organizations_url: response.data.organizations_url,
          starred_url: response.data.starred_url,
          public_repos: response.data.public_repos,
          public_gists: response.data.public_gists,
          followers: response.data.followers,
          following: response.data.following,
        }
        dispatch(LoginActions.addUserAction(USER));
        dispatch(LoginActions.addAuthenticated({ authenticated: true }));
      }

      console.log(response.status)
      console.log(response.data)
    } catch (error) {
      setIsStatus(404)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <AntDesign
        name="github"
        size={98}
        color="#FFCE00"
        style={styles.img}
      />
      {input.length === 0 && isRequiredField &&
        <View style={styles.errorcontainer} >
          <Text style={styles.error} >Campo Obrigatório</Text>
        </View>
      }
      {input.length > 0 && isStatus === 404 &&
        <View style={styles.errorcontainer} >
          <Text style={styles.error} >Usuário não encontrado</Text>
        </View>
      }
      <TextInput
        placeholder="Usuário"
        placeholderTextColor="#535353"
        placeholderFontSize="20"
        style={styles.input}
        autoCapitalize="none"
        value={input}
        onChangeText={(value) => setInput(value)}
        returnKeyType="send"
        />
      <TouchableOpacity
        onPress={handleSubmit}
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
  errorcontainer: {
    top: 36,
    right: -80,
    zIndex: 1

  },
  error: {
    color: 'red',
  },
  img: {
    marginBottom: 48
  }
})
