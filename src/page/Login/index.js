import React from 'react';
import { useDispatch } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components/native';

import api from '../../services/api';

import { Creators as LoginActions } from '../../store/ducks/login';

const Container = styled.View`
  background-color: #292929;
  width: 100%;
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  background-color: #FFCE00;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 56px;
`

const ButtonText = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: 700;
`

const Input = styled.TextInput`
  background-color: #fff;
  border-radius: 12px;
  font-size: 20px;
  width: 90%;
  height: 56px;
  padding: 8px;
  margin-bottom: 20px;
`

const ErrorContainer = styled.View`
  top: 36px;
  right: -80px;
  z-index: 1;
`

const Error = styled.Text`
  color: 'red';
`

export default function Login() {
  const [input, setInput] = React.useState("")
  const [isRequiredField, setIsRequeridField] = React.useState(false)
  const [isStatus, setIsStatus] = React.useState("")

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
    } catch (error) {
      setIsStatus('error')
    }
  }

  return (
    <Container>
      <AntDesign
        name="github"
        size={98}
        color="#FFCE00"
        style={{ marginBottom: 48 }}
      />
      {input.length === 0 && isRequiredField &&
        <ErrorContainer>
          <Error>Campo Obrigatório</Error>
        </ErrorContainer>
      }
      {input.length > 0 && isStatus === 'error' &&
        <ErrorContainer>
          <Error>Usuário não encontrado</Error>
        </ErrorContainer>
      }
      <Input
        placeholder="Usuário"
        placeholderTextColor="#535353"
        placeholderFontSize="20"
        autoCapitalize="none"
        value={input}
        onChangeText={(value) => setInput(value)}
        returnKeyType="send"
        />
      <Button onPress={handleSubmit}>
        <ButtonText>Entrar</ButtonText>
      </Button>
    </Container>
  )
}
