import React from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { Image, Text } from 'react-native'
import { Feather } from '@expo/vector-icons';

import styled from 'styled-components/native';

import { Creators as AnotherFollowersActions } from '../../store/ducks/anotherFollowers';
import { Creators as AnotherFollowingActions } from '../../store/ducks/anotherFollowing';
import { Creators as LoginActions } from '../../store/ducks/login';

import api from '../../services/api';

const Container = styled.View`
  background-color: #1F1F1F;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 16px;
  position: relative;
`;

const ContentSalvar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  position: absolute;
  top: 20px;
  right: 16px;
`
const ButtonVoltar = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  left: 16px;
`

const LoginText = styled.Text`
  color: #fff;
  font-size: 17px;
  font-weight: 700;
  flex: 1;
  text-align: center;
  position: absolute;
  top: 24px;
  left: 50%;
  margin-left: ${({ widthLogin }) => `-${Math.round((widthLogin/2)+1)}ch`};
`

const ButtonSalvar = styled.TouchableOpacity`
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

export default function Home({ route }) {
  const [anotherUserData, setAnotherUserData] = React.useState({})

  const dispatch = useDispatch()
  const navigation = useNavigation()

  const selector = useSelector(state => state)
  const anotherFollower = selector.anotherFollowersUser.name
  const anotherFollowing = selector.anotherFollowingUser.name

  const widthLogin = String(anotherUserData.login).length

  console.log(anotherUserData.login, widthLogin)
  React.useEffect(() => {
    const user = route.name === "Seguidores" ? anotherFollower : anotherFollowing

    async function callAnother() {
      const response = await api.get(`/users/${user}`)
      if (response.status === 200) {
        const ANOTHERUSER = {
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
        setAnotherUserData(ANOTHERUSER)
      }
    }
    callAnother()


  }, [])

  function handleSalvar() {
    try {
      // dispatch(route.name === "Seguidores" ?
      //   AnotherFollowersActions.addFollowersAction(anotherUserData.login)
      //   :
      //   AnotherFollowingActions.addFollowingAction(anotherUserData.login))


      dispatch(LoginActions.addUserAction(anotherUserData));
      dispatch(LoginActions.addAuthenticated(true))
      navigation.navigate("Home")
      dispatch(AnotherFollowersActions.removeFollowersAction(""))
      dispatch(AnotherFollowingActions.removeFollowingAction(""))
    } catch (error) {
      console.error(error)
    }
  }
  function handleGoBack() {
    navigation.navigate("Home")
    dispatch(route.name === "Seguidores" ?
      AnotherFollowersActions.removeFollowersAction("")
      :
      AnotherFollowingActions.removeFollowingAction(""))
  }
  return (
    <>
      <Container>
          <ButtonVoltar onPress={handleGoBack}>
            <Feather name="arrow-left" size={26} color="#FFF" />
          </ButtonVoltar>
          <LoginText widthLogin={widthLogin}>#{anotherUserData.login}</LoginText>
          <ContentSalvar>
            <ButtonSalvar onPress={handleSalvar}>
              <Text style={{
                color: '#fff',
                fontSize: '17px',
                fontWeight: '400',
                marginRight: '8px',
              }}
              >Salvar</Text>
              <Feather name="log-in" size={22} color="#5CBC29" />
            </ButtonSalvar>
          </ContentSalvar>
      </Container>
      <Main>
        <Image
          source={{ uri: anotherUserData.avatar_url, }}
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
          <Name>{anotherUserData.name}</Name>
        </ContentTitleName>
        <ContentEmailCity>
          <Email>{anotherUserData.email}</Email>
          <City>{anotherUserData.location}</City>
        </ContentEmailCity>
        <ContentInfos>
          <Info >
            <TextNumber>{anotherUserData.followers}</TextNumber>
            <TextInfo>Seguidores</TextInfo>
          </Info>
          <Info>
            <TextNumber>{anotherUserData.following}</TextNumber>
            <TextInfo>Seguindo</TextInfo>
          </Info>
          <Info>
            <TextNumber>{anotherUserData.public_repos}</TextNumber>
            <TextInfo>Repos</TextInfo>
          </Info>
        </ContentInfos>
        <ContentTitleBio>
          <Content />
          <Name>Bio</Name>
        </ContentTitleBio>
        <TextBio>{anotherUserData.bio}</TextBio>
      </Main>
    </>
  )
}
