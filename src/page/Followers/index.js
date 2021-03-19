import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { Image, Text } from 'react-native'
import { Feather } from '@expo/vector-icons';

import styled from 'styled-components/native';

const ContentVoltar = styled.View`
  background-color: #1F1F1F;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60px;
  padding: 16px;
`

const ButtonVoltar = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 16px;
`

const Main = styled.SafeAreaView`
  margin-top: -1px;
`

const FollowersContainer = styled.View`
  background-color: #292929;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #707070;
  flex-direction: row;
  align-items: center;
  padding: 20px 0;
`

const ButtonEntrar = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
`

const Content = styled.View`
  content: '';
  display: inline-block;
  background-color: #FFCE00;
  width: 20px;
  height: 42px;
  border-radius: 33%;
  margin-right: 20px;
  margin-left: -12px;
`

const Name = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-weight: 700;
`


export default function Followers() {
  const navigation = useNavigation();

  const selector = useSelector(state => state);
  const followers = selector.followers

  return (
    <>
      <ContentVoltar>
        <ButtonVoltar onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={26} color="#FFF" />
        </ButtonVoltar>
        <Text style={{
          color: '#fff',
          fontSize: '17px',
          fontWeight: '700',
          textAlign: 'center',
          margin: '0 auto'

        }}
        >{followers.length} seguidores</Text>
      </ContentVoltar>
      <Main>
      {followers.map((item) => (
        <FollowersContainer key={item.id}>
          <Content />
          <Image
            source={{ uri: item.avatar_url, }}
            style={{
                border: "3px solid #fff",
                borderRadius: "32px",
                width: "64px",
                height: "64px",
                marginRight: "32px"
              }}
          />
          <Name>#{item.login}</Name>
          <ButtonEntrar>
            <Feather name="arrow-right" size={22} color="#FFF" />
          </ButtonEntrar>
        </FollowersContainer>
      ))}
      </Main>
    </>
  )
}
