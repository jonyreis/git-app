import React from 'react'
import { useSelector } from 'react-redux'
import { Image } from 'react-native'
import { Feather } from '@expo/vector-icons';

import styled from 'styled-components/native';

const Container = styled.View`
  background-color: #1F1F1F;
  width: 100%;
  height: 100%;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`;

const LoginText = styled.Text`
  color: #fff;
  font-weight: 700;
`

const ButtonSair = styled.TouchableOpacity`
  border-radius: 12px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const ButtonTextSair = styled.Text`
  color: #fff;
  font-size: 17px;
  font-weight: 400;
  margin-left: 8px;
`

const Main = styled.SafeAreaView`
  background-color: #292929;
  padding: 30px;
  height: 80%;
`

const Name = styled.Text`
  color: red;
  font-size: 26px;
  text-transform: uppercase;
  &::before {
    content: ' ';
    display: block;
    background-color: red;
    width: 20px;
    height: 30px;
    z-index: 100;
  }
`

const Email = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: 300;
`

const City = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: 300;
`

export default function Home() {
  const selector = useSelector(state => state);
  const user = selector.login.user
  console.log(user)

  async function handleSubmit() {
    try {
      dispatch(LoginActions.addUserAction(USER));
      dispatch(LoginActions.addAuthenticated({ authenticated: false }));
    } catch (error) {
      setIsStatus('error')
    }
  }
  return (
    <>
      <Container>
        <LoginText>#{user.login}</LoginText>
        <ButtonSair onPress={handleSubmit}>
          <Feather name="log-out" size={20} color="#D03434" />
          <ButtonTextSair>Sair</ButtonTextSair>
        </ButtonSair>
      </Container>
      <Main>
        <Image
          source={{ uri: user.avatar_url, }}
          style={{
            borderRadius: "60px",
            width: "114px",
            height: "114px",
            marginTop: '-57px',
            marginLeft: '50%',
            left: '-57px'
          }}
        />
        <Name>anilton veiga</Name>
        <Email>aniltonveiga@gmail.com</Email>
        <City>Itú/SP</City>
      </Main>
    </>
  )
}
