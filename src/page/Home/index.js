import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Image, Text } from 'react-native'
import { Feather } from '@expo/vector-icons';

import styled from 'styled-components/native';
import { Creators as LoginActions } from '../../store/ducks/login';
import { Creators as ReposActions } from '../../store/ducks/repos';
import { Creators as FollowersActions } from '../../store/ducks/followers';
import { Creators as FollowingActions } from '../../store/ducks/following';

import api from '../../services/api';

const Container = styled.View`
  background-color: #1F1F1F;
  width: 100%;
  height: 100%;
  flex: 1;
  padding: 16px;
`;

const ContentSair = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 30px;
`

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

const Main = styled.SafeAreaView`
  background-color: #292929;
  height: 80%;
  margin-top: -1px;
`

const ContentTitleName = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
`

const ContentTitleBio = styled.View`
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
  font-size: 26px;
  font-weight: 700;
  text-transform: uppercase;
`

const ContentEmailCity = styled.View`
  margin-block-start: -8px;
  margin-left: 30px;
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

const ContentInfos = styled.View`
  background-color: #5252525D;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 96px;
  margin: 44px 0;
`

const Info = styled.View`
  text-align: center;
`

const TextNumber = styled.Text`
  color: #fff;
  font-size: 40px;
  font-weight: 700;
`

const TextInfo = styled.Text`
  color: #fff;
  font-size: 17px;
  font-weight: 300;
`

const TextBio = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 300;
  line-height: 24px;
  padding: 0 30px;
  margin-bottom: 70px;
`

export default function Home() {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const selector = useSelector(state => state);
  const user = selector.login.user

  React.useEffect(() => {
    async function getRepos(user) {
      const response = await api.get(`/users/${user}/repos`)

      dispatch(ReposActions.addReposAction(response.data));
    }

    async function getFollowers(user) {
      const response = await api.get(`/users/${user}/followers`)

      dispatch(FollowersActions.addFollowersAction(response.data));
    }

    async function getFollowing(user) {
      const response = await api.get(`/users/${user}/following`)

      dispatch(FollowingActions.addFollowingAction(response.data));
    }

    if (user.login) {
      getRepos(user.login)
      getFollowers(user.login)
      getFollowing(user.login)
    }

  }, [])

  function handleSignOut() {
    try {
      dispatch(LoginActions.addUserAction(null));
    dispatch(LoginActions.addAuthenticated(false));
      dispatch(ReposActions.addReposAction([]));
      dispatch(FollowersActions.addFollowersAction([]));
      dispatch(FollowingActions.addFollowingAction([]));
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <Container>
        <ContentSair>
          <LoginText>#{user.login}</LoginText>
          <ButtonSair onPress={handleSignOut}>
            <Text style={{
              color: '#fff',
              fontSize: '17px',
              fontWeight: '400',
              marginRight: '8px',
            }}
            >Sair</Text>
            <Feather name="log-out" size={22} color="#D03434" />
          </ButtonSair>
        </ContentSair>
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
        <ContentTitleName>
          <Content />
          <Name>{user.name}</Name>
        </ContentTitleName>
        <ContentEmailCity>
          <Email>{user.email}</Email>
          <City>{user.location}</City>
        </ContentEmailCity>
        <ContentInfos>
          <Info >
            <TextNumber>{user.followers}</TextNumber>
            <TextInfo>Seguidores</TextInfo>
          </Info>
          <Info>
            <TextNumber>{user.following}</TextNumber>
            <TextInfo>Seguindo</TextInfo>
          </Info>
          <Info>
            <TextNumber>{user.public_repos}</TextNumber>
            <TextInfo>Repos</TextInfo>
          </Info>
        </ContentInfos>
        <ContentTitleBio>
          <Content />
          <Name>Bio</Name>
        </ContentTitleBio>
        <TextBio>{user.bio}</TextBio>
      </Main>
    </>
  )
}
