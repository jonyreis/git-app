import React from 'react'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { Feather } from '@expo/vector-icons';

import styled from 'styled-components/native';
import { FlatList } from 'react-native-gesture-handler';

const ContentVoltar = styled.View`
  background-color: #1F1F1F;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60px;
  padding: 16px;
`

const ButtonVoltar = styled.TouchableOpacity`
  border-radius: 12px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 16px;
`

const Main = styled.View`
  margin-top: -1px;
`
const ReposContainer = styled.View`
  background-color: #292929;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #707070;
  padding: 30px 0;
`

const ContentTitleRepo = styled.View`
  flex-direction: row;
  align-items: center;
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
  font-size: 20px;
  font-weight: 700;
`

const Description = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: 300;
  padding-right: 40px;
  padding-left: 30px;
`

const ContentInfoRepo = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 30px;
  margin-top: 16px;
`

const ContentTypeRepo = styled.View`
  flex-direction: row;
  align-items: center;
`

export default function Home() {
  const navigation = useNavigation();

  const selector = useSelector(state => state);
  const repos = selector.repos

  return (
    <>
      <ContentVoltar>
        <ButtonVoltar onPress={() => navigation.navigate('Home')}>
          <Feather name="arrow-left" size={26} color="#FFF" />
        </ButtonVoltar>
        <Text style={{
          color: '#fff',
          fontSize: '17px',
          fontWeight: '700',
          textAlign: 'center',
          margin: '0 auto'

        }}
        >{repos.length} repositórios</Text>
      </ContentVoltar>
      <Main>
        <FlatList
          data={repos}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) =>
          <ReposContainer key={item.id}>
            <ContentTitleRepo>
              <Content />
              <Name>{item.name}</Name>
            </ContentTitleRepo>
             <Description>{item.description}</Description>
             <ContentInfoRepo>
               <ContentTypeRepo>
                 <Feather name="star" size={24} color="#FFCE00" />
                 <Text style={{
                   color: '#fff',
                   fontSize: '15px',
                   fontWeight: '300',
                   marginLeft: '8px'
                 }}>{item.stargazers_count}</Text>
               </ContentTypeRepo>
               <ContentTypeRepo>
                 {item.private ?
                   <Feather name="lock" size={24} color="#CC042A" />
                 :
                   <Feather name="unlock" size={24} color="#63BF1F" style={{marginRight: '8px'}} />
                 }
               </ContentTypeRepo>
             </ContentInfoRepo>
           </ReposContainer>
        }
      />
      </Main>
    </>
  )
}
